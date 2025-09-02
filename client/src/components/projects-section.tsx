import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { projects, type Project } from "@/lib/project-data";

type ProjectCategory = "all" | "frontend" | "fullstack" | "mobile";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { language, t } = useLanguage();

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const filterButtons: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: t("allProjects") },
    { value: "frontend", label: t("frontend") },
    { value: "fullstack", label: t("fullstack") },
    { value: "mobile", label: t("mobile") },
  ];

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="projects-title">
            {t("featuredProjects")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-subtitle">
            {t("projectsSubtitle")}
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          data-testid="project-filters"
        >
          {filterButtons.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter.value)}
              className="px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg"
              data-testid={`filter-${filter.value}`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeFilter}
            data-testid="projects-grid"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`project-card-${project.id}`}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img 
                    src={project.image}
                    alt={project.title[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold" data-testid={`project-title-${project.id}`}>
                      {project.title[language]}
                    </h3>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="p-2"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          data-testid={`project-live-${project.id}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="p-2"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          data-testid={`project-github-${project.id}`}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2" data-testid={`project-technologies-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`tech-badge-${tech.toLowerCase().replace(/\./g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            data-testid="button-view-all-projects"
          >
            {t("viewAllProjects")}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
