import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, Loader2, Check, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("messageSent"),
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: t("errorTryAgain"),
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const getSubmitButtonContent = () => {
    if (contactMutation.isPending) {
      return (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          {t("sendingMessage")}
        </>
      );
    }
    
    if (contactMutation.isSuccess) {
      return (
        <>
          <Check className="w-5 h-5" />
          {t("messageSent")}
        </>
      );
    }

    if (contactMutation.isError) {
      return (
        <>
          <X className="w-5 h-5" />
          {t("errorTryAgain")}
        </>
      );
    }

    return (
      <>
        <Send className="w-5 h-5" />
        {t("sendMessage")}
      </>
    );
  };

  const getSubmitButtonVariant = () => {
    if (contactMutation.isSuccess) return "default";
    if (contactMutation.isError) return "destructive";
    return "default";
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="contact-title">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
            {t("contactSubtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="contact-connect-title">
                {t("letsConnect")}
              </h3>
              <p className="text-muted-foreground mb-8" data-testid="contact-description">
                {t("contactDescription")}
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium" data-testid="contact-email-label">{t("email")}</h4>
                  <p className="text-muted-foreground" data-testid="contact-email-value">manou@example.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium" data-testid="contact-location-label">Location</h4>
                  <p className="text-muted-foreground" data-testid="contact-location-value">{t("location")}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium" data-testid="contact-response-label">{t("responseTime")}</h4>
                  <p className="text-muted-foreground" data-testid="contact-response-value">{t("responseTimeValue")}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4" data-testid="social-links-title">{t("followMe")}</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/manourakoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="social-github"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/manourakoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/manourakoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                {/* Honeypot for spam protection */}
                <input 
                  type="text" 
                  name="honeypot" 
                  style={{ display: "none" }} 
                  tabIndex={-1} 
                  autoComplete="off"
                />
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="form-name-label">{t("name")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("namePlaceholder")} 
                          {...field} 
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="form-email-label">{t("email")}</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          {...field} 
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="form-subject-label">{t("subject")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("subjectPlaceholder")} 
                          {...field} 
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="form-message-label">{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder={t("messagePlaceholder")} 
                          className="resize-vertical"
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant={getSubmitButtonVariant()}
                  size="lg"
                  className="w-full px-8 py-4 rounded-xl font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  <span className="flex items-center justify-center gap-2">
                    {getSubmitButtonContent()}
                  </span>
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
