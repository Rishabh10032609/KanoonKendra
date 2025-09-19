import React, { useState } from 'react';
import { registerUser } from '../api';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonInput, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption
} from '@ionic/react';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    role: '',
    password: ''
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = async () => {
    try {
      const result = await registerUser({
        username: form.email,
        password: form.password,
        role: form.role,
        deviceId: 'web-1',
      });

      console.log('Registered:', result);
      alert('Registration successful! You can login now.');
    } catch (err) {
      alert('Registration failed. Try again.');
    }
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
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={form.password}
            placeholder="Enter Password"
            onIonChange={(e) => handleChange('password', e.detail.value!)}
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
            <IonSelectOption value="ROLE_ADMIN">Admin</IonSelectOption>
            <IonSelectOption value="ROLE_USER">User</IonSelectOption>
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
