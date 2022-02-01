import { chakra, ChakraProps } from '@chakra-ui/system';
import NextLink from 'next/link';

import { WithChildren } from '../types';

type LinkProps = WithChildren<{
    to: string;
    isExternal?: boolean;
    onClick?: () => void;
}> &
    ChakraProps;

export const Link = ({
    to,
    isExternal,
    onClick,
    children,
    ...chakraProps
}: LinkProps) => {
    if (isExternal) {
        return (
            <chakra.a
                onClick={onClick}
                href={to}
                target="_blank"
                {...chakraProps}
            >
                {children}
            </chakra.a>
        );
    }

    return (
        <NextLink href={to} passHref>
            <chakra.a onClick={onClick} {...chakraProps}>
                {children}
            </chakra.a>
        </NextLink>
    );
};
