import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizData } from "@/data/quizData";
import { BookOpen, CheckCircle2, Zap } from "lucide-react";

export default function Home() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Mosaic 2</h1>
                <p className="text-xs text-gray-500">Grammar & Quizzes</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">{quizData.length} وحدات</p>
              <p className="text-xs text-gray-500">تعلم قواعد اللغة الإنجليزية</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تعلم قواعد اللغة الإنجليزية بطريقة تفاعلية
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            اختبر معلوماتك من خلال اختبارات تفاعلية وشروحات مفصلة لكل قاعدة من قواعد Mosaic 2
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>اختبارات فورية</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>تقييم فوري</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span>شروحات مفصلة</span>
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quizData.map((unit) => (
            <Card
              key={unit.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {unit.arabicTitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {unit.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {unit.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                  {unit.topics.length > 2 && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                      +{unit.topics.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link href={`/unit/${unit.id}`} asChild>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      اقرأ الشرح
                    </Button>
                  </Link>
                  <Link href={`/quiz/${unit.id}`} asChild>
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      اختبر نفسك
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    {unit.questions.length} أسئلة متاحة
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-0 bg-white text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {quizData.length}
            </div>
            <p className="text-gray-600">وحدات تعليمية</p>
          </Card>
          <Card className="p-6 border-0 bg-white text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {quizData.reduce((sum, unit) => sum + unit.questions.length, 0)}
            </div>
            <p className="text-gray-600">أسئلة اختبار</p>
          </Card>
          <Card className="p-6 border-0 bg-white text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
            <p className="text-gray-600">تقييم فوري</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Mosaic 2 Grammar & Quizzes. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            تطبيق تفاعلي لتعلم قواعد اللغة الإنجليزية
          </p>
        </div>
      </footer>
    </div>
  );
}
