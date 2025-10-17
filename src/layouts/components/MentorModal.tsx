"use client";

import ImageFallback from "@/helpers/ImageFallback";
import type { Mentor } from "@/types";
import { useEffect } from "react";

interface Props {
  mentor: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MentorModal({ mentor, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mentor) return null;

  const { name, grade, focus_area, bio, image, highlights } =
    mentor.frontmatter;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 group"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Image */}
            <div className="md:w-2/5 flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <ImageFallback
                  src={image!}
                  alt={name}
                  width={400}
                  height={500}
                  className="object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {name}
                </h2>
                <p className="text-xl text-gray-600 font-medium">{grade}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {focus_area.split(",").map((area, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {area.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {highlights && highlights.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex-1">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  About
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
