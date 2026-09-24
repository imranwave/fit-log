// const fitDetailsPage = async({}) => {
//     return (
//         <div>
//             <h1>Fit Details Page</h1>
//         </div>
//     );
// };

// export default fitDetailsPage;

import PlanBUtton from "@/components/fitDetails/PlanBUtton";
import { Bookmark, Plus, SavePlus } from "lucide-react";
import Image from "next/image";

interface IfitProps {
  params: {
    id: string;
  };
}

const getFitLibrary = async (id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const data = await res.json();

  return data;
};

const FitDetails = async ({ params }: IfitProps) => {
  const { id } = await params;

  //   const fitness = await getFitLibrary();

  //   const fitbox = fitness.find(
  //     (fit: WorkerType) => fit.id === Number(id)
  //   );
  const fitbox = await getFitLibrary(id);
  return (
    <div className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white container mx-auto">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
        {/* ================= IMAGE ================= */}

        <div className="relative h-[520px] overflow-hidden rounded-lg">
          <Image
            src={fitbox.image}
            alt={fitbox.name}
            fill
            className="object-cover"
          />
        </div>

        {/* ================= DETAILS ================= */}

        <div className="flex flex-col">
          {/* NAME */}

          <h1 className="text-2xl font-extrabold uppercase tracking-wide">
            {fitbox.name}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-2 max-w-2xl text-sm leading-5 text-gray-400">
            {fitbox.description}
          </p>

          {/* MUSCLE GROUPS */}

          <div className="mt-3 flex flex-wrap gap-2">
            {fitbox.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= INFO TABLE ================= */}

          <div className="mt-5 overflow-hidden rounded-lg border border-gray-700 bg-[#191c22]">
            {/* EQUIPMENT */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">EQUIPMENT</span>

              <span className="text-gray-200">{fitbox.equipment}</span>
            </div>

            {/* DIFFICULTY */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">DIFFICULTY</span>

              <span className="text-gray-200">{fitbox.difficulty}</span>
            </div>

            {/* SETS */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">SETS</span>

              <span className="text-gray-200">{fitbox.sets}</span>
            </div>

            {/* REPS */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">REPS</span>

              <span className="text-gray-200">{fitbox.reps}</span>
            </div>

            {/* DURATION */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">DURATION</span>

              <span className="text-gray-200">{fitbox.duration} min</span>
            </div>

            {/* CALORIES */}

            <div className="grid grid-cols-[110px_1fr] border-b border-gray-700 px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">CALORIES</span>

              <span className="text-gray-200">
                {fitbox.caloriesBurned} kcal
              </span>
            </div>

            {/* RATING */}

            <div className="grid grid-cols-[110px_1fr] px-3 py-2 text-xs">
              <span className="font-bold text-gray-400">RATING</span>

              <span className="text-gray-200">★ {fitbox.rating}</span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}

          <div className="mt-5">
            <h2 className="mb-2 text-base font-extrabold uppercase">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-1 text-xs leading-4 text-gray-300">
              {fitbox.instructions.map((instruction: string, index: number) => (
                <li key={index}>
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="mt-5 flex gap-2">
            {/* Add Button */}

            {/* <PlanBUtton></PlanBUtton> */}

            <button className="flex items-center gap-1 rounded-full border  px-5 py-3 text-xs font-medium text-black bg-[#C2F800]">
              <SavePlus size={13} />
              Add to Today Plan
            </button>
            {/* Save Button */}

            <button className="flex items-center gap-1 rounded-full border border-gray-500 px-8 py-3 text-xs font-medium text-white transition hover:bg-gray-800">
              <Bookmark size={13} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitDetails;
