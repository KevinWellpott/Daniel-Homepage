'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'

export default function Contact() {
    return (
        <Box bg="transparent" py={20}>
            <Container maxW="container.xl">
            
                
                <Box textAlign="center" mb={16}>
                    <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color="purple.400" 
                        textTransform="uppercase" 
                        letterSpacing="wider"
                        mb={3}
                    >
                        Kontakt
                    </Text>
                    <Heading 
                        fontSize={{ base: "3xl", md: "5xl" }}
                        color="white"
                        mb={4}
                    >
                        Bereit für saubere Räume?
                    </Heading>
                    <Text fontSize="xl" color="whiteAlpha.700">
                        Kontaktieren Sie uns für ein unverbindliches Angebot
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
                    
                    {/* Links: Kontaktinfo */}
                    <Box
                        bg="whiteAlpha.50"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        borderRadius="2xl"
                        p={8}
                    >
                        <Heading 
                            fontSize="2xl"
                            color="white"
                            mb={8}
                        >
                            Schreiben Sie uns
                        </Heading>
                        
                        <Box color="whiteAlpha.800" fontSize="lg" mb={8} lineHeight="tall">
                            <Box mb={6} display="flex" alignItems="start" gap={4}>
                                <Text fontSize="2xl">📍</Text>
                                <Box>
                                    <Text fontWeight="600" color="white" mb={1}>Adresse</Text>
                                    <Text>
                                        Musterstraße 123<br />
                                        32545 Bad Oeynhausen
                                    </Text>
                                </Box>
                            </Box>

                            <Box mb={6} display="flex" alignItems="start" gap={4}>
                                <Text fontSize="2xl">📞</Text>
                                <Box>
                                    <Text fontWeight="600" color="white" mb={1}>Telefon</Text>
                                    <Box 
                                        as="a" 
                                        href="tel:+4952319876543" 
                                        _hover={{ color: "purple.400" }}
                                        transition="color 0.2s"
                                    >
                                        05231 / 987 65 43
                                    </Box>
                                </Box>
                            </Box>

                            <Box mb={6} display="flex" alignItems="start" gap={4}>
                                <Text fontSize="2xl">✉️</Text>
                                <Box>
                                    <Text fontWeight="600" color="white" mb={1}>E-Mail</Text>
                                    <Box 
                                        as="a" 
                                        href="mailto:info@cleanitup.de" 
                                        _hover={{ color: "purple.400" }}
                                        transition="color 0.2s"
                                    >
                                        info@cleanitup.de
                                    </Box>
                                </Box>
                            </Box>

                            <Box mb={6} display="flex" alignItems="start" gap={4}>
                                <Text fontSize="2xl">🕐</Text>
                                <Box>
                                    <Text fontWeight="600" color="white" mb={1}>Zu diesen Zeiten sind wir erreichbar </Text>
                                    <Text>
                                        Mo - Fr: 8:00 - 18:00 Uhr<br />
                                        Sa: 9:00 - 14:00 Uhr
                                    </Text>
                                </Box>
                            </Box>
                        </Box>

                        <Button
                            as="a"
                            href="https://wa.me/4952319876543"
                            target="_blank"
                            size="lg"
                            w="full"
                            bg="purple.500"
                            color="white"
                            _hover={{ bg: "purple.600" }}
                        >
                            💬 WhatsApp Chat starten
                        </Button>
                    </Box>

                    {/* Rechts: Google Maps - Bad Oeynhausen */}
                    <Box
                        borderRadius="2xl"
                        overflow="hidden"
                        border="2px solid"
                        borderColor="whiteAlpha.200"
                        h="600px"
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
                            bottom={4}
                            left="50%"
                            transform="translateX(-50%)"
                            bg="whiteAlpha.900"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={3}
                            borderRadius="full"
                            boxShadow="lg"
                        >
                            <Text fontWeight="600" color="gray.800">
                                📍 Wir sind in Bad Oeynhausen und Umgebung für Sie da!
                            </Text>
                        </Box>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}