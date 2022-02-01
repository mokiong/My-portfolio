import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

type WorkProps = {
    imageUrl: string;
    altText: string;
};

const Work = ({ imageUrl, altText }: WorkProps) => {
    return (
        <Flex
            id="works"
            backgroundColor="black"
            gridRowGap="2rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box height="100%" width="100%">
                <NextImage
                    layout="responsive"
                    height={600}
                    width={800}
                    objectFit="cover"
                    src={imageUrl}
                    alt={altText}
                />
            </Box>
        </Flex>
    );
};

export const Works = () => {
    return (
        <SimpleGrid
            id="works"
            gap="4rem"
            columns={2}
            padding="1rem"
            paddingY="20rem"
        >
            <Work
                imageUrl="/images/simmer_studios.png"
                altText="simmer studios"
            />
            <Work imageUrl="/images/cornhub-logo.png" altText="cornhub" />
        </SimpleGrid>
    );
};
