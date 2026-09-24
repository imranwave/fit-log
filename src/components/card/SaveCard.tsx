import { FitType } from '@/type/FitType';
import { Check, Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';


const SaveCard = ({singleSave}:{singleSave:FitType}) => {
    return (
        <div className="w-full rounded-[20px] border border-[#292d34] bg-[#191c22] px-5 py-5 my-3">
      <div className="flex items-center justify-between gap-6">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex min-w-0 items-center gap-5">

          {/* Image */}
          <div className="h-[126px] w-[185px] shrink-0 overflow-hidden rounded-[18px]">
            <Image
              src={singleSave.image}
              alt="Barbell Bench Press"
              height={400}
              width={300}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Workout Info */}
          <div className="min-w-0">

            {/* Name */}
            <h2 className="text-[25px] font-semibold uppercase leading-none tracking-[-0.5px] text-white">
              BARBELL BENCH PRESS
            </h2>

            {/* Category */}
            <p className="mt-2 text-[18px] text-[#a8adb7]">
              Barbell, Bench
            </p>

            {/* Stats */}
            <div className="mt-4 flex items-center gap-5">

              {/* Time */}
              <div className="flex items-center gap-2">
                <Clock3
                  size={21}
                  strokeWidth={2}
                  className="text-[#baff00]"
                />

                <span className="text-[17px] text-white">
                  25 min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-2">
                <Flame
                  size={21}
                  strokeWidth={2}
                  className="text-[#baff00]"
                />

                <span className="text-[17px] text-white">
                  180 kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <Star
                  size={21}
                  strokeWidth={2}
                  className="text-[#baff00]"
                />

                <span className="text-[17px] text-white">
                  4.8
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex shrink-0 items-center gap-3">

          {/* View Details */}
          <button
            className="
              flex items-center justify-center
              rounded-full
              border border-white
              px-5 py-2.5
              text-[16px] font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            View Details
          </button>

          {/* Mark as Done */}
          <button
            className="
              flex items-center gap-2
              rounded-full
              bg-[#baff00]
              px-5 py-2.5
              text-[16px] font-semibold
              text-black
              transition
              hover:bg-[#a9e600]
            "
          >
            <Check size={19} strokeWidth={2.5} />
            Mark as Done
          </button>

          {/* Close */}
          <button
            className="
              ml-2
              flex h-10 w-10
              items-center justify-center
              rounded-full
              text-[#d5d8dc]
              transition
              hover:bg-[#292d34]
            "
          >
          </button>

        </div>
      </div>
    </div>
    );
};

export default SaveCard;