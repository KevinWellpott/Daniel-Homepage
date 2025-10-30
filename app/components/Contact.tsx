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
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            telefon: formData.get('telefon'),
            leistung: formData.get('leistung'),
            nachricht: formData.get('nachricht')
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

        } finally {
            setIsLoading(false)
        }
    }

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
                        as="form"
                        onSubmit={handleSubmit}
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
                                    name="name"
                                    type="text"
                                    required
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
                                    name="email"
                                    type="email"
                                    required
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
                                    name="telefon"
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
                                />
                                Welche Reinigung benötigst du? *
                            </Box>
                            <select
                                name="leistung"
                                required
                                style={{
                                    width: '100%',
                                    fontSize: isSmallScreen ? '4vw' : '0.9vw',
                                    borderRadius: '14px',
                                    border: '2px solid #E5E7EB',
                                    backgroundColor: '#F9FAFB',
                                    height: isSmallScreen ? '50px' : '48px',
                                    padding: '0 4%',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="">Bitte auswählen...</option>
                                <option value="Grundreinigung">🏠 Grundreinigung</option>
                                <option value="Unterhaltsreinigung">🧹 Unterhaltsreinigung</option>
                                <option value="Fensterreinigung">🪟 Fensterreinigung</option>
                                <option value="Büroreinigung">💼 Büroreinigung</option>
                                <option value="Sonderreinigung">✨ Sonderreinigung</option>
                            </select>

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
                                    name="nachricht"
                                    required
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
                                type="submit"
                                disabled={isLoading}
                                width="100%"
                                bg="linear-gradient(135deg, rgba(168, 85, 247, 1) 0%, rgba(147, 51, 234, 1) 100%)"
                                color="white"
                                border="none"
                                borderRadius="full"
                                px="6%"
                                py={isSmallScreen ? "3.5vh" : "3vh"}
                                fontSize={isSmallScreen ? "4.5vw" : "1.1vw"}
                                fontWeight="700"
                                h="auto"
                                mt="2vh"
                                boxShadow="0 10px 30px rgba(168, 85, 247, 0.3)"
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 15px 40px rgba(168, 85, 247, 0.4)",
                                }}
                                _active={{
                                    transform: "translateY(0)"
                                }}
                                opacity={isLoading ? 0.6 : 1}
                            >
                                {isLoading ? '⏳ Wird gesendet...' : '🚀 Jetzt kostenlos Angebot erhalten'}
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