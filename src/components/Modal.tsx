import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isSubmitting?: boolean; // Optional to prevent closing during submission
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  isSubmitting = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} disabled={isSubmitting}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
