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
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
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
    return `w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
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
                  className="w-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
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
