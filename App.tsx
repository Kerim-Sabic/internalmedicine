
import React, { useState, useEffect, useRef } from 'react';
import { questions } from './data';
import { AppMode, QuizState } from './types';
import QuizCard from './components/QuizCard';
import StudyMode from './components/StudyMode';
import { BookOpen, PlayCircle, RefreshCw, Trophy, ChevronRight, Activity, Timer } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('home');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isFinished: false,
    timeElapsed: 0,
  });
  
  const [questionRevealed, setQuestionRevealed] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(questions);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (mode === 'quiz' && !quizState.isFinished) {
      timerRef.current = window.setInterval(() => {
        setQuizState(prev => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, quizState.isFinished]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    // Randomize questions for the quiz
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled);
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: new Array(shuffled.length).fill(null),
      isFinished: false,
      timeElapsed: 0,
    });
    setQuestionRevealed(false);
    setMode('quiz');
  };

  const handleOptionSelect = (answer: number | 'correct' | 'incorrect') => {
    if (questionRevealed) return;

    const currentQ = activeQuestions[quizState.currentQuestionIndex];
    let isCorrect = false;

    if (currentQ.type === 'mcq' && typeof answer === 'number') {
       isCorrect = answer === currentQ.correctAnswerIndex;
    } else if (currentQ.type === 'essay' && answer === 'correct') {
       isCorrect = true;
    }

    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answer;

    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: newAnswers
    }));
    
    setQuestionRevealed(true);
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < activeQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setQuestionRevealed(false);
    } else {
      setQuizState(prev => ({ ...prev, isFinished: true }));
    }
  };

  const calculatePercentage = () => {
    return Math.round((quizState.score / activeQuestions.length) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setMode('home')}
          >
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Activity size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">MedQuiz<span className="text-blue-600">IM</span></h1>
          </div>

          <nav className="flex gap-2">
            <button 
              onClick={() => setMode('home')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${mode === 'home' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button 
               onClick={() => setMode('study')}
               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${mode === 'study' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Study
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {mode === 'home' && (
          <div className="max-w-2xl mx-auto text-center py-12 animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Trophy size={48} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Internal Medicine Midterm
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Comprehensive exam prep covering Cardiology and Pulmonology. Includes <span className="font-bold text-slate-900">{questions.length} questions</span> verified against medical guidelines, covering all MCQs and Case Studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={startQuiz}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <PlayCircle size={24} />
                Start Quiz
              </button>
              <button 
                onClick={() => setMode('study')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all"
              >
                <BookOpen size={24} />
                Study Mode
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <span className="block text-2xl font-bold text-slate-800">{questions.length}</span>
                <span className="text-sm text-slate-500">Total Qs</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <span className="block text-2xl font-bold text-slate-800">100%</span>
                <span className="text-sm text-slate-500">Verified</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <span className="block text-2xl font-bold text-slate-800">Essay</span>
                <span className="text-sm text-slate-500">Included</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <span className="block text-2xl font-bold text-slate-800">Cases</span>
                <span className="text-sm text-slate-500">Included</span>
              </div>
            </div>
          </div>
        )}

        {mode === 'study' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center justify-between">
               <p className="text-blue-800 font-medium">Viewing all {questions.length} questions with detailed explanations.</p>
               <button onClick={startQuiz} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                 Test Yourself
               </button>
            </div>
            <StudyMode questions={questions} />
          </div>
        )}

        {mode === 'quiz' && !quizState.isFinished && (
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-full mb-6 sticky top-20 bg-slate-50 pt-4 pb-2 z-0">
              <div className="flex justify-between items-end mb-2">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-700">Question {quizState.currentQuestionIndex + 1} <span className="text-slate-400 text-sm font-normal">of {activeQuestions.length}</span></span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                    <Timer size={12} />
                    <span className="font-mono">{formatTime(quizState.timeElapsed)}</span>
                  </div>
                </div>
                <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">Score: {quizState.score}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((quizState.currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <QuizCard 
              question={activeQuestions[quizState.currentQuestionIndex]}
              selectedOption={quizState.answers[quizState.currentQuestionIndex]}
              onSelectOption={handleOptionSelect}
              showResult={questionRevealed}
            />

            <div className="fixed bottom-6 left-0 right-0 px-4 flex justify-center pointer-events-none z-20">
              <div className="pointer-events-auto">
                {questionRevealed && (
                  <button 
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all animate-bounce-in"
                  >
                    {quizState.currentQuestionIndex < activeQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {mode === 'quiz' && quizState.isFinished && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center animate-fade-in mt-8">
            <div className={`p-10 ${calculatePercentage() >= 70 ? 'bg-gradient-to-b from-green-50 to-white' : 'bg-gradient-to-b from-red-50 to-white'}`}>
              <div className={`mx-auto w-24 h-24 flex items-center justify-center rounded-full mb-6 ${calculatePercentage() >= 70 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <Trophy size={40} />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Completed!</h2>
              <p className="text-slate-500 mb-2">You answered {quizState.score} out of {activeQuestions.length} correctly.</p>
              <p className="text-slate-400 text-sm mb-8 flex items-center justify-center gap-1">
                <Timer size={14} /> Time taken: {formatTime(quizState.timeElapsed)}
              </p>

              <div className="text-6xl font-black text-slate-800 mb-2">
                {calculatePercentage()}%
              </div>
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-8 ${calculatePercentage() >= 70 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {calculatePercentage() >= 70 ? 'Excellent Work' : 'Keep Studying'}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={startQuiz}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                >
                  <RefreshCw size={20} />
                  Retry Quiz
                </button>
                <button 
                  onClick={() => setMode('study')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold transition-colors"
                >
                  <BookOpen size={20} />
                  Review Answers
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
