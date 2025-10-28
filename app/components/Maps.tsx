'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Contact() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 900)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return (
        <Box bg="transparent" py={isSmallScreen ? "2vh" : "1vh"}>
            <Container maxW={isSmallScreen ? "90%" : "container.xl"}>

                <Box textAlign="center" mb={isSmallScreen ? "6vh" : "8vh"}>
                    <Text
                        fontSize={isSmallScreen ? "2.5vw" : "0.8vw"}
                        fontWeight="600"
                        color="purple.400"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb="1.5vh"
                    >
                        Kontakt
                    </Text>
                    <Heading
                        fontSize={isSmallScreen ? "7vw" : "5xl"}
                        color="black"
                        mb="2vh"
                    >
                        Bereit für saubere Räume?
                    </Heading>
                    <Text fontSize={isSmallScreen ? "3.5vw" : "xl"} color="blackAlpha.700">
                        Kontaktieren Sie uns für ein unverbindliches Angebot
                    </Text>
                </Box>

                <SimpleGrid columns={isSmallScreen ? 1 : 2} gap={isSmallScreen ? "6vh" : "6%"}>

                    {/* Links: Kontaktinfo */}
                    <Box
                        bg="whiteAlpha.50"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="blackAlpha.200"
                        borderRadius="2xl"
                        p={isSmallScreen ? "6%" : "4%"}
                    >
                        <Heading
                            fontSize={isSmallScreen ? "6vw" : "2xl"}
                            color="black"
                            mb="4vh"
                        >
                            Schreiben Sie uns
                        </Heading>

                        <Box color="blackAlpha.800" fontSize={isSmallScreen ? "4vw" : "1.1vw"} mb="4vh" lineHeight="tall">
                            <Box mb="3vh" display="flex" alignItems="start" gap="4%">
                                <Text fontSize={isSmallScreen ? "6vw" : "2xl"}>📍</Text>
                                <Box>
                                    <Text fontWeight="600" color="black" mb="0.5vh">Adresse</Text>
                                    <Text>
                                        Musterstraße 123<br />
                                        32545 Bad Oeynhausen
                                    </Text>
                                </Box>
                            </Box>

                            <Box mb="3vh" display="flex" alignItems="start" gap="4%">
                                <Text fontSize={isSmallScreen ? "6vw" : "2xl"}>📞</Text>
                                <Box>
                                    <Text fontWeight="600" color="black" mb="0.5vh">Telefon</Text>
                                    <a
                                        href="tel:+4952319876543"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#9F7AEA'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                                    >
                                        05231 / 987 65 43
                                    </a>
                                </Box>
                            </Box>

                            <Box mb="3vh" display="flex" alignItems="start" gap="4%">
                                <Text fontSize={isSmallScreen ? "6vw" : "2xl"}>✉️</Text>
                                <Box>
                                    <Text fontWeight="600" color="black" mb="0.5vh">E-Mail</Text>
                                    <a
                                        href="mailto:info@cleanitup.de"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#9F7AEA'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                                    >
                                        info@cleanitup.de
                                    </a>
                                </Box>
                            </Box>

                            <Box mb="3vh" display="flex" alignItems="start" gap="4%">
                                <Text fontSize={isSmallScreen ? "6vw" : "2xl"}>🕐</Text>
                                <Box>
                                    <Text fontWeight="600" color="black" mb="0.5vh">Zu diesen Zeiten sind wir erreichbar</Text>
                                    <Text>
                                        Mo - Fr: 8:00 - 18:00 Uhr<br />
                                        Sa: 9:00 - 14:00 Uhr
                                    </Text>
                                </Box>
                            </Box>
                        </Box>

                        <Button
                            width="100%"
                            bg="purple.300"
                            color="black"
                            border="1px solid"
                            borderColor="blackAlpha.400"
                            borderRadius="full"
                            px={isSmallScreen ? "6%" : "6"}
                            py={isSmallScreen ? "3vh" : "auto"}
                            fontSize={isSmallScreen ? "4vw" : "14px"}
                            fontWeight="normal"
                            h={isSmallScreen ? "auto" : "auto"}
                            minH={isSmallScreen ? "55px" : "50px"}
                            transition="all 0.3s ease"
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
                            Jetzt per Whatsapp kontaktieren!
                        </Button>
                    </Box>

                    {/* Rechts: Google Maps - Bad Oeynhausen */}
                    <Box
                        borderRadius="2xl"
                        overflow="hidden"
                        border="2px solid"
                        borderColor="blackAlpha.100"
                        h={isSmallScreen ? "400px" : "600px"}
                        position="relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78178.89445634732!2d8.763863!3d52.203364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba4e3f0a0c0b8d%3A0x4272e5d5d6d8140!2sBad%20Oeynhausen!5e0!3m2!1sde!2sde!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Overlay-Badge */}
                        <Box
                            position="absolute"
                            bottom="2%"
                            left="50%"
                            transform="translateX(-50%)"
                            bg="whiteAlpha.900"
                            backdropFilter="blur(10px)"
                            px={isSmallScreen ? "4%" : "3%"}
                            py="1.5vh"
                            borderRadius="full"
                            boxShadow="lg"
                            maxW={isSmallScreen ? "90%" : "auto"}
                        >
                            <Text fontWeight="600" color="gray.800" fontSize={isSmallScreen ? "3vw" : "md"} textAlign="center">
                                📍 Wir sind in Bad Oeynhausen und Umgebung für Sie da!
                            </Text>
                        </Box>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}