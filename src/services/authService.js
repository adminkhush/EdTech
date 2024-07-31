import { auth } from '../firebaseConfig'; // Adjust the path as necessary

export const signUp = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // User is signed up
    console.log(userCredential.user);
    return userCredential.user; // Optionally return the user object
  } catch (error) {
    // Handle errors
    console.error(error.message);
    throw error; // Optionally rethrow the error for further handling
  }
};
