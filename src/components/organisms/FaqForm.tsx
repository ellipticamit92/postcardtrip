"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Input } from "../ui/input";
import { HelpCircle, Mail, MessageCircle, Phone, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { INFO_EMAIL, MOBILE_NUMBER } from "@/lib/constant";

const FaqForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <>
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {filteredCategories.length > 0 ? (
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl text-ocean">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left hover:text-ocean">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No results found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="mt-4"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="mt-12 bg-gradient-card border-ocean/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-ocean" />
              Still have questions?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Can not find what you are looking for? Our friendly support team
              is here to help!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                <Phone className="w-5 h-5 text-ocean flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">
                    {MOBILE_NUMBER}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                <Mail className="w-5 h-5 text-ocean flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">{INFO_EMAIL}</p>
                  <p className="text-xs text-muted-foreground">
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button asChild variant="primary" animation="primarySolid">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                variant="primaryOutline"
                animation="primaryOutline"
              >
                <Link href="/">Book a Trip</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FaqForm;
