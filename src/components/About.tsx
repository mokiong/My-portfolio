import {
    Flex,
    Text,
    Heading,
    SimpleGrid,
    GridItem,
    Box,
} from '@chakra-ui/react';
import { FONT_SIZE } from '../constants';
import { SkillGlobe } from './SkillGlobe';

export const About = () => {
    return (
        <SimpleGrid
            id="about"
            columns={{ base: 1, lg: 3 }}
            alignItems="center"
            height={{ base: 'min-content', lg: '100vh' }}
            gridColumnGap="2rem"
            gridRowGap="5rem"
        >
            <GridItem
                colSpan={1}
                justifyContent="center"
                direction="column"
                marginTop={{ base: '0px', lg: '25rem' }}
                gridRowGap="2rem"
            >
                <Heading as="h1" fontSize={FONT_SIZE.heading}>
                    About
                </Heading>
                <Text padding="1rem" fontSize={FONT_SIZE.textDescription}>
                    Hi! I&apos;m Michael Ong from Rizal, Philippines. I&apos;m
                    fond of creating designs and pushing my brain to the limits
                </Text>
            </GridItem>
            <GridItem
                padding={{ base: '0px', md: '2rem' }}
                colSpan={2}
                overflow="hidden"
            >
                <SkillGlobe />
            </GridItem>
        </SimpleGrid>
    );
};
