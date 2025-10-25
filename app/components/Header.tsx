'use client'

import { Box, Container, Flex, Button } from '@chakra-ui/react'

export default function Header() {
    return (
        <Box
            bg= "transparent"
            color="white"
            h="80px"  // ← FIXE HÖHE! Das ist die Lösung!
            position="sticky"
            top={0}
            zIndex={1000}
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
            display="flex"
            alignItems="center"
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">

                    <img
                        src="/CleanItUp.png"
                        alt="CleanItUp Logo"
                        style={{
                            height: '60px',  // ← Größeres Logo
                            width: 'auto',
                            display: 'block',
                            marginTop: "15px"
                        }}
                    />

                    <Button
                        size="md"
                        bg="transparent"
                        color="white"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        borderRadius="full"
                        px={6}
                        fontWeight="normal"
                        transition="all 0.3s ease"
                        _hover={{
                            bg: "transparent",
                            border: "1px solid",
                            transform: "scale(1.01)",
                             boxShadow: "20px 20px 60px rgba(201, 12, 125, 0.3)",
                        }}
                        _active={{
                            transform: "scale(0.95)"
                        }}
                    >
                        Zur Anfrage - 1 Minute
                    </Button>

                </Flex>
            </Container>
        </Box>
    )
}