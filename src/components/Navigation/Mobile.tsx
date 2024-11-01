import { FunctionComponent } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Button from "components/HTML/Button";
import ResumeFile from "assets/files/CVNT_Soham_Ghosh.pdf";
import { headerLinks } from "constants/data";
import { Link } from "react-scroll";

type MobileProps = {
  isOpen: boolean;
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
  },
};

const Mobile: FunctionComponent<MobileProps> = ({ isOpen }) => {
  const downloadResume = () => {
    window.open(ResumeFile);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          aria-hidden="false"
          className="mobile-menu"
        >
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  duration: 0.7,
                  delayChildren: 0.8,
                  staggerChildren: 0.15,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className="mobile-nav"
          >
            <ol className="w-full flex flex-col items-center justify-between text-center">
              {headerLinks.map((item) => {
                return (
                  <motion.li
                    variants={itemVariants}
                    key={item.id}
                    className="flex flex-col items-center mx-auto mt-0 mb-5"
                  >
                    <strong className="block mb-1 text-green regular-14">
                      {item.label}
                    </strong>
                    <Link
                      to={item.link}
                      smooth={true}
                      className="inline-block relative p-2 cursor-pointer hover:text-green"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                );
              })}
            </ol>
            <Button className="resume-mobile" onClick={downloadResume}>
              Resume
            </Button>
          </motion.ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Mobile;
