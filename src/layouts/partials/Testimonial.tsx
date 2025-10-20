"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { ReviewPage } from "@/types";
import { useEffect } from "react";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonial = ({
  isNoSectionTop = false,
  isNoSectionBottom = false,
  testimonial,
}: {
  isNoSectionTop?: boolean;
  isNoSectionBottom?: boolean;
  testimonial: ReviewPage;
}) => {
  const { title, subtitle, process_steps } = testimonial.frontmatter;

  useEffect(() => {
    new Swiper(".review-slider", {
      modules: [Autoplay, Navigation],
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 12000,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
      navigation: {
        prevEl: ".custom-swiper-button-prev",
        nextEl: ".custom-swiper-button-next",
      },
      slidesPerView: 1,
    });
  }, []);

  return (
    <section
      id="how-it-works"
      className={`${isNoSectionTop ? "pt-0" : "pt-16"} ${isNoSectionBottom ? "pb-0" : "pb-16"}`}
    >
      <div className="bg-primary">
        <div className="flex flex-col lg:flex-row max-lg:items-center justify-center">
          <div className="w-[80%] lg:w-[58%] py-16 lg:py-20">
            <div className="row justify-center h-full">
              <div className="lg:col-10 flex flex-col">
                {/* section title */}
                <div className="text-center lg:text-left">
                  <p
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                    className="font-medium text-white uppercase tracking-wider text-sm"
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                  />
                  <h2
                    data-aos="fade-up-sm"
                    data-aos-delay="250"
                    className="mt-3 font-medium text-white text-3xl md:text-4xl lg:text-5xl"
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                </div>

                {/* Process flow header */}
                <div className="mt-6 mb-4 text-white/70 text-center lg:text-left">
                  <p className="text-lg md:text-xl font-medium">
                    Student → Counselor → Coordinator
                  </p>
                </div>

                {/* swiper at the bottom */}
                <div className="mt-6">
                  <div className="swiper review-slider relative">
                    <div className="swiper-wrapper">
                      {process_steps?.map((step, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="flex flex-col">
                            {/* Step number badge */}
                            <div className="mb-5">
                              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 text-white text-xl font-bold">
                                {step.step_number}
                              </span>
                            </div>

                            {/* Step title */}
                            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
                              {step.title}
                            </h3>

                            {/* Step description */}
                            <p
                              dangerouslySetInnerHTML={markdownify(
                                step.description
                              )}
                              className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Custom arrow buttons */}
                    <div className="flex gap-6 mt-10 lg:absolute lg:bottom-0 lg:right-0 z-10 justify-center lg:justify-start">
                      <div className="custom-swiper-button-prev text-white/50 hover:text-white duration-200 ease-in-out cursor-pointer -rotate-45 active:scale-80">
                        <DynamicIcon
                          icon="FaArrowLeftLong"
                          className="text-2xl"
                        />
                      </div>
                      <div className="custom-swiper-button-next text-white hover:text-white duration-200 ease-in-out cursor-pointer -rotate-45 active:scale-80">
                        <DynamicIcon
                          icon="FaArrowRightLong"
                          className="text-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] lg:w-[42%] bg-[url(/images/banner-testimonial.png)] lg:h-[700px] bg-cover aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
