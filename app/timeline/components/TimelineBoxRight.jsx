import { motion } from "framer-motion";

const TimelineBoxRight = ({
  classnameWrapper,
  classnameBox,
  classnameline,
  classnameDot,
  date,
  title,
  description,
}) => {
  return (
    <div className={classnameWrapper}>
      <motion.div
        initial={{ opacity: 1, height: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, height: "100%" }}
        viewport={{ once: true }}
        className={classnameline}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={classnameDot}
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={classnameBox}
      >
        <p>{date}</p>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </motion.div>
    </div>
  );
};
export default TimelineBoxRight;
