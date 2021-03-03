import React from 'react';
import { BrowseContainer } from '../containers/browse_container';
import { useContent } from '../hooks/h.js';
import { selection_map } from '../utils/h';

// AUTH PROBLEM
//stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
/*
  * firebase rule
  rules_version = '2';
  service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // allow read, write: if false;
      allow read: if true;
      allow write: if false;
    }
  }
}
*/
export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selection_map({ series, films });

  // console.log(slides);

  // console.log(series);
  // console.log(films);
  return <BrowseContainer slides={slides} />;
}
