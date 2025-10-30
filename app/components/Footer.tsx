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
                <Flex justify="space-between" align="center" paddingLeft="15%" paddingRight="15%">
                    <Box
                        display="flex"
                        flexDirection="column"  // ← column (nicht coloumn)
                        gap="1vh"  // Abstand zwischen den Links
                    >
                        <Link href="/rechtliches/impressum" style={{ textDecoration: 'none', fontSize: "1.5vh" }}>Impressum</Link>
                        <Link href="/rechtliches/datenschutz" style={{ textDecoration: 'none', fontSize: "1.5vh" }}>Datenschutz</Link>
                        <Link href="/rechtliches/agb" style={{ textDecoration: 'none', fontSize: "1.5vh" }}>AGB</Link>
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




                </Flex>
            </Container>
        </Box>
    )
}