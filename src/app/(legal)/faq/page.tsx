import BackToHome from "@/components/atoms/BackToHome";
import BackToTop from "@/components/atoms/BackToTop";
import FaqForm from "@/components/organisms/FaqForm";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <BackToHome />
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-ocean to-adventure rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find answers to common questions about our travel services, bookings,
          and policies.
        </p>
      </div>
      <FaqForm />
      <BackToTop />
    </main>
  );
};

export default FAQ;
