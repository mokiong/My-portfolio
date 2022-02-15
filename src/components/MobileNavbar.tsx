import { Box, Flex, HStack } from '@chakra-ui/react';
import { FONT_SIZE } from '../constants';
import { Link } from './Link';
import NextImage from 'next/image';
import { useState } from 'react';

const NameTag = () => {
    return (
        <Flex
            backgroundColor="white"
            fontSize="1.6rem"
            padding="1rem"
            width="10rem"
            height="min-content"
            color="brand.primary"
            border="2px"
            position="absolute"
            top="95%"
            right="30%"
            zIndex={3}
        >
            Hi I&apos;m Michael!
        </Flex>
    );
};

export const MobileNavbar = () => {
    const [showName, setShowName] = useState(false);

    return (
        <Flex
            height="7rem"
            width="100%"
            position="fixed"
            backgroundColor="brand.tertiary"
            display={{ base: 'flex', md: 'none' }}
            padding="1rem"
            justifyContent="space-between"
            zIndex={2}
        >
            <HStack spacing="1.5rem" fontSize={FONT_SIZE.textDescription}>
                <Link to="/#about">About</Link>
                <Link to="/#works">Works</Link>
                <Link to="/#contact">Contact</Link>
            </HStack>
            <Flex
                onClick={() => setShowName((previous) => !previous)}
                position="relative"
            >
                {showName ? <NameTag /> : null}
                <NextImage
                    src="/images/profileAvatar.png"
                    alt="avatar"
                    height={50}
                    width={50}
                />
            </Flex>
        </Flex>
    );
};
