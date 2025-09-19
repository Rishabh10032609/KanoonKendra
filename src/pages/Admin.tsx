import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';

const Admin: React.FC = () => {
  // In real-world, you can fetch admin details from backend
  const adminDetails = {
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin"
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, {adminDetails.name}</h2>
        <p>Email: {adminDetails.email}</p>
        <p>Role: {adminDetails.role}</p>
      </IonContent>
    </IonPage>
  );
};

export default Admin;
