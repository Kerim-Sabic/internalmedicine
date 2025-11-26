
import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, Circle, AlertCircle, Info, Eye, Check, X } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedOption: number | 'correct' | 'incorrect' | null;
  onSelectOption: (answer: number | 'correct' | 'incorrect') => void;
  showResult: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption,
  showResult 
}) => {
  const [essayRevealed, setEssayRevealed] = useState(false);

  // Reset local state when question changes
  useEffect(() => {
    setEssayRevealed(false);
  }, [question]);

  const isMcqCorrect = question.type === 'mcq' && selectedOption === question.correctAnswerIndex;

  const handleEssayGrade = (grade: 'correct' | 'incorrect') => {
    onSelectOption(grade);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl w-full mx-auto border border-slate-100">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide ${question.category === 'Cardiology' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
            {question.category}
          </span>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {question.type === 'essay' ? 'Short Answer' : 'Multiple Choice'}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
          {question.question}
        </h3>
      </div>

      {question.type === 'mcq' && question.options && (
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass = "w-full p-4 rounded-lg border-2 text-left transition-all duration-200 flex items-center gap-3 ";
            
            if (showResult) {
              if (index === question.correctAnswerIndex) {
                optionClass += "border-green-500 bg-green-50 text-green-800";
              } else if (index === selectedOption && index !== question.correctAnswerIndex) {
                optionClass += "border-red-500 bg-red-50 text-red-800";
              } else {
                optionClass += "border-slate-100 bg-slate-50 opacity-60";
              }
            } else {
              if (selectedOption === index) {
                optionClass += "border-blue-500 bg-blue-50 text-blue-800 shadow-md transform scale-[1.01]";
              } else {
                optionClass += "border-slate-200 hover:border-blue-300 hover:bg-slate-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && onSelectOption(index)}
                disabled={showResult}
                className={optionClass}
              >
                <div className="flex-shrink-0">
                   {showResult ? (
                      index === question.correctAnswerIndex ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : index === selectedOption ? (
                        <XCircle className="w-6 h-6 text-red-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300" />
                      )
                   ) : (
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === index ? 'border-blue-600' : 'border-slate-300'}`}>
                        {selectedOption === index && <div className="w-3 h-3 rounded-full bg-blue-600" />}
                      </div>
                   )}
                </div>
                <span className="font-medium">{option}</span>
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'essay' && (
        <div className="space-y-6">
          {!essayRevealed && !showResult ? (
            <button 
              onClick={() => setEssayRevealed(true)}
              className="w-full py-12 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all group"
            >
              <Eye className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Reveal Model Answer</span>
            </button>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-6 shadow-sm">
                <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-3">Verified Model Answer</h4>
                <p className="text-slate-800 text-lg leading-relaxed whitespace-pre-line font-medium">{question.answer}</p>
              </div>

              {!showResult && (
                <div className="space-y-4">
                  <p className="text-center text-sm text-slate-500 font-medium">Did your answer match?</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleEssayGrade('incorrect')}
                      className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-red-100 bg-white text-red-600 hover:bg-red-50 hover:border-red-200 transition-all font-bold"
                    >
                      <XCircle className="w-5 h-5" />
                      No / Partially
                    </button>
                    <button 
                      onClick={() => handleEssayGrade('correct')}
                      className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-green-100 bg-white text-green-600 hover:bg-green-50 hover:border-green-200 transition-all font-bold"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Yes, Correct
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {showResult && (
        <div className="mt-6 space-y-4 animate-fade-in">
          {/* MCQ Incorrect Feedback */}
          {question.type === 'mcq' && !isMcqCorrect && selectedOption !== null && typeof selectedOption === 'number' && question.options && (
             <div className="p-5 bg-red-50 rounded-xl border border-red-200 shadow-sm">
               <div className="flex items-center gap-3 mb-3 pb-3 border-b border-red-100">
                 <div className="p-1.5 bg-red-100 rounded-full">
                    <X className="w-5 h-5 text-red-600" />
                 </div>
                 <h4 className="font-bold text-red-800 text-lg">Incorrect Answer</h4>
               </div>
               <div className="space-y-2">
                 <p className="text-red-700">
                   <span className="font-semibold opacity-75">You selected:</span> {question.options[selectedOption]}
                 </p>
                 <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-green-800 font-bold text-lg">
                      <span className="text-xs font-bold uppercase tracking-wide opacity-70 block text-green-700 mb-1">Correct Answer</span> 
                      {question.options[question.correctAnswerIndex!]}
                    </p>
                 </div>
               </div>
             </div>
          )}

          {/* Essay Feedback Status */}
          {question.type === 'essay' && (
             <div className={`p-4 rounded-lg flex items-center gap-3 border ${selectedOption === 'correct' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                {selectedOption === 'correct' ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                <span className="font-bold">{selectedOption === 'correct' ? 'You marked this as Correct' : 'You marked this as Incorrect'}</span>
             </div>
          )}
          
          {/* Explanation for both types */}
          {(question.explanation) && (
            <div className={`p-5 rounded-xl border-l-4 shadow-sm ${isMcqCorrect || selectedOption === 'correct' ? 'bg-green-50 border-green-500' : 'bg-blue-50 border-blue-500'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Info className={`w-5 h-5 ${isMcqCorrect || selectedOption === 'correct' ? 'text-green-700' : 'text-blue-700'}`} />
                <p className={`text-sm font-bold uppercase tracking-wide ${isMcqCorrect || selectedOption === 'correct' ? 'text-green-900' : 'text-blue-900'}`}>
                  Detailed Explanation
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCard;
