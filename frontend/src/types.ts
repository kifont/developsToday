export type QuestionType = "boolean" | "input" | "checkbox";

export interface Question {
  type: QuestionType;
  text: string;
  options?: string[]; 
  correct?: any; 
}

export interface Quiz {
  title: string;
  questions: Question[];
}