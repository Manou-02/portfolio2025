import { motion } from "framer-motion";
import { Code, Layers, Atom, Triangle, Server, Database } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Layers },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
];

export function AboutSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="about-title">
            {t("aboutTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            {t("aboutSubtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none text-foreground space-y-4" data-testid="about-bio">
              <p>{t("aboutBio1")}</p>
              <p>{t("aboutBio2")}</p>
              <p>{t("aboutBio3")}</p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              data-testid="stats-grid"
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-projects">50+</div>
                <div className="text-sm text-muted-foreground">{t("projectsCompleted")}</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-experience">5+</div>
                <div className="text-sm text-muted-foreground">{t("yearsExperience")}</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-clients">20+</div>
                <div className="text-sm text-muted-foreground">{t("happyClients")}</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">
                {t("technicalSkills")}
              </h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-testid="skills-grid"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                      data-testid={`skill-${skill.name.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium text-sm">{skill.name}</h4>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
