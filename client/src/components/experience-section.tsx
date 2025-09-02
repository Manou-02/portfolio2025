import { motion } from "framer-motion";
import { Briefcase, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { experiences } from "@/lib/project-data";

const iconMap = {
  briefcase: Briefcase,
  code: Code,
  rocket: Rocket,
};

export function ExperienceSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="experience-title">
            {t("experienceTitle")}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            {t("experienceSubtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-testid="experience-timeline"
          >
            {experiences.map((experience, index) => {
              const Icon = iconMap[experience.icon];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row md:justify-between md:items-center mb-12"
                  data-testid={`experience-item-${experience.id}`}
                >
                  {/* Content Card */}
                  <div className={cn("md:w-5/12", isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8")}>
                    <motion.div
                      className={cn("bg-card border border-border rounded-2xl p-6 shadow-lg", 
                        isEven ? "ml-12 md:ml-0" : "ml-12 md:ml-0")}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <h3 className="text-xl font-semibold mb-2" data-testid={`experience-title-${experience.id}`}>
                        {experience.title[language]}
                      </h3>
                      <p className={cn("font-medium mb-2", `text-${experience.color}`)} data-testid={`experience-company-${experience.id}`}>
                        {experience.company[language]}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4" data-testid={`experience-period-${experience.id}`}>
                        {experience.period}
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1" data-testid={`experience-achievements-${experience.id}`}>
                        {experience.achievements[language].map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Timeline Icon */}
                  <div className={cn("absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center",
                    experience.color === "primary" ? "bg-primary" :
                    experience.color === "accent" ? "bg-accent" : "bg-chart-1"
                  )}>
                    <Icon className={cn("w-4 h-4",
                      experience.color === "primary" ? "text-primary-foreground" :
                      experience.color === "accent" ? "text-accent-foreground" : "text-white"
                    )} />
                  </div>

                  {/* Description */}
                  {!isEven && (
                    <div className="md:w-5/12 md:pl-8">
                      <div className="text-muted-foreground text-sm mt-4 md:mt-0" data-testid={`experience-description-${experience.id}`}>
                        {experience.description[language]}
                      </div>
                    </div>
                  )}
                  
                  {isEven && (
                    <div className="md:w-5/12 md:pr-8">
                      <div className="text-muted-foreground text-sm mt-4 md:mt-0" data-testid={`experience-description-${experience.id}`}>
                        {experience.description[language]}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
