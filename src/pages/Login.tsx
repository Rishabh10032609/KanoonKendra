import React, { useState } from 'react';
import { loginUser } from '../api';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonInput, IonItem, IonLabel, IonButton, IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  roles: string[];
  exp: number;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const result = await loginUser({ username, password, deviceId: 'web-1' });

      // Save tokens
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);

      // Decode role from JWT
      const decoded: JwtPayload = jwtDecode(result.accessToken);
      console.log('Decoded token:', decoded);

      if (decoded.roles.includes('ROLE_ADMIN')) {
        history.push('/admin');
      } else {
        history.push('/client');
      }
    } catch (err) {
      alert('Login failed. Please try again.');
    }
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
