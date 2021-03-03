import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/context_firebase';

export default function useContent(target) {
  const [content, set_content] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  https: useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const all_content = snapshot.docs.map((content_obj) => ({
          ...content_obj.data(),
          docId: content_obj.id,
        }));
        set_content(all_content);
      })
      .catch((error) => {
        console.log('function useContent(target)', error.message);
      });
  }, []);
  return { [target]: content };
}
