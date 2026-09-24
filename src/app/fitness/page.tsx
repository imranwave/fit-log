import { FitType } from "@/type/FitType";
import FitCard from "./shared/FitCard";

const getFitPromise=async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data=await res.json();
    return data
}
const FitLibrary = async() => {
    const fitdata=await getFitPromise();
    return (
        <div className='container mx-auto py-5 space-y-2'>
            <h1 className='text-3xl font-semibold '>The Library</h1>
            <p className='text-gray-300'>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-3">
               {fitdata.map((fit:FitType)=><FitCard key={fit.id} fit={fit}></FitCard>)}
            </div>
        </div>

    );
};

export default FitLibrary;