import firebase from "../firebase";
import { getDatabase, ref, onValue, child, get } from "firebase/database";

class FireServices {
  getRef(reference) {
    const db = getDatabase(firebase)
    let result;
    const sectionsRef = ref(db, reference);
    onValue(sectionsRef, (data) => {
      result = data.val();
    });
    return result;
  }
}

export default new FireServices();