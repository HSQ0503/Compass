import ImageFallback from "@/helpers/ImageFallback";
import type { Mentor } from "@/types";

interface Props {
  mentor: Mentor;
  index: number;
  onClick: () => void;
}

export default function MentorCard({ mentor, index, onClick }: Props) {
  const { name, grade, focus_area, image } = mentor.frontmatter;

  return (
    <div
      data-aos="fade-up-sm"
      data-aos-delay={index * 100 + 150}
      className="col-11 sm:col-9 md:col-6 lg:col-4 mb-12 last:mb-0 mx-auto"
    >
      <div
        className="cursor-pointer group transition-all duration-300 hover:transform hover:-translate-y-2"
        onClick={onClick}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
          <ImageFallback
            src={image!}
            alt={name}
            width={400}
            height={500}
            className="object-cover aspect-[4/5] w-full group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              View Profile
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 px-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          <p className="text-sm text-gray-600 font-medium mb-4">{grade}</p>
          <div className="flex flex-wrap gap-2">
            {focus_area.split(",").map((area, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs border border-primary/20 group-hover:bg-primary/20 transition-colors duration-200"
              >
                {area.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
