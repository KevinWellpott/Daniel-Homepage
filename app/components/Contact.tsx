'use client'

import {
    Box,
    Container,
    Heading,
    Input,
    Textarea,
    Button,
    VStack
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

            if (response.ok) {
                alert('✅ Erfolgreich gesendet! Wir melden uns innerhalb von 24h bei dir!')
                e.currentTarget.reset()
            } else {
                alert('❌ Fehler beim Senden. Bitte versuche es später erneut.')
            }
        } catch (error) {
            alert('❌ Fehler beim Senden. Bitte versuche es später erneut.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box
            minH="90vh"
            py="3vh"
            px="8%"
            bg="linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(240,240,255,0.95))"
            display="flex"
            alignItems="center"
        >
            <Container maxW="90%">

                <VStack gap="2vh" align="stretch">

                    <Box
                        paddingTop="%"
                        textAlign="center">
                        <Heading
                            fontSize="2.5vw"
                            fontWeight="600"
                            mb="1vh"
                            color="black"
                        >
                            Anfrage in 1 Minute
                        </Heading>
                        <Box
                            fontSize="1vw"
                            color="blackAlpha.700"
                            fontWeight="400"
                        >
                            Wir melden uns innerhalb von 24 Stunden bei dir zurück
                        </Box>
                    </Box>

                    <Box
                        as="form"
                        onSubmit={handleSubmit}
                        p="4%"
                        borderRadius="20px"
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        bg="white"
                        boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
                    >
                        <VStack gap="2.5vh">

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize="0.9vw"
                                    mb="1vh"
                                    fontWeight="500"
                                    color="black"
                                >
                                    Name
                                </Box>
                                <Input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Dein vollständiger Name"
                                    fontSize="0.85vw"
                                    borderRadius="12px"
                                    border="2px solid"
                                    borderColor="blackAlpha.200"
                                    bg="white"
                                    h="40px"
                                    _hover={{
                                        borderColor: "blackAlpha.300"
                                    }}
                                    _focus={{
                                        borderColor: "rgba(201, 12, 125, 0.6)",
                                        boxShadow: "0 0 0 2px rgba(201, 12, 125, 0.1)"
                                    }}
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize="0.9vw"
                                    mb="1vh"
                                    fontWeight="500"
                                    color="black"
                                >
                                    E-Mail
                                </Box>
                                <Input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="deine@email.de"
                                    fontSize="0.85vw"
                                    borderRadius="12px"
                                    border="2px solid"
                                    borderColor="blackAlpha.200"
                                    bg="white"
                                    h="40px"
                                    _hover={{
                                        borderColor: "blackAlpha.300"
                                    }}
                                    _focus={{
                                        borderColor: "rgba(201, 12, 125, 0.6)",
                                        boxShadow: "0 0 0 2px rgba(201, 12, 125, 0.1)"
                                    }}
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize="0.9vw"
                                    mb="1vh"
                                    fontWeight="500"
                                    color="black"
                                >
                                    Telefon <Box as="span" color="blackAlpha.500">(optional)</Box>
                                </Box>
                                <Input
                                    name="telefon"
                                    type="tel"
                                    placeholder="+49 123 456789"
                                    fontSize="0.85vw"
                                    borderRadius="12px"
                                    border="2px solid"
                                    borderColor="blackAlpha.200"
                                    bg="white"
                                    h="40px"
                                    _hover={{
                                        borderColor: "blackAlpha.300"
                                    }}
                                    _focus={{
                                        borderColor: "rgba(201, 12, 125, 0.6)",
                                        boxShadow: "0 0 0 2px rgba(201, 12, 125, 0.1)"
                                    }}
                                />
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize="0.9vw"
                                    mb="1vh"
                                    fontWeight="500"
                                    color="black"
                                >
                                    Welche Leistung?
                                </Box>
                                <Box
                                    as="select"
                                    
                                  
                                    width="100%"
                                    fontSize="0.85vw"
                                    borderRadius="12px"
                                    border="2px solid"
                                    borderColor="blackAlpha.200"
                                    bg="white"
                                    h="40px"
                                    padding="0 3%"
                                    cursor="pointer"
                                    _hover={{
                                        borderColor: "blackAlpha.300"
                                    }}
                                    _focus={{
                                        borderColor: "rgba(201, 12, 125, 0.6)",
                                        boxShadow: "0 0 0 2px rgba(201, 12, 125, 0.1)",
                                        outline: "none"
                                    }}
                                >
                                    <option value="">Bitte auswählen</option>
                                    <option value="grundreinigung">Grundreinigung</option>
                                    <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
                                    <option value="fensterreinigung">Fensterreinigung</option>
                                    <option value="büroreinigung">Büroreinigung</option>
                                    <option value="sonderreinigung">Sonderreinigung</option>
                                </Box>
                            </Box>

                            <Box width="100%">
                                <Box
                                    as="label"
                                    display="block"
                                    fontSize="0.9vw"
                                    mb="1vh"
                                    fontWeight="500"
                                    color="black"
                                >
                                    Deine Nachricht
                                </Box>
                                <Textarea
                                    name="nachricht"
                                    required
                                    placeholder="Beschreibe uns kurz, was gereinigt werden soll..."
                                    rows={3}
                                    fontSize="0.85vw"
                                    borderRadius="12px"
                                    border="2px solid"
                                    borderColor="blackAlpha.200"
                                    bg="white"
                                    resize="none"
                                    minH="80px"
                                    _hover={{
                                        borderColor: "blackAlpha.300"
                                    }}
                                    _focus={{
                                        borderColor: "rgba(201, 12, 125, 0.6)",
                                        boxShadow: "0 0 0 2px rgba(201, 12, 125, 0.1)"
                                    }}
                                />
                            </Box>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                width="100%"
                                bg="transparent"
                                color="black"
                                border="1px solid"
                                borderColor="blackAlpha.400"
                                borderRadius="full"
                                px={{ base: 3, sm: 4, md: 5, lg: 6 }}
                                fontSize={{ base: "10px", sm: "11px", md: "13px", lg: "14px", xl: "15px" }}
                                fontWeight="normal"
                                transition="all 0.3s ease"
                                whiteSpace="nowrap"
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
                                <Box fontSize="18px">
                                    {isLoading ? 'Wird gesendet...' : 'Jetzt loslegen!'}
                                </Box>
                            </Button>

                        </VStack>
                    </Box>

                    <Box
                        textAlign="center"
                        fontSize="0.75vw"
                        color="blackAlpha.600"
                    >
                        🔒 Deine Daten werden vertraulich behandelt
                    </Box>

                </VStack>
            </Container>
        </Box>
    )
}