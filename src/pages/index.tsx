import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Container } from '../components/Container';
import { SkillGlobe } from '../components/SkillGlobe';
import { Welcome } from '../components/Welcome';
import { Works } from '../components/Works';

const SKILLS = [
    'javascript',
    'java',
    'grapqhl',
    'rest',
    'react',
    'bootstrap',
    'sass',
    'css',
    'html',
    'typescript',
    //layer 2
    'c++',
    'python',
    'mongodb',
    'sql',
    'testSkill1',
    'testSkill2',
    'testSkill3',
    'testSkill4',
    'testSkill5',
];

const Home: NextPage = () => {
    return (
        <Container
            paddingTop={{ base: '7rem', md: '0px' }}
            paddingLeft={{ base: '0px', md: '25rem' }}
            backgroundColor="brand.tertiary-light"
        >
            <Flex
                direction="column"
                gridRowGap={{ base: '5rem', lg: '0px' }}
                padding="1rem"
            >
                <Welcome />
                <About />
                <Works />
                <Contact />
            </Flex>
        </Container>
    );
};

export default Home;
