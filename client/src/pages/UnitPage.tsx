import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizData } from "@/data/quizData";
import { ArrowLeft, BookOpen, Play } from "lucide-react";
import { Streamdown } from "streamdown";

export default function UnitPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = quizData.find((u) => u.id === unitId);

  if (!unit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">الوحدة غير موجودة</h1>
          <Link href="/" asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">العودة للرئيسية</Button>
          </Link>
        </div>
      </div>
    );
  }

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
              <h1 className="text-xl font-bold text-gray-900">{unit.title}</h1>
              <p className="text-sm text-gray-600">{unit.arabicTitle}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 bg-white shadow-sm">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {unit.title}
                </h2>
                <p className="text-gray-600">{unit.description}</p>
              </div>

              {/* Markdown Content */}
              <div className="prose prose-sm max-w-none text-gray-700">
                <Streamdown>{unit.content}</Streamdown>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Topics */}
            <Card className="p-6 border-0 bg-white shadow-sm mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                الموضوعات
              </h3>
              <ul className="space-y-2">
                {unit.topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-sm text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Quiz Button */}
            <Card className="p-6 border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <h3 className="text-lg font-bold mb-2">اختبر معلوماتك</h3>
              <p className="text-sm text-blue-100 mb-4">
                {unit.questions.length} أسئلة تفاعلية
              </p>
              <Link href={`/quiz/${unit.id}`} asChild>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold gap-2">
                  <Play className="w-4 h-4" />
                  ابدأ الاختبار
                </Button>
              </Link>
            </Card>

            {/* Info Card */}
            <Card className="p-6 border-0 bg-gray-50 shadow-sm mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">نصائح</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ اقرأ الشرح بعناية</li>
                <li>✓ ركز على الأمثلة</li>
                <li>✓ اختبر معلوماتك</li>
                <li>✓ راجع الإجابات</li>
              </ul>
            </Card>
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
