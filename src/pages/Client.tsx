import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';

const Client: React.FC = () => {
  // In real-world, you can fetch client details from backend
  const clientDetails = {
    name: "Client User",
    email: "client@example.com",
    plan: "Premium",
    role: "Client"
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Client Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, {clientDetails.name}</h2>
        <p>Email: {clientDetails.email}</p>
        <p>Plan: {clientDetails.plan}</p>
        <p>Role: {clientDetails.role}</p>
      </IonContent>
    </IonPage>
  );
};

export default Client;
