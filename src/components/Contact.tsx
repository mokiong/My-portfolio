import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { Link } from './Link';

type AccountDetailsProps = {
    url: string;
    socialMediaPlatform: string;
};

const AccountDetails = ({ url, socialMediaPlatform }: AccountDetailsProps) => {
    return (
        <Flex>
            <Box textTransform="uppercase" fontFamily="heading" fontSize="4rem">
                {socialMediaPlatform}: &nbsp;
                <Link
                    _hover={{
                        color: 'brand.primary',
                    }}
                    isExternal
                    fontSize="3rem"
                    textTransform="none"
                    to={url}
                >
                    {url}
                </Link>
            </Box>
        </Flex>
    );
};

export const Contact = () => {
    return (
        <Flex id="contact" gridRowGap="2rem" direction="column" padding="1rem">
            <Heading
                marginBottom="4rem"
                as="h2"
                fontFamily="heading"
                fontSize="5rem"
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
            >
                You can also send me an email on&nbsp;
                <chakra.span color="brand.primary">
                    michael.sevillaong@gmail.com
                </chakra.span>
            </Text>
        </Flex>
    );
};
