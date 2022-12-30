import { motion } from "framer-motion";

const colors = ["teal"];

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const dotVariants = {
    initial: {},
    animate: {
        height: [40, 100, 40],
        transition: {
            repeat: Infinity
        }
    }
};

const Loader = ({ count = 5 }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            style={{
                display: "flex",
                gap: 16,
                height: 100,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {Array(count)
                .fill(null)
                .map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={dotVariants}
                            style={{
                                marginTop: 350,
                                height: 10,
                                width: 10,
                                backgroundColor: colors[index % colors.length],
                                borderRadius: 20
                            }}
                        />
                    );
                })}
        </motion.div>
    );
};

export default Loader;