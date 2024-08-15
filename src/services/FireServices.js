import firebase from '../firebase';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';

class FireServices {
  getRef(reference, state) {
    const db = getDatabase(firebase)
    const sectionsRef = ref(db, reference);
    onValue(sectionsRef, (data) => {
      this.state = data.val();
    });
  }
}

export default new FireServices();