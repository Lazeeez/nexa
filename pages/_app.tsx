import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/analytics';
import { ConnectionProvider } from '../src/context/ConnectionContext';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { UserProvider } from '../src/context/UserContext';
import { SHOULD_USE_FIREBASE_EMULATOR } from '../src/dev_constants';

const firebaseConfig = {
  apiKey: 'AIzaSyBqs7G-NwRklV7JZAS9V913xIb479bt7uw',
  authDomain: 'ideinnit2.firebaseapp.com',
  projectId: 'ideinnit2',
  databaseURL:
    'https://ideinnit2-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: 'ideinnit2.firebasestorage.app',
  messagingSenderId: '11134511326',
  appId: '1:11134511326:web:8966869859776488a17a4f',
  measurementId: 'G-26QQ4H89NF',
};

if (!firebase.apps?.length) {
  if (SHOULD_USE_FIREBASE_EMULATOR) {
    firebase.initializeApp({
      ...firebaseConfig,
      authDomain: 'localhost:9099',
      databaseURL: 'http://localhost:9000/?ns=ideinnit2-default-rtdb',
    });
    firebase.auth().useEmulator('http://localhost:9099');
    firebase.database().useEmulator('localhost', 9000);
  } else {
    firebase.initializeApp(firebaseConfig);
    if (typeof window !== 'undefined' && firebase.analytics) {
      firebase.analytics();
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" />
      <UserProvider>
        <ConnectionProvider>
          <Component {...pageProps} />
        </ConnectionProvider>
      </UserProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
