import BlogCard from "@/components/BlogCard";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import FAQs from "@/partials/FAQs";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import type { AboutPage, BlogPost, Faqs } from "@/types";

export default function AboutPage() {
  const about = getListPage<AboutPage["frontmatter"]>("about/_index.md");
  const posts = getSinglePage<BlogPost["frontmatter"]>("blog");
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
            <div className="row g-5 justify-between items-start max-lg:text-center">
              <div className="lg:col-3">
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
                  dangerouslySetInnerHTML={markdownify(
                    blog_section.title || ""
                  )}
                />
              </div>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="300"
                className="lg:col-8 h4 text-primary md:indent-20 text-center lg:text-left"
                dangerouslySetInnerHTML={markdownify(
                  blog_section.description || ""
                )}
              />
            </div>

            <div className="row g-4 section-sm pb-0">
              {posts
                ?.filter((post) => post.frontmatter.featured)
                .slice(0, blog_section.show_blog_count || 3)
                .map((post, i) => (
                  <BlogCard
                    key={post.slug}
                    index={i}
                    post={post}
                    customLink="/mentors"
                    customLabel="Mentor"
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      <CallToAction isNoSectionTop />
      <FAQs isNoSectionTop faqsData={faqsData} />
    </>
  );
}
