// Connection to firebase Realtime database
// Rename this file to `db.js` and fill in config information
// found at https://console.firebase.google.com

import Firebase from 'firebase'
let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
let app = Firebase.initializeApp(config)
export const db = app.database()
