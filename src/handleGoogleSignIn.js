import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';

export const handleGoogleSignIn = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Usuario logueado:', result.user);
      navigate('/dashboard'); // RUTA DEL DASBOARD AL INICIAR SESION
    }).catch((error) => {
      console.error('Error de login:', error);
      alert(`Error al iniciar sesión: ${error.message}`);
    });
};