'use client'

import { FitContext } from "@/context/FitContext";
import { FitType } from "@/type/FitType";
import { SavePlus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({fitbox}:{fitbox:FitType}) => {
    const {plan,setPlan}=useContext(FitContext);
    const handlePlaneButton=()=>{
        const alreadyAdded = plan.some( (singlePlan) => singlePlan.id === fitbox.id );
        if (alreadyAdded) { toast.warning(`${fitbox.name} is already added!`); return; }
        // console.log("teiggerd",fitbox);
        setPlan([...plan,fitbox])
        toast.success(`your have read ${fitbox.name}`)
    }
    return  <button className="flex items-center gap-1 rounded-full border  px-5 py-3 text-xs font-medium text-black bg-[#C2F800] cursor-pointer" onClick={()=>handlePlaneButton()}><SavePlus />Add to Today Plan</button>
};

export default PlanButton;