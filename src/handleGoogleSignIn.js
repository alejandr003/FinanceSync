import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';

export const handleGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Usuario logueado:', result.user);
      // Aquí puedes redirigir al usuario o actualizar el estado de la aplicación
    }).catch((error) => {
      console.error('Error de login:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
      alert(`Error al iniciar sesión: ${error.message}`);
    });
};