'use client'

import {
    Box,
    Container,
    Heading,
    Input,
    Textarea,
    Button,
    VStack,
    Text
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function ContactForm() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return (
        <Box
            minH={isSmallScreen ? "auto" : "90vh"}
            py={isSmallScreen ? "8vh" : "5vh"}
            px={isSmallScreen ? "5%" : "8%"}
            bg="linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(255,255,255,0.95) 50%, rgba(20, 184, 166, 0.03) 100%)"
            display="flex"
            alignItems="center"
        >
            <Container maxW={isSmallScreen ? "95%" : "650px"}>

                <VStack gap={isSmallScreen ? "4vh" : "3vh"} align="stretch">

                    {/* Header mit Social Proof */}
                    <Box textAlign="center">
                        <Box
                            display="inline-block"
                            bg="purple.50"
                            color="purple.600"
                            fontSize={isSmallScreen ? "2.5vw" : "0.75vw"}
                            fontWeight="600"
                            px={isSmallScreen ? "4%" : "3%"}
                            py="1vh"
                            borderRadius="full"
                            mb="2vh"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            ⚡ Über 200+ zufriedene Kunden
                        </Box>

                        <Heading
                            fontSize={isSmallScreen ? "7vw" : "2.8vw"}
                            fontWeight="700"
                            mb="1.5vh"
                            color="black"
                            lineHeight="1.2"
                        >
                            Anfrage in unter 60 Sekunden
                        </Heading>
                        <Text
                            fontSize={isSmallScreen ? "3.5vw" : "1.1vw"}
                            color="blackAlpha.700"
                            fontWeight="400"
                        >
                            ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Kostenlos
                        </Text>
                    </Box>

                    {/* Premium Form Container */}
                    <Box
                        p={isSmallScreen ? "7%" : "5%"}
                        borderRadius="24px"
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        bg="white"
                        boxShadow="0 20px 60px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0,0,0,0.05)"
                        position="relative"
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "4px",
                            bg: "linear-gradient(90deg, rgba(168, 85, 247, 1) 0%, rgba(20, 184, 166, 1) 100%)",
                            borderTopLeftRadius: "24px",
                            borderTopRightRadius: "24px"
                        }}
                    >
                        <VStack gap={isSmallScreen ? "4vh" : "3vh"}>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize={isSmallScreen ? "3.5vw" : "0.95vw"}
                                    mb="1vh"
                                    fontWeight="600"
                                    color="gray.800"
                                >
                                    Dein Name *
                                </Box>
                                <Input
                                    placeholder="z.B. Max Mustermann"
                                    fontSize={isSmallScreen ? "4vw" : "0.9vw"}
                                    borderRadius="14px"
                                    border="2px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    h={isSmallScreen ? "50px" : "48px"}
                                    _hover={{
                                        borderColor: "purple.300",
                                        bg: "white"
                                    }}
                                    _focus={{
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                                        bg: "white"
                                    }}
                                    transition="all 0.2s"
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize={isSmallScreen ? "3.5vw" : "0.95vw"}
                                    mb="1vh"
                                    fontWeight="600"
                                    color="gray.800"
                                >
                                    E-Mail Adresse *
                                </Box>
                                <Input
                                    type="email"
                                    placeholder="deine@email.de"
                                    fontSize={isSmallScreen ? "4vw" : "0.9vw"}
                                    borderRadius="14px"
                                    border="2px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    h={isSmallScreen ? "50px" : "48px"}
                                    _hover={{
                                        borderColor: "purple.300",
                                        bg: "white"
                                    }}
                                    _focus={{
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                                        bg: "white"
                                    }}
                                    transition="all 0.2s"
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize={isSmallScreen ? "3.5vw" : "0.95vw"}
                                    mb="1vh"
                                    fontWeight="600"
                                    color="gray.800"
                                >
                                    Telefon <Box as="span" color="gray.500" fontWeight="400">(optional)</Box>
                                </Box>
                                <Input
                                    type="tel"
                                    placeholder="+49 123 456789"
                                    fontSize={isSmallScreen ? "4vw" : "0.9vw"}
                                    borderRadius="14px"
                                    border="2px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    h={isSmallScreen ? "50px" : "48px"}
                                    _hover={{
                                        borderColor: "purple.300",
                                        bg: "white"
                                    }}
                                    _focus={{
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                                        bg: "white"
                                    }}
                                    transition="all 0.2s"
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize={isSmallScreen ? "3.5vw" : "0.95vw"}
                                    mb="1vh"
                                    fontWeight="600"
                                    color="gray.800"
                                >
                                    Welche Reinigung benötigst du? *
                                </Box>
                                <Box
                                    as="select"
                                    width="100%"
                                    fontSize={isSmallScreen ? "4vw" : "0.9vw"}
                                    borderRadius="14px"
                                    border="2px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    h={isSmallScreen ? "50px" : "48px"}
                                    padding="0 4%"
                                    cursor="pointer"
                                    _hover={{
                                        borderColor: "purple.300",
                                        bg: "white"
                                    }}
                                    _focus={{
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                                        outline: "none",
                                        bg: "white"
                                    }}
                                    transition="all 0.2s"
                                >
                                    <option value="">Bitte auswählen...</option>
                                    <option value="grundreinigung">🏠 Grundreinigung</option>
                                    <option value="unterhaltsreinigung">🧹 Unterhaltsreinigung</option>
                                    <option value="treppenhausreinigung">🧼 Treppenhausreinigung</option>
                                    <option value="büroreinigung">💼 Büroreinigung</option>
                                    <option value="sonderreinigung">✨ Sonderreinigung</option>
                                </Box>
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize={isSmallScreen ? "3.5vw" : "0.95vw"}
                                    mb="1vh"
                                    fontWeight="600"
                                    color="gray.800"
                                >
                                    Deine Nachricht *
                                </Box>
                                <Textarea
                                    placeholder="Beschreibe uns kurz dein Anliegen (z.B. Größe, Termine, Besonderheiten...)"
                                    rows={isSmallScreen ? 4 : 3}
                                    fontSize={isSmallScreen ? "4vw" : "0.9vw"}
                                    borderRadius="14px"
                                    border="2px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    resize="vertical"
                                    minH={isSmallScreen ? "100px" : "90px"}
                                    _hover={{
                                        borderColor: "purple.300",
                                        bg: "white"
                                    }}
                                    _focus={{
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                                        bg: "white"
                                    }}
                                    transition="all 0.2s"
                                />
                            </Box>

                            {/* Premium CTA Button */}
                             <Button
                            width="100%"
                            bg="purple.300"
                            color="black"
                            border="1px solid"
                            borderColor="blackAlpha.400"
                            borderRadius="full"
                            px={6}
                            fontSize="14px"
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
                            Ja, ich will einen Termin!
                        </Button>

                            {/* Trust Indicators */}
                            <Box 
                                display="flex" 
                                justifyContent="center" 
                                gap={isSmallScreen ? "4%" : "3%"}
                                flexWrap="wrap"
                                pt="2vh"
                            >
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600" display="flex" alignItems="center" gap="1%">
                                    ⚡ Schnelle Antwort
                                </Text>
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600" display="flex" alignItems="center" gap="1%">
                                    ✓ 100% Kostenlos
                                </Text>
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600" display="flex" alignItems="center" gap="1%">
                                    🔒 SSL-Verschlüsselt
                                </Text>
                            </Box>

                        </VStack>
                    </Box>

                    {/* Bottom Trust Badge */}
                    <Box
                        textAlign="center"
                        fontSize={isSmallScreen ? "2.8vw" : "0.8vw"}
                        color="gray.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="2%"
                    >
                        <Text>🔒</Text>
                        <Text>Deine Daten sind sicher und werden vertraulich behandelt</Text>
                    </Box>

                </VStack>
            </Container>
        </Box>
    )
}