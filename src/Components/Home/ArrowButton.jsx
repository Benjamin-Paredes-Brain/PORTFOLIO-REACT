import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const ArrowButton = () => {
  const [down, setDown] = useState(false)

  const hanldeDown = () => {
    setDown(true);

    const skillRef = document.getElementById("skills")
    if (skillRef) {
      const offset = 16;
      const targetPosition = skillRef.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        duration: 2000
      });
    }
  };

  return (
    <div className="arrow_container">
      <motion.div className="arrow" onClick={hanldeDown}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div className="arrow_circle"
          initial={{ scale: 0, borderColor: "transparent" }}
          animate={{ scale: 1, borderColor: "rgb(73, 7, 73)"}}
          transition={{ duration: 1 }}
        >
          <FontAwesomeIcon icon={faArrowDown} className="arrow_btn"/>
        </motion.div>
      </motion.div>

    </div>
  );
};
