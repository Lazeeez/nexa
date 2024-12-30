import { getApp, getApps, initializeApp, cert } from 'firebase-admin/app';

// // get this JSON from the Firebase board
// // you can also store the values in environment variables
// // import serviceAccount from './secret.json';

// if (!firebaseAdmin.apps.length) {
//   // firebaseAdmin.initializeApp({
//   //   credential: firebaseAdmin.credential.cert({
//   //     privateKey: serviceAccount.private_key,
//   //     clientEmail: serviceAccount.client_email,
//   //     projectId: serviceAccount.project_id,
//   //   }),
//   //   databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
//   // });
//   // note: export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
// and export FIREBASE_DATABASE_EMULATOR_HOST="localhost:9000"
//   firebaseAdmin.initializeApp({ projectId: 'cp-ide' });
// }

if (getApps().length === 0) {
  if (process.env.NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    initializeApp({
      credential: cert({
        projectId: 'ideinnit2',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCyIJuN413pK5lg\nqO97RrYnbMIzhmmXTLtkvdQA7vq9xrE3Pssa+RImxI7IGszRrKKQjFOFiKBCYxeU\nQeWfhs2iLH4LhOd8aRKUbdAoD4mTPIweQE5hLB/a/I/5HIJVT0TXutFOz0jR4uui\nSh0AI/j347abAvT3QWCe0gwfmnTp6I3kzs4OMTDgu+BT+H4b7kutV3cVmu2bKTo8\n5FN5MGTrHGtdFz+OnGcZq19ayIbsDFpawU8CY8RKP2RkwiP/ESyE0h6A01mz8uoj\n0lWmVsmIFHwPKol9dnOotH1aHtvnfGX+88+EZK22rEWnpvTrm1isgAcSYS1MZDgR\nuLi1p3n3AgMBAAECggEASPrpIKoOGPFfBuZQMB7ZlK+PpZKlgnLSuES6LqO7IbPd\nebgFeQihMjcIFN4+Go3zkOudcLF4j5qP15NkJAcUCyTVg5yxRxy5mwye4zryb9u3\nwNEyC8gLSSp/Rl4y3Ab9OrH0/agZuryRNE3PMfaLE+09LKd6fC9SCeAfTXd3/Tk0\ni6fFzrmIouW2OputZyV1ThqJu5pIL8lSqlOWtXNKeU3GIAx2ZfXJiO+0pzBtuD0a\nNdQwsKqUvGNoudTffhHq5RrIHiZ1VQeXHDiWB2P6O66sTO9VmZHCtiAbhkNmlLjP\nWV8teJG5IbdoWvPZmt+trSi8geoI3IWltYzlf2lREQKBgQD5T++H5vyK3KgW7KCF\nCpF/gvjfNhUdEezIN9UfxF/ZIC+k/6yZoaPE2LXNzJI57yJO2wp2J2uzdO5uYiC/\nBgwFYxqBBSphAiHOttv1yTxVXL5OzfUWxGI2x0wVt6hVcSMInQVnzLwitPA/bTCY\nY8xlJlYUBNzclRIT3J2uMyd0qQKBgQC259W3adiB708HyD/ECAU4+Qg01ORdwSOi\nJEWG5BM835BY5WfDvBkBwmkxRY1PTGHzceyTiMhTH8aySYyC/JKLOG44NmiN9Kuv\nOZh4hOJguRS3QUT7zhua4NP2WNKFbnN8ziDyZxzLifPWE+eN8FZoDSTGjQyd6vs1\nFLZogOP9nwKBgHbI0C5nLqIWufuaKGza+THQvDTVdr/P/4nxmBi3npc7z5eEvb7B\nFd8/BXgVZQI3XphForli1Ny+9K8hD8sT3XxfmIwqYuOveV4dH7X+eEGPm5i+Zmy/\niq/gyu55/7kd23xKG/41vNmobeM6afHhcswqtM569qQeXmuaLIKIGt9pAoGAcQnw\nrC0PMKZsilu5BPcL+zz1VGlqRYMS+ac/DPGx7gIhHL+SlIaQUeULy/a3MZX8R09W\nLYvwemb+DrujymQ8USxr+fOuRGU9IcsPrxQ5MBvScLs23gRwTRS8Cti0KuCrISvn\ncshFJIm6l8ivZ6psTFwrKUaM0KAj5pdJcGaQAPMCgYBTWjwq6EeHCny/5LsedP5u\ntI4p8Kcb1nUzZkGePx3NMzSypGHkqdnT7YXtgzind1U79y5Kt4RH/Pe9G1JKS/Ff\n7V7wZwhKP3qMIbft9PJFgz7JQ2hs2gssP1df2/VG8R47HkNaM10+kaf3/afD0A5S\nOWo5nE1tcI6HwoixVsKfrg==\n-----END PRIVATE KEY-----\n',
        clientEmail:
          'firebase-adminsdk-ljcvu@ideinnit2.iam.gserviceaccount.com',
      }),
      databaseURL:
        'https://ideinnit2-default-rtdb.asia-southeast1.firebasedatabase.app',
    });
  } else {
    initializeApp({
      projectId: 'ideinnit2',
      databaseURL: 'http://127.0.0.1:9000?ns=ideinnit2-default-rtdb',
    });
  }
}

const firebaseApp = getApp();

export default firebaseApp;
