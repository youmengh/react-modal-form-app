import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { QuestionForm } from "./components/QuestionForm";
import { FormProvider } from "./context/FormContext";
export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FormProvider>
      <div>
        <button onClick={() => setIsModalOpen(true)}>Open Quiz</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <QuestionForm />
        </Modal>
      </div>
    </FormProvider>
  );
};
