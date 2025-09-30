"use client";

import { markdownify } from "@/lib/utils/textConverter";
import type { Homepage } from "@/types";
import { useEffect } from "react";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const GallerySlider = ({
  gallery,
}: {
  gallery: Homepage["frontmatter"]["gallery"];
}) => {
  const { enable, title, subtitle, description, skills } = gallery;

  useEffect(() => {
    if (enable) {
      const swiper = new Swiper(".gallery-slider", {
        modules: [Autoplay],
        spaceBetween: 24,
        loop: true,
        centeredSlides: false,
        speed: 8000,
        autoplay: {
          delay: 0,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, [enable]);

  return (
    <>
      {enable && (
        <section className="section bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            {/* section title */}
            <div className="row g-5 justify-between items-center max-lg:text-center">
              <div className="lg:col-4">
                <p
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                  className="font-medium text-primary uppercase tracking-wider"
                  dangerouslySetInnerHTML={markdownify(subtitle)}
                />
                <h2
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                  className="mt-3 font-medium text-primary"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              </div>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="300"
                className="lg:col-8 h4 text-dark lg:indent-20 text-center lg:text-left"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            </div>
          </div>

          <div className="swiper gallery-slider mt-17.5">
            <div className="swiper-wrapper">
              {skills?.map((skill, i) => (
                <div className="swiper-slide h-auto" key={i}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-[320px] flex flex-col border border-gray-100 hover:border-primary/30">
                    {skill.icon && (
                      <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {skill.icon}
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-dark transition-colors flex-shrink-0">
                      {skill.name}
                    </h3>
                    <p className="text-text leading-relaxed flex-grow">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9 flex items-center justify-center text-center" />
          </div>
        </section>
      )}

      <style jsx>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </>
  );
};

export default GallerySlider;
