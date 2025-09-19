import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    role: ''
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = () => {
    console.log('User registered:', form);
    // Call your backend API here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">First Name</IonLabel>
          <IonInput
            value={form.firstName}
            placeholder="Enter First Name"
            onIonChange={(e) => handleChange('firstName', e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Last Name</IonLabel>
          <IonInput
            value={form.lastName}
            placeholder="Enter Last Name"
            onIonChange={(e) => handleChange('lastName', e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            type="email"
            value={form.email}
            placeholder="Enter Email"
            onIonChange={(e) => handleChange('email', e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Mobile Number</IonLabel>
          <IonInput
            type="tel"
            value={form.mobile}
            placeholder="Enter Mobile Number"
            onIonChange={(e) => handleChange('mobile', e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Role</IonLabel>
          <IonSelect
            placeholder="Select Role"
            value={form.role}
            onIonChange={(e) => handleChange('role', e.detail.value)}
          >
            <IonSelectOption value="admin">Admin</IonSelectOption>
            <IonSelectOption value="user">User</IonSelectOption>
            <IonSelectOption value="guest">Guest</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={handleSignup}>
          Sign Up
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
