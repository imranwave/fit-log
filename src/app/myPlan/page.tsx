"use client";
import PlanCard from "@/components/card/PlanCard";
import SaveCard from "@/components/card/SaveCard";
import FitCard from "@/components/shared/FitCard";
import { FitContext } from "@/context/FitContext";
import { FitType } from "@/type/FitType";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { plan, save } = useContext(FitContext);

  // const totalExercises = plan.length;

  // const totalMinutes = plan.reduce(
  //   (total, workout) => total + workout.duration,
  //   0
  // );

  // const totalCalories = plan.reduce(
  //   (total, workout) => total + workout.caloriesBurned,
  //   0
  // );

  // plan
  const totalPlanExercises = plan.length;
  const totalPlanMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalPlanCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  // save
  const totalSaveExercises = save.length;
  const totalSaveMinutes = save.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalSaveCalories = save.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto">
      <section className="min-h-screen  px-6 py-7 text-white">
        {/* Header */}
        <div className="mb-11">
          <h1 className="text-[48px] leading-none font-bold ">MY PLAN</h1>

          <p className="mt-4 text-[20px] text-[#a9adb5]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card */}
        <div className="w-full overflow-hidden rounded-[20px] border border-[#292d34] bg-[#191c22]">
          <div className="grid grid-cols-3">
            {/* Exercises */}
            <div className="px-8 py-6">
              <p className="mb-2 text-[16px] text-[#9da2ad]">Exercises</p>

              <h2 className="text-[42px] font-bold leading-none text-[#b6ff00]">
                {totalPlanExercises}
              </h2>
            </div>

            {/* Minutes */}
            <div className="border-l border-dashed border-[#343840] px-8 py-6">
              <p className="mb-2 text-[16px] text-[#9da2ad]">Minutes</p>

              <h2 className="text-[42px] font-bold leading-none text-white">
                {totalPlanMinutes}
              </h2>
            </div>

            {/* Calories */}
            <div className="border-l border-dashed border-[#343840] px-8 py-6">
              <p className="mb-2 text-[16px] text-[#9da2ad]">Calories</p>

              <h2 className="text-[42px] font-bold leading-none text-white">
                {totalPlanCalories}
              </h2>
            </div>
          </div>
        </div>
        {/* tab */}

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-8">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {plan.length > 0 ? (
              plan.map((singlePlan: FitType) => {
                return <PlanCard key={singlePlan.id} singlePlan={singlePlan} />;
              })
            ) : (
              <div className="w-full rounded-[20px] border border-[#292d34] bg-[#191c22] px-5 py-[56px] text-center">
                {/* Title */}
                <h2 className="text-[24px] font-semibold uppercase leading-none text-white">
                  NOTHING HERE YET
                </h2>

                {/* Description */}
                <p className="mt-5 text-[20px] leading-[1.4] text-[#aeb3bd]">
                  Browse the library and add a lift to get today moving.
                </p>

                {/* Button */}
                <button className=" mt-8 rounded-full bg-[#baff00] px-[23px] py-[14px] text-[17px] font-semibold text-black transition hover:[#a9e600]">
                  Go to workouts
                </button>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />
          {/* 2 */}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            
            {save.length > 0 ? (
              save.map((singleSave: FitType) => {
                return <SaveCard key={singleSave.id} singleSave={singleSave} />;
              })
            ) : (
              <div className="w-full rounded-[20px] border border-[#292d34] bg-[#191c22] px-5 py-[56px] text-center">
                {/* Title */}
                <h2 className="text-[24px] font-semibold uppercase leading-none text-white">
                  NOTHING HERE YET
                </h2>

                {/* Description */}
                <p className="mt-5 text-[20px] leading-[1.4] text-[#aeb3bd]">
                  Browse the library and add a lift to get today moving.
                </p>

                {/* Button */}
                <button className=" mt-8 rounded-full bg-[#baff00] px-[23px] py-[14px] text-[17px] font-semibold text-black transition hover:[#a9e600]">
                  Go to workouts
                </button>
                
              </div>
            )}
          </div>
          {/* 2end */}
        </div>
        {/* tabend */}
      </section>
    </div>
  );
};

export default MyPlanPage;
