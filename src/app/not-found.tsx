
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <p className="text-8xl font-bold text-[#C2F800]">404</p>

        <h1 className="mt-6 text-3xl font-bold">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-gray-400">
          The page or workout you are looking for doesn&apos;t exist or may
          have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#a9e600]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

