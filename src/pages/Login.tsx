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
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    console.log('Login with:', username, password);

    // 🔹 Dummy login logic — replace with API call
    if (username === 'admin' && password === 'admin123') {
      history.push('/admin'); // Redirect to Admin page
    } else if (username === 'client' && password === 'client123') {
      history.push('/client'); // Redirect to Client page
    } else {
      alert('Invalid credentials');
    }
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
        <IonText
          color="primary"
          onClick={handleForgotPassword}
          style={{ cursor: 'pointer', display: 'block', marginTop: '10px', textAlign: 'center' }}
        >
          Forgot Password?
        </IonText>
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
