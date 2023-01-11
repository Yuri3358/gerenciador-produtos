const firebaseConfig = {
    apiKey: "AIzaSyBKS4ejpkD_LcyvIn1Y-wqe7vPu54YUgHU",
    authDomain: "inventario-produtos.firebaseapp.com",
    projectId: "inventario-produtos",
    storageBucket: "inventario-produtos.appspot.com",
    messagingSenderId: "697252104250",
    appId: "1:697252104250:web:a65ece00976e74f1a04d03",
    measurementId: "G-0KHT8Q689Z"
  };
  

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const colRef = db.collection("produtos")

exports = {colRef}