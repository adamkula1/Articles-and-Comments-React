import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >

        <p>WORK PAGE</p>
      </motion.div>
    </>
  );
};

export default Work;
