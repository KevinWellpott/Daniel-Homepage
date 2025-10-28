'use client'

import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'  // ← DAS HAT GEFEHLT!

export default function TeamSection() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 550)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return (
        <Box bg="transparent" py="5vh">
            <Container maxW="container.xl">
                <Box mt="8vh" position="relative">

                    {/* Großer Titel oben */}
                    <Box textAlign="center" mb="8vh">
                        <Heading
                            fontSize={isSmallScreen ? "4xl" : "6xl"}
                            color="black"
                            fontWeight="bold"
                            mb="2vh"
                        >
                            Wir sind{" "}
                            <Box
                                as="span"
                                position="relative"
                                display="inline-block"
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    left: "-8px",
                                    right: "-8px",
                                    bottom: "12px",
                                    height: "20px",
                                    bg: "white",
                                    border: "solid 1px",
                                    borderColor: "purple.400",
                                    opacity: 0.5,
                                    zIndex: -1,
                                    transform: "rotate(1.5deg)",
                                    borderRadius: "md"
                                }}
                            >
                                CleanItUp
                            </Box>
                        </Heading>
                        <Text fontSize="xl" color="blackAlpha.800" maxW="600px" mx="auto">
                            Zwei Freunde, eine Vision: Sauberkeit auf höchstem Niveau
                        </Text>
                    </Box>

                    {/* Founder Cards nebeneinander */}
                    <SimpleGrid columns={2} gap="4%">

                        {/* Samuel Card */}
                        <Box
                            bg="whiteAlpha.50"
                            backdropFilter="blur(10px)"
                            border="1px solid"
                            borderColor="blackAlpha.300"
                            borderRadius="2xl"
                            p="4%"
                            textAlign="center"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-8px)",
                                borderColor: "purple.400",
                                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)"
                            }}
                        >
                            <Box
                                position="relative"
                                display="inline-block"
                                mb="3vh"
                            >
                                <img
                                    src="/1.png"
                                    alt="Samuel Kerber"
                                    style={{
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(168, 85, 247, 0.5)'
                                    }}
                                />
                            </Box>

                            <Heading fontSize="2xl" color="blackAlpha.700" mb="1vh">
                                Samuel Kerber
                            </Heading>
                            <Text color="purple.300" fontWeight="600" mb="2vh">
                                Co-Founder & Geschäftsführer
                            </Text>
                            <Text color="blackAlpha.700" fontSize="sm" lineHeight="tall">
                                "Perfektion ist kein Zufall – sie ist das Ergebnis von Leidenschaft und Präzision."
                            </Text>
                        </Box>

                        {/* Daniel Card */}
                        <Box
                            bg="whiteAlpha.50"
                            backdropFilter="blur(10px)"
                            border="1px solid"
                            borderColor="blackAlpha.300"
                            borderRadius="2xl"
                            p="4%"
                            textAlign="center"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-8px)",
                                borderColor: "teal.400",
                                boxShadow: "0 20px 60px rgba(20, 184, 166, 0.3)"
                            }}
                        >
                            <Box
                                position="relative"
                                display="inline-block"
                                mb="3vh"
                            >
                                <img
                                    src="/2.png"
                                    alt="Daniel Lengert"
                                    style={{
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(20, 184, 166, 0.5)'
                                    }}
                                />
                            </Box>

                            <Heading fontSize="2xl" color="blackAlpha.700" mb="1vh">
                                Daniel Lengert
                            </Heading>
                            <Text color="teal.300" fontWeight="600" mb="2vh">
                                Co-Founder & Geschäftsführer
                            </Text>
                            <Text color="blackAlpha.700" fontSize="sm" lineHeight="tall">
                                "Sauberkeit schafft Vertrauen – und Vertrauen ist die Basis jeder guten Beziehung."
                            </Text>
                        </Box>

                    </SimpleGrid>

                    {/* Mission Statement unten */}
                    <Box
                        bg="gradient"
                        bgGradient="linear(to-r, purple.600, black.500)"
                        borderRadius="3xl"
                        p="6%"
                        textAlign="center"
                        position="relative"
                        overflow="hidden"
                        mt="10vh"
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bg: "blackAlpha.800",
                            zIndex: 0
                        }}
                    >
                        <Box position="relative" zIndex={1}>
                            <Text
                                fontSize="2xl"
                                color="white"
                                fontWeight="600"
                                lineHeight="tall"
                                maxW="900px"
                                mx="auto"
                            >
                                Von Treppenhaus über Büroräume bis zur Spezialreinigung – wir bringen{" "}
                                <Box as="span" fontWeight="bold" color="yellow.300">
                                    Bad Oeynhausen & Umgebung
                                </Box>{" "}
                                zum Glänzen. Mit modernster Technik und jahrelanger Erfahrung garantieren wir Ihnen ein makelloses Ergebnis.
                            </Text>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}