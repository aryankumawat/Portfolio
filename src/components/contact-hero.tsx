"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "kumawataryan23@gmail.com",
    href: "mailto:kumawataryan23@gmail.com",
    description: "Best for detailed inquiries and collaboration opportunities",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aryan Kumawat | LinkedIn",
    href: "https://www.linkedin.com/in/aryan-kumawat-/",
    description: "Connect professionally and view my experience",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+61 493 322 348",
    href: "tel:+61493322348",
    description: "Available for urgent matters and calls",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sydney, Australia",
    href: "#",
    description: "Based in Sydney, open to remote opportunities",
    color: "from-purple-500 to-purple-600",
  },
];

const availability = [
  {
    day: "Monday",
    time: "9:00 AM - 11:00 AM, 12:00 PM - 6:00 PM",
    status: "Available",
    color: "success",
    busy: "11:00 AM - 12:00 PM (Uni Lecture)",
  },
  {
    day: "Tuesday",
    time: "9:00 AM - 1:00 PM, 2:00 PM - 4:00 PM, 7:00 PM - 6:00 PM",
    status: "Limited",
    color: "warning",
    busy: "1:00 PM - 2:00 PM (Uni), 4:00 PM - 7:00 PM (Uni Classes)",
  },
  {
    day: "Wednesday",
    time: "10:00 AM - 1:00 PM, 2:00 PM - 4:00 PM, 5:00 PM - 6:00 PM",
    status: "Limited",
    color: "warning",
    busy: "9:00 AM - 10:00 AM (Uni), 1:00 PM - 2:00 PM (Uni), 4:00 PM - 5:00 PM (Uni)",
  },
  {
    day: "Thursday",
    time: "10:00 AM - 1:00 PM, 2:00 PM - 5:00 PM, 6:00 PM - 6:00 PM",
    status: "Limited",
    color: "warning",
    busy: "9:00 AM - 10:00 AM (Uni), 1:00 PM - 2:00 PM (Uni), 5:00 PM - 6:00 PM (Uni)",
  },
  {
    day: "Friday",
    time: "11:00 AM - 6:00 PM",
    status: "Available",
    color: "success",
    busy: "9:00 AM - 11:00 AM (Uni Classes)",
  },
  {
    day: "Weekends",
    time: "10:00 AM - 4:00 PM",
    status: "Available",
    color: "success",
    busy: "No classes",
  },
];

export function ContactHero() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto"
          >
            I'm always interested in new opportunities, collaborations, and 
            interesting conversations. Whether you have a project in mind, 
            want to discuss potential opportunities, or just want to connect, 
            I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                      {method.label === "Email" ? (
                        <a 
                          href="#contact-form"
                          className="text-electric hover:text-electric-dark transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <a 
                          href={method.href}
                          target={method.label === "LinkedIn" ? "_blank" : "_self"}
                          rel={method.label === "LinkedIn" ? "noopener noreferrer" : ""}
                          className="text-electric hover:text-electric-dark transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Availability */}
          <GlassCard>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-electric" />
                Availability
              </h3>
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={item.day} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.day}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <Badge variant={item.color as any} className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
                      <span className="font-medium">Busy:</span> {item.busy}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  I'm a full-time student at University of Sydney, so my availability varies by day.
                  I'm flexible with scheduling and happy to accommodate different time zones.
                  Feel free to reach out even outside these hours!
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <GlassCard>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-electric" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button asChild variant="gradient" className="w-full">
                  <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf">
                    <Send className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://www.linkedin.com/in/aryan-kumawat-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:kumawataryan23@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Looking for collaboration opportunities, internships, or full-time roles 
                  in data science, finance, or software development.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
