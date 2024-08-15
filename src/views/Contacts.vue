<template>
  <div class="text-gray-300">
    <SectionTitle
      :title="title.text"
      :subYellow="title.sub_primary"
      :subGray="title.sub_secondary"
    />
    <Scroller :to="'#detail-contacts'" />
    <div id="detail-contacts" class="flex items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <SectionBody :body="body[0]"></SectionBody>
        <ButtonEmail v-if="buttons.length > 0" :text="buttons[0].text"></ButtonEmail>
      </Section>
    </div>
  </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBody from '../components/SectionBody.vue';
import ButtonEmail from '../components/partials/ButtonEmail.vue';
import Scroller from '../components/partials/Scroller.vue';
import SectionTitle from '../components/SectionTitle.vue';
import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
const db = getDatabase(firebase);
export default {
  components: {
    SectionTitle,
    Section,
    SectionBody,
    Scroller,
    ButtonEmail,
  },
  data() {
    return {
      title: {
        text: '',
        sub_primary: '',
        sub_secondary: '',
      },
      body: [],
      buttons: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    fetchData() {
      this.getState('/pages/contacts/sections/title', 'title');
      this.getState('/pages/contacts/sections/body', 'body');
      this.getState('/pages/contacts/sections/buttons', 'buttons');
    },
    getState(reference, state) {
      const sectionsRef = ref(db, reference);
      onValue(sectionsRef, (data) => {
        this[state] = data.val();
      });
    },
  },
};
</script>
