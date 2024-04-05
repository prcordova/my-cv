import React from "react";
import Modal from "react-modal";
import "./modal.sass";

export function CustomModal({
  openModal,
  onClick,
  isOpen,
  onRequestClose,
  children,
  textBtn,
  headerTitle,
}) {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
        },
      }}
      className={"modal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="modal-header">
        <h2>{headerTitle}</h2>
        <button className="modal-btn" onClick={onClick}>
          {textBtn}
        </button>
      </div>

      <div className="modal-children">{children}</div>
    </Modal>
  );
}

export default CustomModal;
