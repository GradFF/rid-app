import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'

export default {
  find: () =>
    getDoc(doc(db, 'settings', sigle)).then(doc => {
      return doc.exists() ? doc.data() : null
    })
}
