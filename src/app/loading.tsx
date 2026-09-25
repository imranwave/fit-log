
const loading = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        {" "}
        <div className="flex flex-col items-center gap-5">
          {" "}
          {/* Spinner */}{" "}
          <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>{" "}
          <p className="text-lg font-semibold text-gray-300">
            {" "}
            Loading workouts...{" "}
          </p>{" "}
        </div>{" "}
      </main>
    </div>
  );
};

export default loading;
