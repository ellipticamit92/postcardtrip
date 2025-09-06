import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Clock,
  Database,
  Eye,
  FileText,
  Globe,
  Mail,
  Shield,
  UserCheck,
  Lock,
} from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      "Personal Information: Name, email address, phone number, passport details, travel preferences",
      "Payment Information: Credit card details, billing address (processed securely through encrypted payment processors)",
      "Travel Information: Destination preferences, travel dates, accommodation requirements, dietary restrictions",
      "Technical Information: IP address, browser type, device information, cookies, and usage data",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: UserCheck,
    content: [
      "Process and manage your travel bookings and reservations",
      "Provide customer support and respond to your inquiries",
      "Send booking confirmations, travel updates, and important notifications",
      "Improve our services and develop new features",
      "Send marketing communications (with your consent)",
      "Comply with legal obligations and prevent fraud",
    ],
  },
  {
    title: "Information Sharing",
    icon: Globe,
    content: [
      "Travel Partners: Hotels, airlines, tour operators, and other travel service providers necessary for your bookings",
      "Payment Processors: Secure third-party payment services to process transactions",
      "Legal Requirements: When required by law, court order, or to protect our rights and safety",
      "Business Transfers: In case of merger, acquisition, or sale of our business",
      "We never sell your personal information to third parties for marketing purposes",
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      "SSL encryption for all data transmission",
      "Secure payment processing through PCI DSS compliant providers",
      "Regular security audits and vulnerability assessments",
      "Access controls and employee training on data protection",
      "Secure data storage with regular backups",
      "Incident response procedures for data breaches",
    ],
  },
  {
    title: "Your Rights",
    icon: Eye,
    content: [
      "Access: Request copies of your personal information",
      "Correction: Update or correct inaccurate information",
      "Deletion: Request deletion of your personal information (subject to legal requirements)",
      "Portability: Receive your data in a structured, commonly used format",
      "Objection: Object to processing of your personal information",
      "Withdraw Consent: Unsubscribe from marketing communications at any time",
    ],
  },
  {
    title: "Cookies and Tracking",
    icon: FileText,
    content: [
      "Essential Cookies: Necessary for website functionality and security",
      "Analytics Cookies: Help us understand how visitors use our website",
      "Marketing Cookies: Used to show relevant advertisements",
      "Preference Cookies: Remember your settings and preferences",
      "You can control cookies through your browser settings",
      "Some features may not work properly if cookies are disabled",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-ocean to-adventure rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring the
            security of your personal information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Last updated: January 1, 2024</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-ocean flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Important Notice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy explains how TravelAdventure (
                  <strong>we, our or us</strong>) collects, uses, and protects
                  your personal information when you use our website, mobile
                  applications, or services. By using our services, you agree to
                  the collection and use of information in accordance with this
                  policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean to-adventure rounded-lg flex items-center justify-center">
                      {/* <Icon className="w-6 h-6 text-white" /> */}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-ocean rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Data Retention */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Data Retention
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Booking Information
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We retain your booking and travel information for 7 years
                  after your trip completion for legal, tax, and customer
                  service purposes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Marketing Data
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Marketing preferences and communication history are retained
                  until you unsubscribe or request deletion of your data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Account Information
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Account data is retained for the duration of your account plus
                  2 years after account closure for security purposes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Website Analytics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Anonymous usage data and analytics are retained for up to 2
                  years to help improve our services and user experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* International Transfers */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              International Data Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your personal information may be transferred to and processed in
              countries other than your own. We ensure appropriate safeguards
              are in place:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">
                  Adequacy Decisions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Transfers to countries with adequate data protection laws
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">
                  Standard Contractual Clauses
                </h4>
                <p className="text-sm text-muted-foreground">
                  Legal agreements ensuring data protection standards
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">
                  Certification Programs
                </h4>
                <p className="text-sm text-muted-foreground">
                  Partners certified under recognized privacy frameworks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-ocean to-adventure rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please contact our Data Protection Officer:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Email</h3>
                <p className="text-muted-foreground">privacy@postcardtrip.in</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91-9821071644</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  Fourth Floor, Plot no-5, Westend Marg, Saidulajab, Saiyad Ul
                  Ajaib Village
                  <br />
                  Saket, New Delhi 110030
                  <br />
                  India
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  We respond to privacy inquiries within 30 days
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-foreground">Policy Updates</h3>
          <p className="text-sm text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on
            this page and updating the <strong>Last updated</strong> date.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
