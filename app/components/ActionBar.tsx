
'use client'

import { Box, Flex, Button, CloseButton } from '@chakra-ui/react'

export default function ActionBar() {  
    return (
        <Box
            position="fixed"
            minWidth="100%"
            
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            bg="black"
            color="white"
            px={6}
            py={3}
            borderRadius="lg"
            boxShadow="lg"
            zIndex={1000}
        >
            <Flex
                gap={4}
                align="center">
                <Button
                    size="sm"
                    colorScheme="whiteAlpha"
                    bg="white"
                    color="black">
                    Action 1
                </Button>
                <Button
                    size="sm"
                    colorScheme="whiteAlpha"
                    bg="white"
                    color="black">
                    Action 1
                </Button>
                <CloseButton
                    size="sm" 
                    bg="white"
                    />
            </Flex>
        </Box>
    )
}