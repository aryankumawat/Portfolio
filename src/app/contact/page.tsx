import { ContactHero } from "@/components/contact-hero";
import { SimpleContactForm } from "@/components/SimpleContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-hero noise">
      <ContactHero />
      <SimpleContactForm />
    </div>
  );
}
