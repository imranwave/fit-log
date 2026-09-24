
"use client";

import { createContext, ReactNode, useState } from "react";
import { FitType } from "@/type/FitType";

interface FitContextType {
  plan: FitType[];
  setPlan: React.Dispatch<React.SetStateAction<FitType[]>>;
  save: FitType[];
  setSave: React.Dispatch<React.SetStateAction<FitType[]>>;
}

export const FitContext = createContext<FitContextType>({
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});

const FitProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<FitType[]>([]);
  const [save, setSave] = useState<FitType[]>([]);

  const sharedFitData = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <FitContext.Provider value={sharedFitData}>
      {children}
    </FitContext.Provider>
  );
};

export default FitProvider;

