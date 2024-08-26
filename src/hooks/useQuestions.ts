import { useQuery } from "react-query";
import { fetchQuestions } from "../api/mockApi";

export const useQuestions = () => {
  return useQuery("questions", fetchQuestions, {
    onError: (error) => console.error("Error fetching questions:", error),
  });
};
