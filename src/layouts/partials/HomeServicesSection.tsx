import { markdownify } from "@/lib/utils/textConverter";
import type { Homepage } from "@/types";

const HomeServicesSection = ({
  services,
}: {
  services: Homepage["frontmatter"]["services"];
}) => {
  return (
    services.enable && (
      <section className="section pt-0 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="font-medium text-primary uppercase tracking-wider"
              dangerouslySetInnerHTML={markdownify(services.subtitle)}
            />
            <h2
              data-aos="fade-up-sm"
              data-aos-delay="200"
              className="mt-3 font-medium text-primary text-4xl md:text-5xl"
              dangerouslySetInnerHTML={markdownify(services.title)}
            />
            {services.description && (
              <p
                data-aos="fade-up-sm"
                data-aos-delay="250"
                className="mt-6 text-xl text-dark max-w-3xl mx-auto"
                dangerouslySetInnerHTML={markdownify(services.description)}
              />
            )}
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 mb-16">
            {services.highlights?.map((highlight, index) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100 + 300}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  {highlight.icon && (
                    <div className="text-4xl flex-shrink-0 mt-1">
                      {highlight.icon}
                    </div>
                  )}
                  <p className="text-lg text-dark leading-relaxed">
                    {highlight.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          {services.skills && services.skills.length > 0 && (
            <div
              data-aos="fade-up-sm"
              data-aos-delay="500"
              className="bg-primary rounded-3xl p-10 md:p-12 text-center"
            >
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-8">
                Builds Essential Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {services.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-3 text-white font-medium text-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  );
};

export default HomeServicesSection;
