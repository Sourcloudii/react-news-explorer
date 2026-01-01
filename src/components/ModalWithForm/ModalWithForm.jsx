import "./ModalWithForm.css";
import closeBtn from "../../images/close-btn.svg";

export default function ModalWithForm({
  title,
  children,
  buttonText,
  orText,
  onClose,
  onOrClick,
  activeModal,
  handleSubmit,
  secondErrorMsg,
}) {
  return (
    <div className={`modal ${activeModal ? "modal-visible" : ""}`}>
      <div className="modal__content">
        <button className="modal__close-btn" onClick={onClose}>
          <img src={closeBtn} alt="Close button" className="modal__close-img" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__children" onSubmit={handleSubmit}>
          {children}
          <div className="modal__btn-container">
            {secondErrorMsg}
            <button className="modal__btn" type="submit">
              {buttonText}
            </button>
            <p className="modal__or-text">
              or{" "}
              <span className="modal__or-text-btn" onClick={onOrClick}>
                {orText}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
