import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    transition,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const containerVariant = {
    hidden: {
        transition: {
            when: 'afterChildren',
        },
    },
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.4,
            staggerDirection: 1,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0, translateY: '-400%' },
    visible: {
        transition: {
            type: 'spring',
            damping: 12,
            mass: 0.8,
            stiffness: 200,
        },
        opacity: 1,
        translateY: '0%',
    },
};

const descriptionVariant = {
    hidden: { opacity: 0 },
    visible: {
        transition: { delay: 3.8 },
        opacity: 1,
    },
};

const WELCOME_TEXT = 'Welcome!';

export const Welcome = () => {
    return (
        <SimpleGrid height="100vh" columns={2}>
            <Flex justifyContent="center" direction="column">
                <MotionFlex
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {WELCOME_TEXT.split('').map((character, index) => (
                        <MotionText
                            variants={letterVariant}
                            fontFamily="heading"
                            key={index}
                            fontSize="10rem"
                        >
                            {character}
                        </MotionText>
                    ))}
                </MotionFlex>
                <MotionText
                    variants={descriptionVariant}
                    initial="hidden"
                    animate="visible"
                    fontFamily="heading"
                    fontSize="5rem"
                >
                    Feel free to explore!
                </MotionText>
            </Flex>
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gridRowGap="3rem"
            >
                <Box width="80%">
                    <NextImage
                        layout="responsive"
                        height={500}
                        width={500}
                        src="/images/simmer_studios.png"
                        alt="simmer studios logo"
                    />
                </Box>
                <Text fontFamily="heading" fontSize="3rem">
                    Latest project
                </Text>
            </Flex>
        </SimpleGrid>
    );
};
