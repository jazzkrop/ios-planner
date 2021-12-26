import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBREi9QmRu1qM4wEckaG3VizuXTMxiuLiM',
  authDomain: 'todo-a38c0.firebaseapp.com',
  projectId: 'todo-a38c0',
  storageBucket: 'todo-a38c0.appspot.com',
  messagingSenderId: '757616742900',
  appId: '1:757616742900:web:199f91dca0d4af05e969a1',
  measurementId: 'G-5GMVBQBZ6M'
}

const app = initializeApp(firebaseConfig)

export default app
