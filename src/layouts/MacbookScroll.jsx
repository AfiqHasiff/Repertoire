import React from "react";
import { MacbookScroll } from "../components/macbook-scroll";

export function MacbookScrollComponent() {
  return (
    <div className="overflow-hidden bg-slate-950">
      <MacbookScroll
        showGradient={false}
        lidDisplay={
          <div className="flex gap-3 justify-between p-3 w-full h-full">
            <span>Test 1</span>
            <span>Test 2</span>
            <span>Test 3</span>
          </div>
        }
      />
    </div>
  );
}
