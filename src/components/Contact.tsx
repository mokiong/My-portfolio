import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { FONT_SIZE } from '../constants';
import { Link } from './Link';

type AccountDetailsProps = {
    url: string;
    socialMediaPlatform: string;
};

const AccountDetails = ({ url, socialMediaPlatform }: AccountDetailsProps) => {
    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            textTransform="uppercase"
            fontFamily="heading"
            fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
        >
            {socialMediaPlatform}: &nbsp;
            <Link
                _hover={{
                    color: 'brand.primary',
                }}
                isExternal
                fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
                textTransform="none"
                to={url}
            >
                {url}
            </Link>
        </Flex>
    );
};

export const Contact = () => {
    return (
        <Flex id="contact" gridRowGap="2rem" direction="column" padding="1rem">
            <Heading
                marginBottom={{ base: '0px', md: '2rem', lg: '4rem' }}
                as="h2"
                fontFamily="heading"
                fontSize={FONT_SIZE.textDescription}
            >
                Feel free to message me on my following social media accounts:
            </Heading>
            <AccountDetails
                socialMediaPlatform="facebook"
                url="https://www.facebook.com/mokiongggg/"
            />
            <AccountDetails
                socialMediaPlatform="twitter"
                url="https://twitter.com/mokiong"
            />
            <Text
                marginTop="4rem"
                alignSelf="center"
                fontFamily="heading"
                fontSize="2rem"
                textAlign={{ base: 'center', lg: 'start' }}
            >
                You can also send me an email on&nbsp;
                <chakra.span color="brand.primary">
                    michael.sevillaong@gmail.com
                </chakra.span>
            </Text>
        </Flex>
    );
};
