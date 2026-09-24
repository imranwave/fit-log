'use client'

import { FitContext } from "@/context/FitContext";
import { FitType } from "@/type/FitType";
import { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({fitbox}:{fitbox:FitType}) => {
    const {save,setSave}=useContext(FitContext);
    console.log('fitPRover=>',save);
    const handleSaveButton=()=>{
         const alreadyAdded = save.some( (singlePlan) => singlePlan.id === fitbox.id );
        if (alreadyAdded) { toast.warning(`${fitbox.name} is already added!`); return; }
        // console.log("teiggerd",fitbox);
        setSave([...save,fitbox])
        toast.success(`your have save ${fitbox.name}`)
    }
    return  <button className="flex items-center gap-1 rounded-full border  px-5 py-3 text-xs font-medium text-black bg-[#C2F800]" onClick={()=>handleSaveButton()}>Save</button>
};

export default PlanButton;