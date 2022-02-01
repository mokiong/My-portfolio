import { Text, ChakraProps, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { WithChildren } from '../types';

type SkillTextProps = WithChildren<{
    top: number;
    left: number;
    initialLeftValues: Array<number>;
    scaleValues: Array<number>;
}> &
    ChakraProps;

type CalculatePointsParams = {
    initialLeftValues: Array<number>;
};

const MotionText = motion(Text);

const calculatePoints = ({ initialLeftValues }: CalculatePointsParams) => {
    let counter = 0;
    let distanceBetweenPoints = 0;

    const pointDistance = 5;

    const pointValues: Array<number> = [];

    while (counter < initialLeftValues.length) {
        distanceBetweenPoints = Math.abs(
            Math.trunc(
                (initialLeftValues[counter] - initialLeftValues[counter + 1]) /
                    pointDistance
            )
        );

        let initialLeft = initialLeftValues[counter];

        pointValues.push(initialLeftValues[counter]);

        while (distanceBetweenPoints > 0) {
            // If left value is greater than previous left value
            if (
                initialLeftValues[counter] < initialLeftValues[counter + 1] &&
                initialLeft + pointDistance < initialLeftValues[counter + 1]
            ) {
                initialLeft += pointDistance;
                pointValues.push(initialLeft);
            }
            // If left value is less than previous left value
            if (
                initialLeftValues[counter] > initialLeftValues[counter + 1] &&
                initialLeft - pointDistance > initialLeftValues[counter + 1]
            ) {
                initialLeft -= pointDistance;
                pointValues.push(initialLeft);
            }

            --distanceBetweenPoints;
        }

        ++counter;
    }
    // Add % to array values
    return pointValues.map((point) => `${point}%`);
};

const SkillText = ({
    top,
    left,
    initialLeftValues,
    scaleValues,
    children,
}: SkillTextProps) => {
    let leftPoints: Array<string> = [];
    leftPoints = calculatePoints({
        initialLeftValues: initialLeftValues,
    });

    return (
        <MotionText
            textTransform="uppercase"
            fontWeight="bold"
            position="absolute"
            fontSize="2.5rem"
            color="brand.primary"
            top={`${top}%`}
            left={`${left}%`}
            animate={{
                left: leftPoints,
                scale: scaleValues,
                transition: {
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear',
                },
            }}
        >
            {children}
        </MotionText>
    );
};

export const SkillGlobe = () => {
    return (
        <Flex position="relative" height="60rem" width="100%">
            <SkillText
                top={50}
                left={10}
                initialLeftValues={[10, 50, 80, 50, 10]}
                scaleValues={[1, 1.5, 1, 0.5, 1]}
            >
                javascript
            </SkillText>
            <SkillText
                top={40}
                left={0}
                initialLeftValues={[0, 50, 90, 50, 0]}
                scaleValues={[1, 1.5, 1, 0.5, 1]}
            >
                java
            </SkillText>
            <SkillText
                top={80}
                left={15}
                initialLeftValues={[15, 50, 80, 50, 15]}
                scaleValues={[1, 1.5, 1, 0.5, 1]}
            >
                grapqhl
            </SkillText>
            <SkillText
                top={0}
                left={45}
                initialLeftValues={[45, 60, 45, 30, 45]}
                scaleValues={[1.5, 1, 0.5, 1, 1.5]}
            >
                rest
            </SkillText>
            <SkillText
                top={50}
                left={45}
                initialLeftValues={[45, 80, 45, 0, 45]}
                scaleValues={[1.5, 1, 0.5, 1, 1.5]}
            >
                bootstrap
            </SkillText>
            <SkillText
                top={95}
                left={50}
                initialLeftValues={[50, 65, 50, 30, 50]}
                scaleValues={[1.5, 1, 0.5, 1, 1.5]}
            >
                sass
            </SkillText>
            <SkillText
                top={20}
                left={90}
                initialLeftValues={[90, 50, 2, 50, 90]}
                scaleValues={[1, 0.5, 1, 1.5, 1]}
            >
                css
            </SkillText>

            <SkillText
                top={50}
                left={95}
                initialLeftValues={[90, 50, 0, 50, 90]}
                scaleValues={[1, 0.5, 1, 1.5, 1]}
            >
                html
            </SkillText>
            <SkillText
                top={80}
                left={80}
                initialLeftValues={[80, 50, 5, 50, 80]}
                scaleValues={[1, 0.5, 1, 1.5, 1]}
            >
                typescript
            </SkillText>
            <SkillText
                top={20}
                left={30}
                initialLeftValues={[30, 10, 25, 50, 80, 50, 30]}
                scaleValues={[0.5, 1, 1.5, 1, 0.5]}
            >
                c++
            </SkillText>
            <SkillText
                top={25}
                left={45}
                initialLeftValues={[45, 5, 50, 85, 45]}
                scaleValues={[0.5, 1, 1.5, 1, 0.5]}
            >
                python
            </SkillText>
            <SkillText
                top={70}
                left={55}
                initialLeftValues={[55, 5, 50, 80, 55]}
                scaleValues={[0.5, 1, 1.5, 1, 0.5]}
            >
                mongodb
            </SkillText>
            <SkillText
                top={8}
                left={80}
                initialLeftValues={[80, 50, 10, 50, 80]}
                scaleValues={[0.5, 1, 1.5, 1, 0.5]}
            >
                sql
            </SkillText>
        </Flex>
    );
};
