import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login con:', email, password);
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Usuario logueado:', result.user);
        navigate('/dashboard'); // Redirige al dashboard
      }).catch((error) => {
        console.error('Error de login:', error);
        alert(`Error al iniciar sesión: ${error.message}`);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Bienvenido a FinanceSync©</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="form-options">
            <label>
              <input type="checkbox" /> Recordarme
            </label>
            <button type="button" className="link-button">Olvidaste tu Contraseña?</button>
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>No tienes cuenta? <button type="button" className="link-button">Regístrate</button></p>
        <div className="divider">o continua con</div>
        <button onClick={handleGoogleSignIn} className="google-signin">
          <i className="fab fa-google"></i>
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;