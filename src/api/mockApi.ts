export const fetchQuestions = async () => {
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
  console.log("Submitted answers:", answers);
  return { success: true };
};
