export const fetchQuestions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  // Simulate random error
  if (Math.random() > 0.8) {
    throw new Error("Failed to fetch questions");
  }

  return [
    {
      id: 1,
      question: "What's your favorite color?",
      choices: ["Red", "Green", "Blue"],
    },
    {
      id: 2,
      question: "What's your favorite animal?",
      choices: ["Dog", "Cat", "Bird"],
    },
  ];
};

export const submitAnswers = async (answers: { [key: number]: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  // Simulate random error
  if (Math.random() > 0.8) {
    throw new Error("Failed to submit answers");
  }

  console.log("Submitted answers:", answers);
  return { success: true };
};
