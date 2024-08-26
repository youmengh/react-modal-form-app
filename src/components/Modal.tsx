import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};
