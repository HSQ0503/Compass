"use client";

import MentorCard from "@/components/MentorCard";
import MentorModal from "@/components/MentorModal";
import type { Mentor } from "@/types";
import { useState } from "react";

interface Props {
  mentors: Mentor[];
}

export default function MentorsGrid({ mentors }: Props) {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMentorClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMentor(null), 300);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          {/* Optional intro text */}
          <div
            className="text-center mb-12 max-w-3xl mx-auto"
            data-aos="fade-up-sm"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Meet our dedicated peer mentors who are ready to guide and support
              you through your academic journey.
            </p>
          </div>

          <div className="row">
            {mentors.map((mentor, i) => (
              <MentorCard
                key={mentor.slug}
                mentor={mentor}
                index={i}
                onClick={() => handleMentorClick(mentor)}
              />
            ))}
          </div>
        </div>
      </section>

      <MentorModal
        mentor={selectedMentor}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
