import { steps } from "../assets/assets";

const UpsurgeSteps = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

            {/* Heading */}
            <div className="mb-14">
                <div>
               <div className="flex items-center gap-1 mb-4">
            <span className="text-[#666666] text-2xl">✦</span>
            <span className="text-md text-[#333333]">✦</span>
            <span className="text-xs text-[#333333]">✦</span>
          </div>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-gray-900">
                        Navigating the <span className="text-indigo-600">Upsurge</span> Experience
                    </h2>

                    <p className="text-[#999999]/60 font-medium max-w-4xl">
                        At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
                    </p>
                </div>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className=" "
                    >
                        <span className="border-l h-14 font-urbanist font-medium border-[#262626] bg-white px-3 self-stretch flex items-center text-md">
                            {item.step}
                        </span>

                        <div className="border-[0.75px] border-[#262626] rounded-xl rounded-tl-none bg-gradient-to-t from-[rgba(184,141,116,0)] to-[rgb(231, 174, 153)] px-6 py-5">
                            <h3 className="text-[16px] font-semibold  mb-3">
                                {item.title}
                            </h3>

                            <p className="text-[14px] leading-[1.7] text-[#999999]/60 font-medium">
                                {item.desc}
                            </p>
                        </div>


                    </div>
                ))}
            </div>



        </section>
    );
};

export default UpsurgeSteps;
