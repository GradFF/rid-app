import { doc, getDoc } from 'firebase/firestore'
import { newDateAdjusted } from '../utils/date'
import { db } from '../utils/firebase'

export default {
  isActiveSetting: () =>
    getDoc(doc(db, 'settings', 'sigle')).then(doc => {
      const semesters = doc.exists() ? doc.data().semesters : null

      if (semesters && semesters.length) {
        const today = new Date()
        const dateFilter = semesters.filter(
          d =>
            newDateAdjusted(d.start) <= today && newDateAdjusted(d.end) >= today
        )
        return dateFilter
      }

      return []
    }),

  find: () =>
    getDoc(doc(db, 'settings', 'sigle')).then(doc => {
      return doc.exists() ? doc.data() : null
    })
}
