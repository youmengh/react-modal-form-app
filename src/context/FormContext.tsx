import React, { createContext, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface FormContextType {
  form: UseFormReturn<any>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const form = useForm();
  return (
    <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
