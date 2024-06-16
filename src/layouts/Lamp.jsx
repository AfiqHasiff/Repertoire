import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp-effect";

export const LampComponent = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div id="repertoireMainDefinitionWrapper" className="flex flex-col items-center">
          <span>Repertoire</span>
          <span className="text-base">/ˈrɛpətwɑː/</span>
        </div>
        <div id="repertoireDefinitionWrapper" className="flex flex-col mt-3 text-base items-center">
          <span>a stock of plays, dances, or items that a company or a performer knows or is prepared to perform.</span>
          <div id="repertoireSimliarDefinitionWrapper" className="flex">
            <span className="text-lime-400">Similar:&nbsp;&nbsp;</span>
            <span>collection, stock, range, repertory, reserver, store, repository</span>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
};
