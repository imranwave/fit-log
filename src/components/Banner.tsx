import Image from "next/image";
import bannerimg from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
      <section className="mx-auto container mx-auto px-3 py-4">
        <div className="relative min-h-[495px] overflow-hidden rounded-2xl border border-slate-800 bg-[#191c22]">
          {/* Content */}
          <div className="relative z-10 flex min-h-[495px] flex-col justify-center px-10 py-12 md:w-[55%] md:px-11">
            {/* Small heading */}
            <p className="mb-6 text-[12px] font-bold uppercase tracking-wide text-lime-400">
              Workout Library
            </p>

            {/* Main heading */}
            <h1 className="max-w-[520px] font-sans text-4xl font-extrabold uppercase leading-[1.15] tracking-tight text-slate-100 sm:text-5xl">
              Train with intent. Log every set.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[430px] text-[15px] leading-6 text-slate-300">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <div className="mt-5">
              <button className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300">
                Browse Workouts
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute bottom-0 right-[-20px] flex h-full w-[52%] items-end justify-center md:right-0">
            <Image
              src={bannerimg}
              alt="Workout illustration"
              width={500}
              height={500}
              className="h-[90%] w-auto object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>
    
  );
};

export default Banner;
