import React from "react";
import "./Registration.css";
import AccessForm from "../../components/AccessForm";
import { motion } from "framer-motion";

function Registration() {
  return (
    <motion.div
      animate={{ scale: 1 }}
      transition={{ type: "tween", duration: "2" }}
      className="form-container"
    >
      <AccessForm />
    </motion.div>
  );
}

export default Registration;
