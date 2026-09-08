"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ur" | "ar";

export const languages: { code: Lang; label: string; native: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "ur", label: "Urdu", native: "اردو", dir: "rtl" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" },
];

// English → Arabic dictionary. Any string not listed falls back to English.
const ar: Record<string, string> = {
  "Concept demo — designed & developed by": "عرض تجريبي — تصميم وتطوير",
  "Home": "الرئيسية",
  "About": "عن الأكاديمية",
  "Programs": "البرامج",
  "Admissions": "القبول",
  "Campus": "الحرم",
  "Events": "الفعاليات",
  "Journal": "المدوّنة",
  "Portals": "البوابات",
  "Solutions": "الحلول",
  "Apply": "قدّم",
  "Search": "بحث",
  "Admissions are open": "القبول مفتوح الآن",
  "Where Learning Becomes Possibility": "حيث يتحوّل التعلّم إلى إمكانات",
  "Shaping Bright Minds for a Better Future": "لبناء أذهان مشرقة نحو مستقبل أفضل",
  "Book a Campus Visit": "احجز زيارة للحرم",
  "Complete Education Management Platform for Pakistan": "باكستان کے لیے مکمل تعلیمی منیجمنٹ پلیٹ فارم",
  "Request a Free Demo": "مفت ڈیمو حاصل کریں",
  "Explore Platform": "پلیٹ فارم دریافت کریں",
  "Apply for Admission": "قدّم للقبول",
  "Explore Programs": "استكشف البرامج",
  "Parent Portal": "بوابة الأهل",
  "Student Portal": "بوابة الطالب",
  "Students across 3 campuses": "طالبة عبر 3 حرم",
  "Dedicated educators": "معلمون مكرّسون",
  "Programme families": "عائلات البرامج",
  "Average attendance": "متوسط الحضور",
  "Our learning philosophy": "فلسفتنا في التعلّم",
  "Education that treats every child as an individual": "تعليمٌ يعامل كل طفل كفردٍ فريد",
  "Academic programs": "البرامج الأكاديمية",
  "A journey from first steps to future leaders": "رحلةٌ من الخطوات الأولى إلى قيادات المستقبل",
  "All programs": "جميع البرامج",
  "One connected platform": "منصةٌ واحدة متكاملة",
  "Everything a modern school runs on": "كل ما تعمل عليه المدرسة العصرية",
  "Campus experience": "تجربة الحرم",
  "Spaces designed for curious minds": "مساحاتٌ صُمّمت للأذهان الفضولية",
  "Explore campus": "استكشف الحرم",
  "Our faculty": "فريقنا التعليمي",
  "Taught by people who love their subject": "يقودها معلمون يعشقون موادّهم",
  "Life at Meridian": "الحياة في ميريديان",
  "Frequently asked questions": "الأسئلة الشائعة",
  "Answers, before you even ask": "إجاباتٌ قبل أن تسأل",
  "Talk to our admissions team": "تحدّث إلى فريق القبول",
  "Contact us": "اتصل بنا",
  "Start an application": "ابدأ طلبك",
  "Technology & Digital Experience": "التقنية والتجربة الرقمية",
  "Inquiry-led learning": "تعلّم قائم على الاستكشاف",
  "Care, always": "رعاية دائمة",
  "A connected ecosystem": "نظامٌ متكامل",
  "Confidence for life": "ثقةٌ مدى الحياة",
  // Portal nav
  "Overview": "نظرة عامة",
  "Timetable": "الجدول",
  "Assignments": "المهام",
  "Exams & Results": "الاختبارات والنتائج",
  "Attendance": "الحضور",
  "Courses": "الدورات",
  "Resources": "الموارد",
  "My Children": "أبنائي",
  "Homework": "الواجبات",
  "Fees & Invoices": "الرسوم والفواتير",
  "Messages": "الرسائل",
  "My Classes": "فصولي",
  "Marks Entry": "إدخال العلامات",
  "Lesson Plans": "خطط الدروس",
  "Students": "الطلبة",
  "Teachers": "المعلمون",
  "Fees": "الرسوم",
  "Academics": "الشؤون الأكاديمية",
  "Communication": "التواصل",
  "My Courses": "دوراتي",
  "Quizzes": "اختبارات قصيرة",
  "Progress": "التقدّم",
  "Continue Learning": "مواصلة التعلّم",
  // Student
  "Welcome back": "مرحبًا بعودتك",
  "Classes today": "فصول اليوم",
  "Assignments due": "مهام مستحقة",
  "Overall grade": "المتوسط العام",
  "Today's classes": "فصول اليوم",
  "Academic progress": "التقدّم الأكاديمي",
  "Weekly timetable": "الجدول الأسبوعي",
  "Assignments & homework": "المهام والواجبات",
  "Upcoming exams": "الاختبارات القادمة",
  "Recent results": "أحدث النتائج",
  "My courses": "دوراتي",
  "Study resources": "موارد الدراسة",
  "Announcements": "الإعلانات",
  "Continue learning": "مواصلة التعلّم",
  "All tasks": "كل المهام",
  "Download all": "تحميل الكل",
  "View all": "عرض الكل",
  "Last 12 records": "آخر 12 سجلاً",
  // Parent
  "Today with": "اليوم مع",
  "Fees outstanding": "رسوم مستحقة",
  "Fee summary": "ملخص الرسوم",
  "Pay now": "ادفع الآن",
  "View receipt": "عرض الإيصال",
  "Invoices & receipts": "الفواتير والإيصالات",
  "Child profile": "ملف الطفل",
  "Today & timetable": "اليوم والجدول",
  "Attendance history": "سجلّ الحضور",
  "School calendar & events": "التقويم والفعاليات",
  "Open calendar": "فتح التقويم",
  "Teacher communication": "تواصل المعلمين",
  "Compose": "إنشاء رسالة",
  "Transport status (concept)": "حالة المواصلات",
  "Announcements & alerts": "الإعلانات والتنبيهات",
  "Paid to date": "المسدد حتى الآن",
  "Outstanding": "المستحق",
  // Teacher
  "Teacher workspace": "مساحة المعلم",
  "My classes": "فصولي",
  "Attendance to mark": "حضور بانتظار التسجيل",
  "Pending marks": "علامات معلقة",
  "Class average": "متوسط الفصل",
  "Today's timetable": "جدول اليوم",
  "Mark attendance · Grade 9-A": "تسجيل الحضور · الصف 9-أ",
  "Save": "حفظ",
  "Saved ✓": "تم الحفظ ✓",
  "Marks entry · Grade 9-A": "إدخال العلامات · الصف 9-أ",
  "Class performance": "أداء الفصل",
  "Exams to invigilate": "الاختبارات المشرف عليها",
  "Lesson plans": "خطط الدروس",
  "Learning resources": "موارد التعلّم",
  "New lesson plan": "خطة درس جديدة",
  "Upload": "رفع",
  "Create": "إنشاء",
  "Publish results": "نشر النتائج",
  // Admin
  "School management": "إدارة المدرسة",
  "Administration overview": "نظرة إدارية شاملة",
  "New announcement": "إعلان جديد",
  "Export report": "تصدير تقرير",
  "Total students": "إجمالي الطلبة",
  "Classes": "الفصول",
  "Pending admissions": "قبول قيد المراجعة",
  "Fees collected": "الرسوم المحصّلة",
  "Notifications": "التنبيهات",
  "Fee collection trend": "اتجاه تحصيل الرسوم",
  "Attendance today": "حضور اليوم",
  "Admissions pipeline": "مسار القبول",
  "Student management": "إدارة الطلبة",
  "Teacher management": "إدارة المعلمون",
  "Fees & invoices": "الرسوم والفواتير",
  "Attendance analytics": "تحليلات الحضور",
  "Academic structure": "الهيكل الأكاديمي",
  "Exams schedule": "جدول الاختبارات",
  "Communication centre": "مركز التواصل",
  "Content & website": "المحتوى والموقع",
  "Settings & integrations": "الإعدادات والتكاملات",
  "Broadcast": "بثّ",
  "Sent ✓": "تم الإرسال ✓",
  // LMS
  "Learning Hub": "مركز التعلّم",
  "Your courses & learning": "دوراتك وتعلّمك",
  "Lessons done": "دروس مكتملة",
  "Time this week": "وقت هذا الأسبوع",
  "Quiz score": "درجة الاختبار",
  "Lessons": "الدروس",
  "Practice quiz": "اختبار تدريبي",
  "Download resources": "تحميل الموارد",
  "Resources & materials": "الموارد والمواد",
  "Overall learning progress": "التقدّم العام في التعلّم",
  // Assistant
  "LearnMate AI": "مساعد LearnMate",
  "Your personal study assistant · supports, never replaces, your teachers": "مساعدك الشخصي في الدراسة · يدعم معلميكَ ولا يغني عنهم أبدًا",
  "Hello Ayaan! I'm LearnMate, your study assistant. I can help you find courses, understand programmes, locate homework and resources, or explain school processes. What would you like to know?":
    "مرحبًا أيّان! أنا LearnMate، مساعدك في الدراسة. يمكنني مساعدتك في إيجاد الدورات، فهم البرامج، الوصول إلى الواجبات والموارد، أو شرح إجراءات المدرسة. ماذا تريد أن تعرف؟",
  // Common
  "Mark all as read": "تحديد الكل كمقروء",
  "Switch": "تبديل",
  "Academy website": "موقع الأكاديمية",
  "Open Learning Hub": "فتح مركز التعلّم",
};

// English → Urdu dictionary. Any string not listed falls back to English.
const ur: Record<string, string> = {
  "Concept demo — designed & developed by": "کانسپٹ ڈیمو — ڈیزائن و ڈیولپمنٹ",
  "Home": "ہوم",
  "About": "تعارف",
  "Programs": "پروگرامز",
  "Academics": "تعلیمی شعبہ",
  "Admissions": "داخلے",
  "Campus": "کیمپس",
  "Events": "تقریبات",
  "News": "خبریں",
  "Journal": "بلاگ",
  "Portals": "پورٹلز",
  "Solutions": "حل",
  "Apply": "درخواست دیں",
  "Search": "تلاش",
  "Admissions are open": "داخلے جاری ہیں",
  "Complete Education Management Platform for Pakistan": "پاکستان کے لیے مکمل ایجوکیشن مینجمنٹ پلیٹ فارم",
  "Request a Free Demo": "مفت ڈیمو حاصل کریں",
  "Explore Platform": "پلیٹ فارم دیکھیں",
  "Shaping Bright Minds for a Better Future": "بہتر مستقبل کے لیے روشن ذہن",
  "Where Learning Becomes Possibility": "جہاں تعلیم امکان بنتی ہے",
  "Apply for Admission": "داخلے کی درخواست",
  "Explore Programs": "پروگرامز دیکھیں",
  "Book a Campus Visit": "کیمپس وزٹ بک کریں",
  "Parent Portal": "والدین پورٹل",
  "Student Portal": "طالب علم پورٹل",
  "Teacher Portal": "استاد پورٹل",
  "Admin Dashboard": "ایڈمن ڈیش بورڈ",
  "Contact us": "رابطہ کریں",
  "Start an application": "درخواست شروع کریں",
  // Portal nav
  "Overview": "خلاصہ",
  "Timetable": "ٹائم ٹیبل",
  "Assignments": "اسائنمنٹس",
  "Exams & Results": "امتحانات و نتائج",
  "Attendance": "حاضری",
  "Courses": "کورسز",
  "My Courses": "میرے کورسز",
  "Resources": "وسائل",
  "My Children": "میرے بچے",
  "Homework": "ہوم ورک",
  "Fees & Invoices": "فیس و انوائس",
  "Messages": "پیغامات",
  "My Classes": "میری کلاسز",
  "Marks Entry": "نمبر درج کریں",
  "Lesson Plans": "سبق کے منصوبے",
  "Students": "طلبہ",
  "Teachers": "اساتذہ",
  "Fees": "فیس",
  "Communication": "رابطہ",
  "Progress": "پیش رفت",
  "Notifications": "اطلاعات",
  "Announcements": "اعلانات",
  // Student / parent
  "Welcome back": "خوش آمدید",
  "Classes today": "آج کی کلاسز",
  "Assignments due": "واجب الادا اسائنمنٹس",
  "Overall grade": "مجموعی گریڈ",
  "Today's classes": "آج کی کلاسز",
  "Academic progress": "تعلیمی پیش رفت",
  "Weekly timetable": "ہفتہ وار ٹائم ٹیبل",
  "Assignments & homework": "اسائنمنٹس و ہوم ورک",
  "Upcoming exams": "آنے والے امتحانات",
  "Recent results": "حالیہ نتائج",
  "Study resources": "مطالعے کے وسائل",
  "Continue learning": "سیکھنا جاری رکھیں",
  "Today with": "آج کا دن",
  "Fees outstanding": "واجب الادا فیس",
  "Fee summary": "فیس کا خلاصہ",
  "Pay now": "ابھی ادائیگی کریں",
  "View receipt": "رسید دیکھیں",
  "Invoices & receipts": "انوائس و رسیدیں",
  "Child profile": "بچے کی پروفائل",
  "Attendance history": "حاضری کی تفصیل",
  "Teacher communication": "اساتذہ سے رابطہ",
  "Paid to date": "اب تک ادا شدہ",
  "Outstanding": "واجب الادا",
  // Teacher / admin
  "Teacher workspace": "استاد کا ورک اسپیس",
  "Class average": "کلاس اوسط",
  "Today's timetable": "آج کا ٹائم ٹیبل",
  "Save": "محفوظ کریں",
  "Saved ✓": "محفوظ ہو گیا ✓",
  "Create": "بنائیں",
  "Upload": "اپ لوڈ",
  "School management": "اسکول مینجمنٹ",
  "Administration overview": "انتظامی خلاصہ",
  "Total students": "کل طلبہ",
  "Classes": "کلاسز",
  "Pending admissions": "زیرِ التوا داخلے",
  "Fees collected": "وصول شدہ فیس",
  "Mark all as read": "سب پڑھا ہوا نشان زد کریں",
  "Switch": "تبدیل کریں",
  "Academy website": "اکیڈمی ویب سائٹ",
  "Learning Hub": "لرننگ حب",
  "Open Learning Hub": "لرننگ حب کھولیں",
  "View all": "سب دیکھیں",
  "Download all": "سب ڈاؤن لوڈ کریں",
  "All tasks": "تمام کام",
};

const dicts: Record<Lang, Record<string, string>> = { en: {}, ur, ar };

const I18nCtx = createContext<{
  lang: Lang;
  t: (s: string) => string;
  setLang: (l: Lang) => void;
}>({ lang: "en", t: (s) => s, setLang: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("meridian.lang");
      if (saved === "ar" || saved === "en" || saved === "ur") setLangState(saved);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    const meta = languages.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    try {
      localStorage.setItem("meridian.lang", lang);
    } catch {
      /* noop */
    }
  }, [lang]);

  const t = (s: string) => dicts[lang][s] ?? s;

  return <I18nCtx.Provider value={{ lang, t, setLang: setLangState }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
