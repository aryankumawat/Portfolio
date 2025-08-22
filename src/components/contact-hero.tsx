"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
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
    value: "akum9196@uni.sydney.edu.au",
    href: "mailto:akum9196@uni.sydney.edu.au",
    description: "Best for detailed inquiries and collaboration opportunities",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aryan Kumawat | LinkedIn",
    href: "https://linkedin.com/in/aryan-kumawat",
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
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
    status: "Available",
    color: "success",
  },
  {
    day: "Weekends",
    time: "10:00 AM - 4:00 PM",
    status: "Limited",
    color: "warning",
  },
  {
    day: "Holidays",
    time: "By appointment",
    status: "Flexible",
    color: "info",
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
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                      <a 
                        href={method.href}
                        target={method.label === "LinkedIn" ? "_blank" : "_self"}
                        rel={method.label === "LinkedIn" ? "noopener noreferrer" : ""}
                        className="text-electric hover:text-electric-dark transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-electric" />
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div key={item.day} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.day}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <Badge variant={item.color as any} className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  I'm flexible with scheduling and happy to accommodate different time zones.
                  Feel free to reach out even outside these hours!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-electric" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button asChild variant="gradient" className="w-full">
                  <Link href="/resume">
                    <Send className="h-4 w-4 mr-2" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://linkedin.com/in/aryan-kumawat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:akum9196@uni.sydney.edu.au">
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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
