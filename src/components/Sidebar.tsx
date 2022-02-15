import { Text, Flex, Box, UnorderedList, ListItem } from '@chakra-ui/react';
import NextImage from 'next/image';
import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FONT_SIZE } from '../constants';
import { Link } from './Link';

const SocialMediaIcons = () => {
    return (
        <Flex gridColumnGap="2rem" justifyContent="center">
            <Link isExternal to="https://www.facebook.com/mokiongggg/">
                <BsFacebook size="2rem" />
            </Link>
            <Link isExternal to="https://twitter.com/mokiong">
                <BsTwitter size="2rem" />
            </Link>
            <Link isExternal to="https://github.com/mokiong/">
                <BsGithub size="2rem" />
            </Link>
        </Flex>
    );
};

export const Sidebar = () => {
    return (
        <Flex
            direction="column"
            position="fixed"
            width="25rem"
            backgroundColor="brand.tertiary"
            height="100vh"
            display={{ base: 'none', md: 'flex' }}
        >
            <Flex direction="column" padding="2rem">
                <Flex gridRowGap="2rem" direction="column" alignItems="center">
                    <NextImage
                        src="/images/profileAvatar.png"
                        alt="avatar"
                        height={150}
                        width={150}
                    />
                    <Text color="brand.plain" fontWeight="bold" fontSize="2rem">
                        Michael Ong
                    </Text>

                    <Box
                        width="100%"
                        borderBottom="2px"
                        borderColor="brand.primary"
                    ></Box>
                </Flex>
            </Flex>
            <Flex
                textAlign="center"
                direction="column"
                padding="2rem"
                height="100%"
                gridRowGap="8rem"
            >
                <UnorderedList
                    marginLeft="0px"
                    fontSize={FONT_SIZE.textDescription}
                    spacing="4rem"
                    styleType="none"
                >
                    <ListItem>
                        <Link to="/#about">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/#works">Works</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/#contact">Contact</Link>
                    </ListItem>
                </UnorderedList>

                <SocialMediaIcons />
            </Flex>
        </Flex>
    );
};
