import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

export default function LoginModal({ onClose, onOrClick, activeModal, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (activeModal) {
      setEmail("");
      setPassword("");
      setEmailError(false);
    }
  }, [activeModal]);

  const onLoginModalSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    handleLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      orText="Sign up"
      onClose={onClose}
      onOrClick={onOrClick}
      activeModal={activeModal}
      handleSubmit={onLoginModalSubmit}
    >
      <label htmlFor="loginEmail" className="modal__label">
        Email
        <input
          id="loginEmail"
          type="text"
          className="modal__input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="modal__error-msg">Invalid email address</span>}
      </label>
      <label htmlFor="loginPassword" className="modal__label">
        Password
        <input
          id="loginPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
    </ModalWithForm>
  );
}
