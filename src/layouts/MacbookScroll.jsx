import React from "react";
import { MacbookScroll } from "../components/macbook-scroll";

export function MacbookScrollComponent() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F]">
      <MacbookScroll
        // title={
        //   <span className="bg-[#FFFFFF]">
        //     This Macbook is built with Tailwindcss. <br /> No kidding.
        //   </span>
        // }
        src={`https://freight.cargo.site/w/2500/q/75/i/a9f227752a9ba3bc689092085a7e6eb87b787abd858c3e3f0aebdc6a40f138d0/Windows_Final_3840p_v10_opt.png`}
        showGradient={false}
      />
    </div>
  );
}
