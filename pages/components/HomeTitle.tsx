import {
    Text,
    Stack,
    useDisclosure,
  } from '@chakra-ui/react';

import Marquee from 'react-fast-marquee';
import { useWindowSize } from '@react-hook/window-size';

  
  export default function HomeTitle() {
    const { isOpen, onToggle } = useDisclosure();
    const [width, height] = useWindowSize()

    return (
      <Stack direction={'row'}  width={width}  >
      <Marquee loop={0} speed={150} gradient={false}>
          <Text fontSize={'8rem'}  className={'primaryFont'}> &nbsp; PocketSomm &nbsp;</Text>
          <Text fontSize={'8rem'}  className={'primaryFont'}>  &nbsp;PocketSomm &nbsp;</Text>
        </Marquee>
      
    </Stack>
    );
  };


//   import {
//     Text,
//     Stack,
//     useDisclosure,
//   } from '@chakra-ui/react';

// // import Marquee from 'react-fast-marquee';
// import { useWindowSize } from '@react-hook/window-size';
// import '../../styles/Home.module.css'
// import { motion } from "framer-motion";

// const marqueeVariants = {
//   animate: {
//     x: [0, -1035],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 5,
//         // ease: "linear",
//       },
//     },
//   },
// };

//   export default function HomeTitle() {
//     const { isOpen, onToggle } = useDisclosure();
//     const [width, height] = useWindowSize()

    

//     return (
//       <Stack direction={'row'}  width={width}  >
//       <Marquee />
//     </Stack>
//     );
//   };

//   const Marquee = () => {
//     return (
//       <div>
//         <div className="marquee">
//           {/* 3. Using framer motion */}
//           <motion.div
//             className="track"
//             variants={marqueeVariants}
//             animate="animate"
//           >
//             <h1>
//               Let's Work Together. Let's Work Together. Let's Work Together. Let's
//               Work Together. Let's Work Together. Let's Work Together. Let's Work
//               Together
//             </h1>
//           </motion.div>
//         </div>
//       </div>
//     );
//   };
