import { getListPage, getSinglePage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import FAQs from "@/partials/FAQs";
import MentorsGrid from "@/partials/MentorsGrid";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import type { Faqs, Mentor, Page } from "@/types";

export default function MentorsPage() {
  const mentorsIndex = getListPage<Page["frontmatter"]>("mentors/_index.md");
  const mentors = getSinglePage<Mentor["frontmatter"]>("mentors");
  const faqsData = getListPage<Faqs["frontmatter"]>("faqs/_index.md");

  return (
    <>
      <SeoMeta {...mentorsIndex.frontmatter} />
      <PageHeader title={mentorsIndex.frontmatter.title} />

      <MentorsGrid mentors={mentors} />

      <CallToAction isNoSectionTop />
      <FAQs isNoSectionTop faqsData={faqsData} />
    </>
  );
}
