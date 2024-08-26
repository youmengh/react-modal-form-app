import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import { useQuestions } from "../hooks/useQuestions";
import { submitAnswers } from "../api/mockApi";

export const QuestionForm: React.FC = () => {
  const { form } = useFormContext();
  const { register, handleSubmit } = form;
  const {
    data: questions,
    isLoading: isLoadingQuestions,
    error: fetchError,
  } = useQuestions();
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      await submitAnswers(data);
      setIsSubmitted(true);
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "Failed to submit answers"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingQuestions) return <div>Loading questions...</div>;
  if (fetchError)
    return (
      <div>
        Error loading questions:
        {fetchError instanceof Error ? fetchError.message : "Unknown error"}
      </div>
    );
  if (isSubmitted)
    return <div>Thank you! Your answers have been submitted.</div>;

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

      {submissionError && (
        <p style={{ color: "red" }}>
          Error submitting answers: {submissionError}
        </p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
