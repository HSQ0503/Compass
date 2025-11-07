import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import FAQs from "@/partials/FAQs";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import type { AboutPage, Faqs } from "@/types";

export default function AboutPage() {
  const about = getListPage<AboutPage["frontmatter"]>("about/_index.md");
  const faqsData = getListPage<Faqs["frontmatter"]>("faqs/_index.md");

  const {
    title,
    description,
    meta_title,
    image,
    images_gallery,
    blog_section,
  } = about.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />

      <section className="section">
        <div className="container">
          <h2
            className="text-xl md:text-xl leading-relaxed text-center max-w-4xl mx-auto"
            dangerouslySetInnerHTML={markdownify(description || "")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-14 max-w-5xl mx-auto">
            <div data-aos="zoom-in-sm" data-aos-delay="150">
              <ImageFallback
                src={images_gallery[0]}
                alt="Compass Mentorship"
                width={400}
                height={300}
                className="object-cover object-bottom w-full h-[250px] md:h-[300px] rounded-lg"
              />
            </div>
            <div data-aos="zoom-in-sm" data-aos-delay="200">
              <ImageFallback
                src={images_gallery[1]}
                alt="Compass Mentorship"
                width={400}
                height={300}
                className="object-cover object-top w-full h-[250px] md:h-[300px] rounded-lg"
              />
            </div>
            <div data-aos="zoom-in-sm" data-aos-delay="250">
              <ImageFallback
                src={images_gallery[2]}
                alt="Compass Mentorship"
                width={400}
                height={300}
                className="object-cover w-full h-[250px] md:h-[300px] rounded-lg"
              />
            </div>
            <div data-aos="zoom-in-sm" data-aos-delay="300">
              <ImageFallback
                src={images_gallery[3]}
                alt="Compass Mentorship"
                width={400}
                height={300}
                className="object-cover w-full h-[250px] md:h-[300px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {blog_section.enable && (
        <section className="section pt-0">
          <div className="container">
            <div className="max-lg:text-center mb-8">
              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="font-medium text-primary uppercase"
                dangerouslySetInnerHTML={markdownify(
                  blog_section.subtitle || ""
                )}
              />
              <h2
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="mt-3 font-medium text-primary"
                dangerouslySetInnerHTML={markdownify(blog_section.title || "")}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div
                data-aos="fade-right-sm"
                data-aos-delay="250"
                className="lg:flex-shrink-0"
              >
                <ImageFallback
                  src="/images/about/Board/GustavoA.png"
                  alt="Gustavo Marques Alberici - Founder"
                  width={280}
                  height={280}
                  className="w-56 h-auto object-contain rounded-lg shadow-lg mx-auto lg:mx-0"
                />
              </div>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="300"
                className="flex-1 text-xl md:text-2xl text-primary text-center lg:text-left leading-relaxed"
                dangerouslySetInnerHTML={markdownify(
                  blog_section.description || ""
                )}
              />
            </div>

            <div className="mt-12" data-aos="fade-up-sm" data-aos-delay="400">
              <ImageFallback
                src="/images/AboutBG.png"
                alt="The Compass Story"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      <CallToAction isNoSectionTop />
      <FAQs isNoSectionTop faqsData={faqsData} />
    </>
  );
}
