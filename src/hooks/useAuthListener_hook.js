import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/context_firebase';

export default function useAuthListener() {
  const [user, set_user] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((auth_user) => {
      if (auth_user) {
        localStorage.setItem('authUSer', JSON.stringify(auth_user));
        set_user(auth_user);
      } else {
        localeStorage.removeItem('authUser');
        set_user(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}
