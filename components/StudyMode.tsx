
import React from 'react';
import { Question } from '../types';
import { Check, BookOpen } from 'lucide-react';

interface StudyModeProps {
  questions: Question[];
}

const StudyMode: React.FC<StudyModeProps> = ({ questions }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <BookOpen size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Study Review</h2>
          <p className="text-slate-500">Read through questions and answers at your own pace.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {questions.map((q, qIndex) => (
          <div key={q.id} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block px-2 py-1 text-xs font-bold rounded uppercase ${q.category === 'Cardiology' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                  Q{qIndex + 1} • {q.category}
                </span>
                <span className="text-xs font-medium text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                  {q.type === 'essay' ? 'Essay' : 'MCQ'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 leading-snug">{q.question}</h3>
              
              {q.type === 'mcq' && q.options && (
                <ul className="space-y-2">
                  {q.options.map((opt, optIndex) => (
                    <li 
                      key={optIndex} 
                      className={`p-3 rounded-lg flex items-center gap-3 text-sm md:text-base ${
                        optIndex === q.correctAnswerIndex 
                          ? 'bg-green-50 text-green-900 border border-green-200' 
                          : 'bg-white text-slate-500 border border-transparent'
                      }`}
                    >
                      {optIndex === q.correctAnswerIndex ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <span className="w-5 h-5 flex-shrink-0 text-center font-mono text-slate-300">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                      )}
                      <span className={optIndex === q.correctAnswerIndex ? 'font-medium' : ''}>{opt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {q.type === 'essay' && (
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Answer</h4>
                  <p className="text-slate-800 whitespace-pre-line">{q.answer || q.explanation}</p>
                </div>
              )}
              
              {q.explanation && q.type === 'mcq' && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed"><span className="font-bold text-slate-800">Explanation:</span> {q.explanation}</p>
                </div>
              )}
               {q.explanation && q.type === 'essay' && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed"><span className="font-bold text-slate-800">Additional Notes:</span> {q.explanation}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMode;
