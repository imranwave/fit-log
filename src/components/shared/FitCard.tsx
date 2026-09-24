// import { FitType } from "@/type/FitType"

// export interface FitCardProps {
//     fit: FitType
// }

// export default function FitCard({ fit }: FitCardProps) {
    
//     return 
// }


import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { FitType } from "@/type/FitType";

const FitCard = ({ fit }: { fit: FitType }) => {
  return (
    <Link href={`/fitness/${fit.id}`}>
      <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#191c22] text-white shadow-lg transition hover:border-lime-400">
        {/* Image */}
        <div className="h-[190px] w-full overflow-hidden">
          <Image
            src={fit.image}
            alt={fit.name}
            height={400}
            width={400}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {fit.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="mb-2 text-lg font-extrabold uppercase tracking-wide text-white">
            {fit.name}
          </h2>

          {/* Equipment */}
          <p className="mb-4 text-sm text-gray-400">
            {fit.equipment}
          </p>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock3
                size={16}
                strokeWidth={2}
                className="text-[#c6ff00]"
              />
              <span>{fit.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame
                size={16}
                strokeWidth={2}
                className="text-[#c6ff00]"
              />
              <span>{fit.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star
                size={16}
                strokeWidth={2}
                className="fill-[#c6ff00] text-[#c6ff00]"
              />
              <span>{fit.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FitCard;

