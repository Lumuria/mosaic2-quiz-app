import { useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizData } from "@/data/quizData";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  AlertCircle,
} from "lucide-react";

interface Answer {
  questionId: string;
  selectedIndex: number;
}

export default function QuizPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = quizData.find((u) => u.id === unitId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!unit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">الاختبار غير موجود</h1>
          <Link href="/" asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">العودة للرئيسية</Button>
          </Link>
        </div>
      </div>
    );
  }

  const questions = unit.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);
  const isAnswered = currentAnswer !== undefined;

  const handleSelectAnswer = (index: number) => {
    if (!showResults) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      const newAnswers = answers.filter((a) => a.questionId !== currentQuestion.id);
      setAnswers([
        ...newAnswers,
        { questionId: currentQuestion.id, selectedIndex: selectedAnswer },
      ]);
      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  // Calculate score
  const correctCount = answers.filter((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    return question && question.correctAnswer === answer.selectedIndex;
  }).length;

  const score = Math.round((correctCount / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link href="/" asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة
                </Button>
              </Link>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-900">نتائج الاختبار</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Results */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Score Card */}
            <Card className="p-8 border-0 bg-white shadow-sm mb-8 text-center">
              <div className="mb-6">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  ممتاز!
                </h2>
                <p className="text-gray-600">لقد أكملت الاختبار</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-6">
                <div className="text-6xl font-bold mb-2">{score}%</div>
                <p className="text-blue-100">
                  {correctCount} من {questions.length} إجابات صحيحة
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {correctCount}
                  </div>
                  <p className="text-sm text-green-700">صحيح</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {questions.length - correctCount}
                  </div>
                  <p className="text-sm text-red-700">خاطئ</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {questions.length}
                  </div>
                  <p className="text-sm text-blue-700">إجمالي</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleRestart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  إعادة الاختبار
                </Button>
                <Link href={`/unit/${unit.id}`} asChild>
                  <Button variant="outline" className="flex-1">
                    العودة للشرح
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Detailed Results */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                مراجعة الإجابات
              </h3>
              <div className="space-y-4">
                {questions.map((question, index) => {
                  const answer = answers.find((a) => a.questionId === question.id);
                  const isCorrect =
                    answer && answer.selectedIndex === question.correctAnswer;

                  return (
                    <Card
                      key={question.id}
                      className="p-6 border-0 bg-white shadow-sm"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          {isCorrect ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            السؤال {index + 1}: {question.question}
                          </h4>

                          <div className="space-y-2 mb-4">
                            {question.options.map((option, optionIndex) => {
                              const isSelected =
                                answer && answer.selectedIndex === optionIndex;
                              const isCorrectOption =
                                optionIndex === question.correctAnswer;

                              return (
                                <div
                                  key={optionIndex}
                                  className={`p-3 rounded-lg border-2 ${
                                    isCorrectOption
                                      ? "border-green-500 bg-green-50"
                                      : isSelected && !isCorrect
                                        ? "border-red-500 bg-red-50"
                                        : "border-gray-200 bg-gray-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        isCorrectOption
                                          ? "bg-green-500 text-white"
                                          : isSelected && !isCorrect
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-300 text-gray-700"
                                      }`}
                                    >
                                      {String.fromCharCode(65 + optionIndex)}
                                    </div>
                                    <span className="text-gray-700">
                                      {option}
                                    </span>
                                    {isCorrectOption && (
                                      <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                                    )}
                                    {isSelected && !isCorrect && (
                                      <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <p className="text-sm font-semibold text-blue-900 mb-1">
                              الشرح:
                            </p>
                            <p className="text-sm text-blue-800">
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2026 Mosaic 2 Grammar & Quizzes. جميع الحقوق محفوظة.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {unit.title}
                </h1>
                <p className="text-sm text-gray-600">
                  السؤال {currentQuestionIndex + 1} من {questions.length}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-0 bg-white shadow-sm">
            {/* Question */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-600">
                    {currentQuestionIndex + 1}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentQuestion.question}
                </h2>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAnswer === index
                      ? "border-blue-600 bg-blue-50"
                      : isAnswered && currentAnswer?.selectedIndex === index
                        ? currentAnswer.selectedIndex === currentQuestion.correctAnswer
                          ? "border-green-500 bg-green-50"
                          : "border-red-500 bg-red-50"
                        : isAnswered &&
                            index === currentQuestion.correctAnswer
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300 bg-gray-50"
                  }`}
                  disabled={isAnswered}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                        selectedAnswer === index
                          ? "bg-blue-600 text-white"
                          : isAnswered && currentAnswer?.selectedIndex === index
                            ? currentAnswer.selectedIndex ===
                              currentQuestion.correctAnswer
                              ? "bg-green-600 text-white"
                              : "bg-red-600 text-white"
                            : isAnswered &&
                                index === currentQuestion.correctAnswer
                              ? "bg-green-600 text-white"
                              : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-700 font-medium">{option}</span>
                    {isAnswered && index === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                    {isAnswered &&
                      currentAnswer?.selectedIndex === index &&
                      index !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                      )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {isAnswered && (
              <div
                className={`p-4 rounded-lg border-l-4 mb-8 ${
                  currentAnswer?.selectedIndex === currentQuestion.correctAnswer
                    ? "bg-green-50 border-green-500"
                    : "bg-blue-50 border-blue-500"
                }`}
              >
                <div className="flex gap-2 mb-2">
                  {currentAnswer?.selectedIndex === currentQuestion.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p
                      className={`font-semibold mb-1 ${
                        currentAnswer?.selectedIndex ===
                        currentQuestion.correctAnswer
                          ? "text-green-900"
                          : "text-blue-900"
                      }`}
                    >
                      {currentAnswer?.selectedIndex ===
                      currentQuestion.correctAnswer
                        ? "إجابة صحيحة! ✓"
                        : "الإجابة الصحيحة:"}
                    </p>
                    <p
                      className={
                        currentAnswer?.selectedIndex ===
                        currentQuestion.correctAnswer
                          ? "text-green-800"
                          : "text-blue-800"
                      }
                    >
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handlePreviousQuestion}
                variant="outline"
                disabled={currentQuestionIndex === 0}
                className="flex-1"
              >
                السؤال السابق
              </Button>

              {!isAnswered ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  تأكيد الإجابة
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  السؤال التالي
                </Button>
              )}

              {isAnswered && currentQuestionIndex === questions.length - 1 && (
                <Button
                  onClick={() => setShowResults(true)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  عرض النتائج
                </Button>
              )}
            </div>
          </Card>

          {/* Question Indicators */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-3">الأسئلة:</p>
            <div className="flex flex-wrap gap-2">
              {questions.map((q, index) => {
                const answer = answers.find((a) => a.questionId === q.id);
                const isCorrect =
                  answer && answer.selectedIndex === q.correctAnswer;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      index === currentQuestionIndex
                        ? "bg-blue-600 text-white ring-2 ring-blue-400"
                        : answer
                          ? isCorrect
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Mosaic 2 Grammar & Quizzes. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
