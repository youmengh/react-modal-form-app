import React from "react";
import { useFormContext } from "../context/FormContext";
import { useQuestions } from "../hooks/useQuestions";
import { submitAnswers } from "../api/mockApi";

export const QuestionForm: React.FC = () => {
  const { form } = useFormContext();
  const { register, handleSubmit } = form;
  const { data: questions, isLoading } = useQuestions();

  const onSubmit = (data: any) => {
    submitAnswers(data); // Call submit function here
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions?.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.choices.map((choice) => (
            <label key={choice}>
              <input
                type="radio"
                value={choice}
                {...register(`question-${q.id}`, { required: true })}
              />
              {choice}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
