import { SkeletonText, Box } from '@chakra-ui/react';

const SkeletonDisplay = () => {
    return (
        <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonText mt="4" noOfLines={8} spacing="4" />
        </Box>
    )
}

export default SkeletonDisplay;