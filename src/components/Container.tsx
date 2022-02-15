import { Box, ChakraProps } from '@chakra-ui/react';
import { WithChildren } from '../types';

type ContainerProps = WithChildren<{
    isFullWidth?: boolean;
}> &
    ChakraProps;

export const Container = ({
    isFullWidth,
    children,
    ...props
}: ContainerProps) => {
    return (
        <Box {...props}>
            <Box marginX="auto" maxWidth={isFullWidth ? 'none' : '1400px'}>
                {children}
            </Box>
        </Box>
    );
};
