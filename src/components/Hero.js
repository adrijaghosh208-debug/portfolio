import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <motion.section id="home"className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm <span>Adrija</span></h1>
      <p>Frontend Developer | React Enthusiast</p>
      <button>View My Work</button>
    </motion.section>
  );
}

export default Hero;