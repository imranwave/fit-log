import Banner from "@/components/Banner";
import FitLibrary from "@/components/FitLibrary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Banner></Banner>
      <FitLibrary></FitLibrary>
    </div>
  );
}
