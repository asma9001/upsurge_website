import React from "react";

const ReadyToMove = () => {
  const phoneNumber = "9803755150"; // Helen's phone number

  return (
    <section className="w-full px-6 py-17 md:px-17">
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          bg-[#0F172A]
          shadow-2xl
          px-6 py-12
          text-center
          flex flex-col
          items-center
          gap-6
        "
      >
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Ready to make a move?
        </h2>

        {/* Description */}
        <p className="text-[#CBD5E1] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Whether you're buying or selling, having a trusted expert by your
          side makes all the difference. Let's discuss your real estate goals
          today.
        </p>

        {/* Call button covering full space */}
        <a
          href={`tel:${phoneNumber}`}
          className="
            w-full
            md:w-2/5
            bg-[#5856D6]
            text-white
            px-6 py-4
            rounded-lg
            text-lg md:text-xl
            font-medium
            hover:bg-[#4740b5]
            transition
            text-center
          "
        >
          Call Helen Now
        </a>
      </div>
    </section>
  );
};

export default ReadyToMove;
