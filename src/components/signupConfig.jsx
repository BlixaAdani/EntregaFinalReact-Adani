import { auth, firestore } from './firebaseConfig';

const signUp = async (email, password, role) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  await firestore.collection('users').doc(user.uid).set({
    email,
    role
  });
};