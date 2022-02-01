import type { NextPage } from 'next';
import { About } from '../components/About';
import { Container } from '../components/Container';
import { SkillGlobe } from '../components/SkillGlobe';
import { Welcome } from '../components/Welcome';

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
        <Container backgroundColor="brand.tertiary-light">
            <Welcome />
            <About />
        </Container>
    );
};

export default Home;
