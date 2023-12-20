import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ArrowButtonUp = () => {
  const [up, setUp] = useState(false)

  const hanldeUp = () => {
    setUp(true);

    const HomeRef = document.getElementById("home")
    if (HomeRef) {
      const offset = 16;
      const targetPosition = HomeRef.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        duration: 2000
      });
    }
  };

  return (
    <div className="arrow_container" style={{marginTop: "0", marginBottom: "3rem"}}>
      <motion.div className="arrow" onClick={hanldeUp}
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
          <FontAwesomeIcon icon={faArrowUp} className="arrow_btn"/>
        </motion.div>
      </motion.div>

    </div>
  );
};
