'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Services() {

    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 650)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const services = [
        {
            emoji: "🏠",
            title: "Treppenhaus-Reinigung",
            text: "Vom Wohnzimmer bis zum Bad – wir sorgen für strahlende Sauberkeit in Ihrem Zuhause."
        },
        {
            emoji: "👨🏽‍💻",
            title: "Büro-Reinigung",
            text: "Ein sauberes Büro bedeutet produktive Mitarbeiter. Wir kümmern uns um Ihr Business."
        },
        {
            emoji: "🧼",
            title: "Spezial-Reinigung",
            text: "Fenster, Teppiche, Polster – für die besonderen Fälle sind wir Ihre Experten."
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide()
        }

        if (touchStart - touchEnd < -75) {
            prevSlide()
        }
    }

    return (
        <Box bg="transparent" paddingTop="10vh" paddingBottom="5vh">

            <Box
                position="absolute"
                top="20%"
                left="-10%"
                bg="purple.500"
                filter="blur(120px)"
                opacity={0.10}
                borderRadius="full"
                display={isSmallScreen ? "none" : "block"}
            />

            <Box
                position="absolute"
                top="40%"
                left="80%"
                bg="teal.500"
                filter="blur(120px)"
                opacity={0.10}
                borderRadius="full"
                display={isSmallScreen ? "none" : "block"}
            />

            <Box
                position="absolute"
                bottom="10%"
                right="-10%"
                bg="teal.500"
                filter="blur(120px)"
                opacity={0.15}
                borderRadius="full"
                display={isSmallScreen ? "none" : "block"}
            />

            <Container maxW={isSmallScreen ? "85%" : "container.xl"}>

                {/* Überschrift */}
                <Box textAlign="center" mb={isSmallScreen ? "6vh" : "8vh"}>
                    <Text
                        fontSize={isSmallScreen ? "2.5vw" : "0.8vw"}
                        fontWeight="600"
                        color="purple.600"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb="1.5vh"
                    >
                        Unsere Leistungen
                    </Text>
                    <Heading
                        fontSize={isSmallScreen ? "7vw" : "5xl"}
                        fontWeight="bold"
                        color="black"
                    >
                        Sauberkeit nach Maß
                    </Heading>
                </Box>

                {/* Desktop: 3 Karten nebeneinander */}
                {!isSmallScreen && (
                    <SimpleGrid columns={3} gap="4%">
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                textAlign="center"
                                bg="white"
                                p="4%"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "scale(1.01)",
                                    boxShadow: "20px 20px 60px rgba(201, 12, 125, 0.3)",
                                    borderColor: "blue.300"
                                }}
                            >
                                <Box
                                    borderRadius="xl"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb="3vh"
                                    mx="auto"
                                    fontSize="5xl"
                                >
                                    {service.emoji}
                                </Box>

                                <Heading fontSize="2xl" mb="1.5vh" color="gray.900">
                                    {service.title}
                                </Heading>

                                <Text color="gray.600" fontSize="1vw" lineHeight="tall">
                                    {service.text}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}

                {/* Mobile: Carousel */}
                {isSmallScreen && (
                    <Box position="relative">
                        {/* Carousel Container */}
                        <Box
                            textAlign="center"
                            bg="white"
                            p="8%"
                            borderRadius="2xl"
                            border="1px solid"
                            borderColor="gray.200"
                            minH="350px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Box
                                borderRadius="xl"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb="4vh"
                                mx="auto"
                                fontSize="15vw"
                            >
                                {services[currentSlide].emoji}
                            </Box>

                            <Heading fontSize="6vw" mb="2vh" color="gray.900">
                                {services[currentSlide].title}
                            </Heading>

                            <Text color="gray.600" fontSize="4vw" lineHeight="tall">
                                {services[currentSlide].text}
                            </Text>
                        </Box>

                        {/* Navigation Buttons */}
                        <Button
                            position="absolute"
                            left="-20px"
                            top="50%"
                            transform="translateY(-50%)"
                            onClick={prevSlide}
                            bg="white"
                            color="black"
                            border="2px solid"
                            borderColor="gray.300"
                            borderRadius="full"
                            boxShadow="lg"
                            _hover={{ bg: "purple.100", borderColor: "purple.400" }}
                            w="50px"
                            h="50px"
                            fontSize="24px"
                            fontWeight="bold"
                            p="0"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            ←
                        </Button>

                        <Button
                            position="absolute"
                            right="-20px"
                            top="50%"
                            transform="translateY(-50%)"
                            onClick={nextSlide}
                            bg="white"
                            color="black"
                            border="2px solid"
                            borderColor="gray.300"
                            borderRadius="full"
                            boxShadow="lg"
                            _hover={{ bg: "purple.100", borderColor: "purple.400" }}
                            w="50px"
                            h="50px"
                            fontSize="24px"
                            fontWeight="bold"
                            p="0"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            →
                        </Button>

                        {/* Dots Indicator */}
                        <Box display="flex" justifyContent="center" gap="2%" mt="4vh">
                            {services.map((_, index) => (
                                <Box
                                    key={index}
                                    w="10px"
                                    h="10px"
                                    borderRadius="full"
                                    bg={currentSlide === index ? "purple.500" : "gray.300"}
                                    cursor="pointer"
                                    onClick={() => setCurrentSlide(index)}
                                    transition="all 0.3s ease"
                                />
                            ))}
                        </Box>
                    </Box>
                )}

            </Container>
        </Box>
    )
}