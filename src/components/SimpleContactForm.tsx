"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { Button } from "./ui/button";
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Mail,
  User,
  MessageSquare,
  Building
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Comprehensive email validation
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        // Additional validation for common email providers
        const validDomains = [
          'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
          'protonmail.com', 'aol.com', 'live.com', 'msn.com', 'zoho.com',
          'yandex.com', 'mail.com', 'gmx.com', 'web.de', 'tutanota.com',
          'fastmail.com', 'hey.com', 'company.com', 'org.com', 'edu.com',
          'gov.com', 'mil.com', 'net.com', 'co.uk', 'co.in', 'co.au',
          'co.ca', 'co.nz', 'co.za', 'de', 'fr', 'it', 'es', 'nl',
          'be', 'ch', 'at', 'se', 'no', 'dk', 'fi', 'pl', 'cz',
          'hu', 'ro', 'bg', 'hr', 'sk', 'si', 'lt', 'lv', 'ee',
          'ie', 'pt', 'gr', 'cy', 'mt', 'lu', 'jp', 'kr', 'cn',
          'tw', 'hk', 'sg', 'my', 'th', 'ph', 'id', 'vn', 'br',
          'mx', 'ar', 'cl', 'co', 'pe', 've', 'uy', 'py', 'bo',
          'ec', 'gy', 'sr', 'gf', 'fk', 'ru', 'ua', 'by', 'kz',
          'kg', 'tj', 'tm', 'uz', 'mn', 'af', 'pk', 'bd', 'lk',
          'mv', 'np', 'bt', 'mm', 'la', 'kh', 'bn', 'tl', 'au',
          'nz', 'fj', 'pg', 'sb', 'vu', 'nc', 'pf', 'ws', 'to',
          'ki', 'tv', 'nr', 'fm', 'mh', 'pw', 'as', 'gu', 'mp',
          'vi', 'pr', 'do', 'ht', 'cu', 'jm', 'tt', 'bb', 'lc',
          'vc', 'gd', 'ag', 'kn', 'dm', 'bs', 'bz', 'gt', 'sv',
          'hn', 'ni', 'cr', 'pa', 'ca', 'us'
        ];
        
        const emailDomain = formData.email.split('@')[1]?.toLowerCase();
        
        if (!emailDomain) {
          newErrors.email = "Please enter a valid email address";
        } else if (!validDomains.some(domain => emailDomain === domain || emailDomain.endsWith('.' + domain))) {
          newErrors.email = "Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)";
        } else if (formData.email.length > 254) {
          newErrors.email = "Email address is too long";
        } else if (formData.email.includes('..') || formData.email.startsWith('.') || formData.email.endsWith('.')) {
          newErrors.email = "Email format is invalid";
        }
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    if (formData.company && formData.company.length > 100) {
      newErrors.company = "Company name must be less than 100 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using our custom API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const getInputClassName = (field: keyof FormData) => {
    return `w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      errors[field] 
        ? "border-red-500 bg-red-50/10" 
        : "border-white/20 bg-white/5 hover:border-white/30 text-white placeholder-slate-400"
    }`;
  };

  return (
    <section id="contact-form" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <GlassCard>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 gradient-text">
                    Send Me a Message
                  </h2>
                  <p className="text-slate-300/90">
                    I'll get back to you within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={getInputClassName("name")}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={getInputClassName("email")}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-300">
                      <Building className="h-4 w-4 inline mr-2" />
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className={getInputClassName("company")}
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className={getInputClassName("subject")}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    <MessageSquare className="h-4 w-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={getInputClassName("message")}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 group"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">
                        Something went wrong
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-300">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Form Note */}
                <div className="text-center">
                  <p className="text-xs text-slate-400">
                    By submitting this form, you agree to receive communications from me. 
                    I respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
