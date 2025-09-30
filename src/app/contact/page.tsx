import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import type { ContactPage } from "@/types";
import Link from "next/link";

const ContactPage = () => {
  const contact = getListPage<ContactPage["frontmatter"]>("contact/_index.md");
  const { title, description, meta_title, image, address_section } =
    contact.frontmatter;

  const compassEmail = "info@compass.com";

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} isContactPage />
      <section className="-mt-[45%] sm:-mt-[30%] md:-mt-[25%] lg:-mt-[40%] xl:-mt-[30%] 2xl:-mt-[23%] pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact Card */}
            <div
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="bg-gradient-to-br from-[#1e3a4f] via-[#1a3947] to-[#16323e] rounded-3xl p-12 md:p-16 text-center"
            >
              <h2
                className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
              {description && (
                <p
                  className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={markdownify(description)}
                />
              )}

              {/* Email CTA */}
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 mb-8">
                <p className="text-white/70 text-sm uppercase tracking-wider mb-3">
                  Send us an email
                </p>
                <Link
                  href={`mailto:${compassEmail}`}
                  className="text-white text-2xl md:text-3xl font-semibold hover:text-white/80 transition-colors inline-block"
                >
                  {compassEmail}
                </Link>
              </div>

              <Link
                href={`mailto:${compassEmail}`}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us Now
              </Link>
            </div>

            {/* Info Section */}
            <div
              data-aos="fade-up-sm"
              data-aos-delay="250"
              className="mt-16 text-center"
            >
              <h3
                className="text-2xl md:text-3xl font-semibold text-primary mb-4"
                dangerouslySetInnerHTML={markdownify(address_section.title)}
              />
              <p
                className="text-lg text-dark max-w-2xl mx-auto mb-12"
                dangerouslySetInnerHTML={markdownify(
                  address_section.description
                )}
              />

              {/* What to Include */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div
                  data-aos="fade-up-sm"
                  data-aos-delay="300"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-4xl mb-4">📝</div>
                  <h4 className="font-semibold text-primary mb-2">
                    Your Information
                  </h4>
                  <p className="text-sm text-dark/70">
                    Name, grade level, and school
                  </p>
                </div>
                <div
                  data-aos="fade-up-sm"
                  data-aos-delay="350"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-primary mb-2">
                    Your Goals
                  </h4>
                  <p className="text-sm text-dark/70">
                    What you hope to achieve through mentorship
                  </p>
                </div>
                <div
                  data-aos="fade-up-sm"
                  data-aos-delay="400"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="font-semibold text-primary mb-2">
                    Questions
                  </h4>
                  <p className="text-sm text-dark/70">
                    Any questions about the program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
