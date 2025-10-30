'use client'

import { Box, Container, Flex, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {


    return (
        <Box
            marginTop="2%"
            bg="purple.100"
            color="black"
            h="20vh"
            position="sticky"
            top={0}
            zIndex={1000}
            borderBottom="1px solid"
            borderColor="blackAlpha.400"
            display="flex"
            alignItems="center"
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Box
                        display="flex"
                        flexDirection="column"  // ← column (nicht coloumn)
                        gap="1vh"  // Abstand zwischen den Links
                    >
                        <Link href="/rechtliches/impressum" style={{ textDecoration: 'none', fontSize:"1.5vh" }}>Impressum</Link>
                        <Link href="/rechtliches/datenschutz" style={{ textDecoration: 'none', fontSize:"1.5vh" }}>Datenschutz</Link>
                        <Link href="/rechtliches/agb" style={{ textDecoration: 'none', fontSize:"1.5vh" }}>AGB</Link>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="1vh">
                        <Text
                        fontSize="1.5vh">
                            Kontakt
                        </Text>
                        <Text
                        fontSize="1.5vh">
                            01794884497
                        </Text>
                        <Text
                        fontSize="1.5vh">
                            info@cleanitup.de
                        </Text>
                    </Box>


                    <Link href="/contact" style={{ textDecoration: 'none', width: "20vh" }}>
                        <Button
                            width="100%"
                            cursor="pointer"
                            bg="purple.300"
                            color="black"
                            border="1px solid"
                            borderColor="blackAlpha.400"
                            borderRadius="full"
                            px={6}
                            fontSize="1.5vh"
                            fontWeight="normal"
                            transition="all 0.3s ease"
                            whiteSpace="nowrap"
                            _hover={{
                                bg: "transparent",
                                border: "1px solid",
                                transform: "scale(1.01)",
                                boxShadow: "0px 0px 44px 0px rgba(212, 174, 251, 0.5)"
                            }}
                            _active={{
                                transform: "scale(0.95)"
                            }}
                        >
                            Zur Anfrage - 1 Minute
                        </Button>
                    </Link>

                </Flex>
            </Container>
        </Box>
    )
}