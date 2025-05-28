import React from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const SectionBlock = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <Block ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {text}
      </motion.h2>
    </Block>
  );
};

export default SectionBlock;

const Block = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
