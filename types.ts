
export interface Question {
  id: number;
  type: 'mcq' | 'essay';
  question: string;
  options?: string[]; // Optional for essay
  correctAnswerIndex?: number; // Optional for essay
  answer?: string; // For essay model answer
  category: string;
  explanation?: string;
  note?: string;
}

export type AppMode = 'home' | 'study' | 'quiz';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | 'correct' | 'incorrect' | null)[]; 
  isFinished: boolean;
  timeElapsed: number; // Added timer state in seconds
}
