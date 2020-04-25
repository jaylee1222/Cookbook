import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDobTEwYm5St6nJ1ldieyu5hc29A3ipxNs",
    authDomain: "cookbook-60371.firebaseapp.com",
    databaseURL: "https://cookbook-60371.firebaseio.com",
    projectId: "cookbook-60371",
    storageBucket: "cookbook-60371.appspot.com",
    messagingSenderId: "812125995091",
    appId: "1:812125995091:web:7166f98538bef31e6d46a6",
    measurementId: "G-H3JW5N1EN9"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;