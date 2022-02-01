import { Flex, Text, Heading } from '@chakra-ui/react';
import { FONT_SIZE } from '../constants';
import { SkillGlobe } from './SkillGlobe';

export const About = () => {
    return (
        <Flex padding="2rem" gridColumnGap="2rem">
            <Flex
                justifyContent="center"
                width="40%"
                flexGrow={1}
                direction="column"
                marginTop="6rem"
                gridRowGap="2rem"
            >
                <Heading as="h1" fontSize={FONT_SIZE.heading}>
                    About
                </Heading>
                <Text padding="1rem" fontSize={FONT_SIZE.textDescription}>
                    Hi! I&apos;m Michael Ong from Rizal, Philippines. I&apos;m
                    fond of creating designs and pushing my brain to the limits
                </Text>
            </Flex>
            <Flex width="60%" flexGrow={2}>
                <SkillGlobe />
            </Flex>
        </Flex>
    );
};
