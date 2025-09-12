import {motion} from 'framer-motion';
import {styles} from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
    function HOC() {
    return(
        <motion.section
                variants={staggerContainer()}
                id={idName}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`relative z-0 max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10`}>


                    <span className = "hash-span" id={idName}>
                        &nbsp;
                    </span>
            <Component />
        </motion.section>
    );
};

export default SectionWrapper;