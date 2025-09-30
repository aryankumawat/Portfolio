"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

export function ResumeViewer() {
  return (
    <section id="resume-viewer" className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4">
              View Resume Online
            </h2>
            <p className="text-muted-foreground">
              Scroll through my resume below or download it for offline viewing
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-electric" />
                  <div>
                    <CardTitle className="text-xl">Aryan Kumawat - Resume</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Data Science & Finance Professional
                    </p>
                  </div>
                </div>
                <Button asChild variant="gradient" size="sm">
                  <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* PDF Viewer Placeholder */}
              <div className="min-h-[800px] bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-electric to-electric-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">
                    Resume PDF Viewer
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    This is where the PDF resume would be displayed. For now, you can 
                    download the PDF file to view my complete professional profile.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="gradient">
                      <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf">
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="/resume/Aryan_Web_CV.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open in New Tab
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                  Resume Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-electric">Education</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-electric mt-1">•</span>
                        <div>
                          <p className="font-medium text-foreground">Bachelor of Advanced Computing</p>
                          <p>University of Sydney (2022-2026)</p>
                          <p className="text-xs">Data Science + Finance Specialization</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric mt-1">•</span>
                        <div>
                          <p className="font-medium text-foreground">IBDP</p>
                          <p>Jayshree Periwal International School (2020-2022)</p>
                          <p className="text-xs">Score: 39/45</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-electric">Key Experience</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-electric mt-1">•</span>
                        <div>
                          <p className="font-medium text-foreground">Digital Impact Tech Consultant</p>
                          <p>180 Degrees Consulting Sydney (2024-Present)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric mt-1">•</span>
                        <div>
                          <p className="font-medium text-foreground">Academic Tutor</p>
                          <p>Ezy Math Tutoring (2024-Present)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric mt-1">•</span>
                        <div>
                          <p className="font-medium text-foreground">ENGO Peer Mentor</p>
                          <p>University of Sydney (2023-Present)</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    This is a brief overview. Download the full PDF for complete details, 
                    including all work experience, projects, skills, and achievements.
                  </p>
                  <Button asChild variant="gradient">
                    <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf">
                      <Download className="h-4 w-4 mr-2" />
                      Download Complete Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
