"use client";

import { ReactNode } from "react";

import Header from "@/components/Header";
import TradingDialog from "@/components/TradingDialog";
import TradingResult from "@/components/TradingResult";

const BodyProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[500px] mx-auto">
      <Header className="max-w-[500px] mx-auto" />
      <div className="pt-[50px]">{children}</div>
      <TradingDialog />
      <TradingResult />
    </div>
  );
};

export default BodyProvider;
