import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function RegisterModal({ onClose, onOrClick, activeModal, handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState(false);

  //change validation later on dup emails
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegisterModalSubmit = (e) => {
    e.preventDefault();
    // Change validation logic as needed
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    handleRegister({ email, password, username });
    onClose();
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      orText="Sign in"
      onClose={onClose}
      onOrClick={onOrClick}
      activeModal={activeModal}
      handleSubmit={handleRegisterModalSubmit}
      secondErrorMsg={
        emailError && (
          <span className="modal__error-msg modal__error-msg_second">
            This email is not available
          </span>
        )
      }
    >
      <label htmlFor="registerEmail" className="modal__label">
        Email
        <input
          id="registerEmail"
          type="text"
          className="modal__input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="registerPassword" className="modal__label">
        Password
        <input
          id="registerPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label htmlFor="registerUsername" className="modal__label">
        Username
        <input
          id="registerUsername"
          type="text"
          className="modal__input"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
    </ModalWithForm>
  );
}
