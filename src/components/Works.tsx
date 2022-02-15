import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Link } from './Link';

type WorkProps = {
    name: string;
    websiteUrl?: string;
    description: string;
    projectType: string;
    imageUrl: string;
    altText: string;
};

const Work = ({
    name,
    description,
    projectType,
    websiteUrl,
    imageUrl,
    altText,
}: WorkProps) => {
    return (
        <Box
            style={{ perspective: '600rem', WebkitPerspective: '600rem' }}
            id="works"
            width="100%"
            height={{ base: '35rem', md: '50rem' }}
            position="relative"
            role="group"
        >
            <Box
                backgroundColor="black"
                position="absolute"
                top={0}
                left={0}
                height="100%"
                width="100%"
                style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                }}
                transition="all 0.5s ease"
                overflow="hidden"
                fontSize="5rem"
                textAlign="center"
                _groupHover={{
                    transform: 'rotateY(180deg)',
                    WebkitTransform: 'rotateY(180deg)',
                }}
            >
                <NextImage
                    src={imageUrl}
                    quality={100}
                    layout="fill"
                    alt={altText}
                />
            </Box>
            <Flex
                direction="column"
                gridRowGap="3rem"
                padding="2rem"
                backgroundColor="brand.tertiary"
                position="absolute"
                top={0}
                left={0}
                height="100%"
                width="100%"
                style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                }}
                transition="all 0.5s ease"
                overflow="hidden"
                textAlign="center"
                transform="rotateY(180deg)"
                _groupHover={{
                    transform: 'rotateY(0)',
                    WebkitTransform: 'rotateY(0)',
                }}
            >
                <Text fontSize={{ base: '3rem', md: '5rem' }}>{name}</Text>
                <Text fontSize={{ base: '1.5rem', md: '2rem' }}>
                    {description}
                </Text>
                <Box fontSize={{ base: '1.5rem', md: '2rem' }} textAlign="left">
                    <Text>Project type: {projectType}</Text>
                    {websiteUrl ? (
                        <Text>
                            For more info visit &nbsp;
                            <Link isExternal to={websiteUrl}>
                                {websiteUrl}
                            </Link>
                        </Text>
                    ) : null}
                </Box>
            </Flex>
        </Box>
    );
};

export const Works = () => {
    return (
        <SimpleGrid
            id="works"
            gap={{ base: '1rem', md: '2rem', lg: '4rem' }}
            columns={{ base: 1, lg: 2 }}
            padding={{ base: '0px', md: '1rem' }}
            paddingY={{ base: '0px', lg: '20rem' }}
        >
            <Work
                name="Simmer Studios"
                websiteUrl="https://www.simmer-studios.com/"
                description="Simmer studios is a design and branding firm based in Manila, established by young and bright-minded individuals aiming to harness innovation through creativity."
                imageUrl="/images/simmer_studios.png"
                altText="simmer studios"
                projectType="Client Based"
            />
            <Work
                name="Cornhub"
                description="An e-commerce website for corn related products"
                imageUrl="/images/cornhub-logo.png"
                altText="cornhub"
                projectType="Personal Project"
            />
            <Work
                name="Bank of Florida Map"
                websiteUrl="https://bank-of-florida-map.vercel.app/"
                description="A code snippet for the interactive map on bank of florida"
                imageUrl="/images/bof_map.png"
                altText="Bank of Florida Map"
                projectType="Client Based"
            />
            <Work
                name="Next Blog"
                websiteUrl="https://next-blog-five-ashy.vercel.app/"
                description="A whole web app tutorial for using next.js"
                imageUrl="/images/getting-started-nextjs.png"
                altText="Next Blog"
                projectType="Tutorial"
            />
            <Work
                name="Nexter"
                websiteUrl="https://nexter-kohl.vercel.app/"
                description="Find your luxury home here. An advanced css course"
                imageUrl="/images/nexter.png"
                altText="Nexter"
                projectType="Tutorial"
            />
            <Work
                name="Natours"
                websiteUrl="https://natours-omega-nine.vercel.app/"
                description="Explore and find a nature tour suitable for you. An advanced css course"
                imageUrl="/images/natours.png"
                altText="Natours"
                projectType="Tutorial"
            />
            <Work
                name="Trillo"
                websiteUrl="https://trillo-inky.vercel.app/"
                description="Find the best hotels in town. An advanced css course"
                imageUrl="/images/trillo.png"
                altText="Trillo"
                projectType="Tutorial"
            />
        </SimpleGrid>
    );
};
