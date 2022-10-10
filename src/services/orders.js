import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../utils/firebase'
import { db } from '../utils/firebase'
const collectionName = 'users'

export default {
  create: payload =>
    addDoc(collection(db, collectionName), payload).then(doc => {
      return doc.id
    }),
  update: (payload, id) =>
    setDoc(doc(db, collectionName, id), payload).then(() => {
      return id
    }),
  find: id =>
    getDoc(doc(db, collectionName, id)).then(doc => {
      return doc.exists() ? doc.data() : null
    }),
  get: (field, value, opr = '==') =>
    getDocs(
      query(collection(db, collectionName), where(field, opr, value))
    ).then(snapshot => {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }),
  upload: async (file, name) => {
    let newFile = ref(storage, `files/${name}`)

    let upload = await uploadBytes(newFile, file)
    let photoUrl = await getDownloadURL(upload.ref)
    return photoUrl
  }
}
