import { motion } from "framer-motion";

const CustomCursor = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Custom Cursor
      </motion.h2>
    </section>
  );
};

export default CustomCursor;
