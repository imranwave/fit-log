
import Image from "next/image";
import footerlogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D24] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div className="flex items-center gap-2">
            <Image
              src={footerlogo}
              alt="Fit-log logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />

            <span className="text-lg font-bold text-white sm:text-xl">
              Fit-log
            </span>
          </div>

          
          <p className="text-sm text-gray-400 sm:text-base">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


