import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Programs from "./Programs";
import { AuthContext } from "../auth/auth";
import {db} from "../database/firebase";
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setuserData] = useState([]);
  const firebase = useFirebaseApp();

  useEffect(() => { 
    if(currentUser){
    
    const currentUserData = db.collection("Suscription").where("uid", "==", currentUser.uid).onSnapshot(snap => {
        const userData = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
        setuserData(userData[0])
        if(userData[0] === undefined && currentUser.email !== 'admin@gmail.com') {
            alert("Te informamos que tu cuenta ha sido dada de baja. Registrarte nuevamente.")   
            firebase.auth().signOut() 
            currentUser.delete()
        }
        
    });
    return () => currentUserData()}
}, [currentUser, alert, firebase]);

  return (
    <div>
      <Banner />
      <Programs />
    </div>
  );
};

export default Home;
