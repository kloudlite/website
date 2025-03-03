import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';

const FirebaseContext = createContext<{ firebaseApp: FirebaseApp | null }>({
  firebaseApp: null,
});

const FirebaseProvider = ({ children }: { children?: ReactNode }) => {
  const app = initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  });

  useEffect(() => {
    getAnalytics(app);
  }, []);
  return (
    <FirebaseContext.Provider
      value={useMemo(
        () => ({
          firebaseApp: app,
        }),
        [app],
      )}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
