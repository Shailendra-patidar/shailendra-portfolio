import { Metadata } from "next";
import { Sparkles, FileText, Send } from "lucide-react";
import ResumeViewer from "@/components/ResumeViewer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Resume & Contact | Shailendra Patidar",
  description:
    "Review the formal curriculum vitae of Shailendra Patidar or send a direct technical dispatch regarding AI/ML and Python engineering roles.",
  alternates: {
    canonical: "/resume-contact",
  },
};

export default function ResumeContactPage() {
  return (
    <div className="pt-32 pb-20 bg-background text-ivory">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Credentials &amp; Outreach</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory mb-6 max-w-3xl leading-[1.1]">
          Curriculum Vitae &amp; Direct Channel.
        </h1>
        <p className="text-ivory-muted text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
          Review complete verified technical credentials or initiate a conversation regarding software engineering and AI/ML opportunities.
        </p>
      </section>

      {/* Part 1: Interactive Resume Viewer */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="flex items-center gap-2.5 mb-6 text-champagne-300">
          <FileText className="w-4 h-4 text-champagne-400" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
            Interactive Document Preview
          </h2>
        </div>
        <ResumeViewer />
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Part 2: Contact Form & Channels */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2.5 mb-8 text-champagne-300">
          <Send className="w-4 h-4 text-champagne-400" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
            Get In Touch
          </h2>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
