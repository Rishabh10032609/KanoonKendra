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
  IonText,
} from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login with:', username, password);
    // Add your login API call here
  };

  const handleForgotPassword = () => {
    alert('Redirect to Forgot Password page');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Username</IonLabel>
          <IonInput
            value={username}
            placeholder="Enter Username"
            onIonChange={(e) => setUsername(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            placeholder="Enter Password"
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Login
        </IonButton>
        <IonText color="primary" onClick={handleForgotPassword} style={{ cursor: 'pointer', display: 'block', marginTop: '10px', textAlign: 'center' }}>
          Forgot Password?
        </IonText>
        {/* 🔹 New Registration Button */}
        <IonButton
          expand="block"
          color="secondary"
          className="ion-margin-top"
          routerLink="/register"
        >
          New Registration
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
