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