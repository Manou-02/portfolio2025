import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "experience", label: t("experience") },
    { id: "contact", label: t("contact") },
  ];

  const services = [
    t("webDevelopment"),
    t("mobileApps"),
    t("apiDevelopment"),
    t("consulting"),
  ];

  return (
    <footer className="border-t border-border bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4" data-testid="footer-name">
              {t("name")}
            </h3>
            <p className="text-muted-foreground mb-4" data-testid="footer-description">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/manourakoto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid="footer-social-github"
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
                data-testid="footer-social-linkedin"
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
                data-testid="footer-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">
              {t("services")}
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground" data-testid={`footer-service-${index}`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            {t("copyright")}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded" data-testid="footer-privacy">
              {t("privacyPolicy")}
            </button>
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded" data-testid="footer-terms">
              {t("termsOfService")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
