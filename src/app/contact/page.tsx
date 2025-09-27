import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-hero noise">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
