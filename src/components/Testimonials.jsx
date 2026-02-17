import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Helen made our home buying experience seamless and stress-free. Her knowledge of the market and attention to detail are exceptional.",
    author: "Sarah & Michael Thompson",
  },
  {
    text: "Professional, responsive, and truly cares about her clients. We couldn't have asked for a better agent.",
    author: "David Chen",
  },
  {
    text: "Helen helped us find our dream home in a competitive market. Her negotiation skills saved us thousands.",
    author: "Jennifer Martinez",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-xl font-bold text-[#0F172A] mb-7">
          Client Testimonials
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-[#374151] leading-relaxed mb-4">
                “{item.text}”
              </p>

              {/* Author */}
              <p className="text-sm font-medium text-[#0F172A]">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
