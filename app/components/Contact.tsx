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
            telefon: formData.get('telefon') || '',
            leistung: formData.get('leistung'),
            nachricht: formData.get('nachricht')
        }

        console.log('📤 Sende Daten:', data)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            console.log('📥 Response Status:', response.status)

            const responseData = await response.json()
            console.log('📥 Response Data:', responseData)

            if (response.ok) {
                e.currentTarget.reset()
            } else {
                console.error('Server Error:', responseData)
            }
        } catch (error) {
            console.error('❌ Catch Error:', error)
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
                                >
                                    Welche Reinigung benötigst du? *
                                </Box>
                                <select
                                    name="leistung"
                                    required
                                    style={{
                                        width: '100%',
                                        fontSize: isSmallScreen ? '16px' : '14px',
                                        borderRadius: '14px',
                                        border: '2px solid #E5E7EB',
                                        backgroundColor: '#F9FAFB',
                                        height: isSmallScreen ? '50px' : '48px',
                                        padding: '0 4%',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#D8B4FE'
                                        e.currentTarget.style.backgroundColor = 'white'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#E5E7EB'
                                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#A855F7'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168, 85, 247, 0.1)'
                                        e.currentTarget.style.backgroundColor = 'white'
                                        e.currentTarget.style.outline = 'none'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = '#E5E7EB'
                                        e.currentTarget.style.boxShadow = 'none'
                                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                                    }}
                                >
                                    <option value="">Bitte auswählen...</option>
                                    <option value="Grundreinigung">🏠 Grundreinigung</option>
                                    <option value="Unterhaltsreinigung">🧹 Unterhaltsreinigung</option>
                                    <option value="Fensterreinigung">🪟 Fensterreinigung</option>
                                    <option value="Büroreinigung">💼 Büroreinigung</option>
                                    <option value="Sonderreinigung">✨ Sonderreinigung</option>
                                </select>
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

                            <Button
                                type="submit"
                                disabled={isLoading}
                                width="100%"
                                cursor="pointer"
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
                                {isLoading ? '⏳ Wird gesendet...' : '🚀 Jetzt kostenlos Angebot erhalten'}
                            </Button>

                            <Box
                                display="flex"
                                justifyContent="center"
                                gap={isSmallScreen ? "4%" : "3%"}
                                flexWrap="wrap"
                                pt="2vh"
                            >
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600">
                                    ⚡ Schnelle Antwort
                                </Text>
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600">
                                    ✓ 100% Kostenlos
                                </Text>
                                <Text fontSize={isSmallScreen ? "2.5vw" : "0.7vw"} color="gray.600">
                                    🔒 SSL-Verschlüsselt
                                </Text>
                            </Box>

                        </VStack>
                    </Box>

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