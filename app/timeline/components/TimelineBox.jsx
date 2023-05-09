"use client";
import { motion } from "framer-motion";

const TimelineBox = ({
  classnameWrapper,
  classnameBox,
  classnameline,
  classnameDot,
  date,
  title,
  description,
  projects,
  left,
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
        initial={{ opacity: 0, x: left ? -100 : 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={classnameBox}
      >
        <p>{date}</p>
        <h1>{title}</h1>
        <h2>{description}</h2>
        {projects && (
          <div>
            {projects?.map((item) => {
              return (
                <p key={item.link}>
                  <a target="blank" href={item.link}>
                    {item.title}
                  </a>
                </p>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default TimelineBox;
