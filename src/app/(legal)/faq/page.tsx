import BackToHome from "@/components/atoms/BackToHome";
import BackToTop from "@/components/atoms/BackToTop";
import FaqForm from "@/components/organisms/FaqForm";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        question: "How do I book a travel package?",
        answer:
          "You can book a travel package by browsing our destinations, selecting your preferred package, and clicking the 'Book Now' button. Fill out the booking form with your details, and our team will contact you within 24 hours to confirm your reservation.",
      },
      {
        question: "Can I modify my booking after confirmation?",
        answer:
          "Yes, modifications are possible subject to availability and may incur additional fees. Changes must be requested at least 7 days before departure. Contact our support team at bookings@traveladventure.com or call +1 (555) 123-4567.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. A deposit may be required to secure your booking, with the balance due before departure.",
      },
      {
        question: "Is travel insurance included in the package?",
        answer:
          "Travel insurance is not automatically included but is highly recommended. We can help you find suitable coverage for your trip. Our team will provide insurance options during the booking process.",
      },
    ],
  },
  {
    category: "Travel Documents & Requirements",
    questions: [
      {
        question: "What documents do I need for international travel?",
        answer:
          "You'll need a valid passport with at least 6 months remaining validity. Some destinations require visas, which you're responsible for obtaining. We'll provide a detailed document checklist after booking.",
      },
      {
        question: "Do you help with visa applications?",
        answer:
          "We provide guidance and information about visa requirements for your destination. While we don't process visa applications directly, we can recommend trusted visa services and provide necessary documentation.",
      },
      {
        question: "What if my passport expires soon?",
        answer:
          "Most countries require your passport to be valid for at least 6 months beyond your travel dates. We recommend renewing your passport well in advance of your trip to avoid any issues.",
      },
    ],
  },
  {
    category: "Pricing & Packages",
    questions: [
      {
        question: "Are there any hidden fees?",
        answer:
          "No, we believe in transparent pricing. All fees are clearly outlined during booking. The only additional costs might be optional activities, personal expenses, or changes to your itinerary.",
      },
      {
        question: "Do you offer group discounts?",
        answer:
          "Yes! Groups of 8 or more people qualify for special discounts. We also offer custom group packages for corporate events, family reunions, and special occasions. Contact us for a personalized quote.",
      },
      {
        question: "What's included in the package price?",
        answer:
          "Package inclusions vary by destination but typically include accommodation, transportation, guided tours, and some meals. Each package clearly lists what's included and excluded.",
      },
      {
        question: "Can I customize a package?",
        answer:
          "Absolutely! We specialize in creating custom travel experiences. Share your preferences, budget, and interests with us, and we'll design a personalized itinerary just for you.",
      },
    ],
  },
  {
    category: "During Your Trip",
    questions: [
      {
        question: "What if I have an emergency during my trip?",
        answer:
          "We provide 24/7 emergency support for all our travelers. You'll receive emergency contact numbers before departure. We also recommend travel insurance for additional protection.",
      },
      {
        question: "Can I extend my trip?",
        answer:
          "Trip extensions are possible subject to availability and additional costs. Contact our support team as early as possible to arrange extensions to your accommodation and activities.",
      },
      {
        question: "What if the weather affects my activities?",
        answer:
          "We monitor weather conditions and will suggest alternative activities if needed. Most outdoor activities have backup plans or alternative dates. Travel insurance can provide additional protection for weather-related disruptions.",
      },
      {
        question: "Do you provide local guides?",
        answer:
          "Yes, most of our packages include experienced local guides who speak English and are knowledgeable about the destination's history, culture, and attractions.",
      },
    ],
  },
  {
    category: "Cancellations & Refunds",
    questions: [
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation policies vary by package and timing. Generally, cancellations more than 30 days before departure receive full refunds. See our detailed Cancellation Policy page for complete terms.",
      },
      {
        question: "Can I get a refund if I can't travel due to illness?",
        answer:
          "Medical emergencies may qualify for exceptions to our standard policy, provided you have proper documentation. Travel insurance often covers trip cancellations due to illness.",
      },
      {
        question: "What happens if you cancel my trip?",
        answer:
          "If we need to cancel your trip due to circumstances beyond our control, you'll receive a full refund or the option to reschedule. We'll notify you as soon as possible and work to find alternative solutions.",
      },
    ],
  },
];

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
