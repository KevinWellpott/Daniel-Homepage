'use client'

import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Testimonials() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 900)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const testimonials = [
        {
            name: "Sarah.B",
            role: "Gewerblicher Auftrag",
            emoji: "👩‍💼",
            color: "purple.500",
            text: "Absolut begeistert! Unser Büro erstrahlt in neuem Glanz. Das Team ist pünktlich, zuverlässig und extrem gründlich."
        },
        {
            name: "Hassan.M",
            role: "Privatauftrag",
            emoji: "👨‍🔧",
            color: "teal.500",
            text: "Seit 2 Jahren lassen wir unser Treppenhaus von CleanItUp reinigen. Immer perfekt, immer freundlich. Kann ich nur weiterempfehlen!"
        },
        {
            name: "Anna.X",
            role: "Privatauftrag",
            emoji: "👩‍🏫",
            color: "pink.500",
            text: "Professionell, schnell und das Ergebnis ist einfach wow! Meine Fenster haben noch nie so geglänzt. Danke!"
        },
        {
            name: "Michael.K",
            role: "Gewerblicher Auftrag",
            emoji: "👨‍💼",
            color: "blue.500",
            text: "Unsere Praxis sieht immer makellos aus. Die Reinigungskräfte arbeiten dezent und gründlich. Absolut empfehlenswert!"
        },
        {
            name: "Laura.S",
            role: "Privatauftrag",
            emoji: "👩‍🦰",
            color: "orange.500",
            text: "Nach der Renovierung war alles voller Staub. CleanItUp hat in nur einem Tag Wunder bewirkt. Vielen Dank!"
        },
        {
            name: "Thomas.W",
            role: "Gewerblicher Auftrag",
            emoji: "👨‍🍳",
            color: "green.500",
            text: "Als Gastronom ist Sauberkeit das A und O. CleanItUp erfüllt höchste Standards. Einfach top!"
        },
        {
            name: "Julia.H",
            role: "Privatauftrag",
            emoji: "👩‍🎨",
            color: "red.500",
            text: "Die Grundreinigung meiner Wohnung war perfekt. Jeder Winkel wurde beachtet. Sehr zufrieden!"
        },
        {
            name: "Stefan.R",
            role: "Gewerblicher Auftrag",
            emoji: "👨‍⚕️",
            color: "cyan.500",
            text: "Hygiene ist in unserer Praxis essentiell. CleanItUp arbeitet nach höchsten Standards. Verlässlich und gründlich!"
        },
        {
            name: "Nina.P",
            role: "Privatauftrag",
            emoji: "👩‍💻",
            color: "yellow.500",
            text: "Home Office muss sauber sein! Die regelmäßige Reinigung ist perfekt abgestimmt. Sehr professionell!"
        },
        {
            name: "Markus.T",
            role: "Gewerblicher Auftrag",
            emoji: "👨‍🏫",
            color: "indigo.500",
            text: "Unsere Schule ist immer blitzsauber. Die Zusammenarbeit läuft reibungslos seit Jahren. Danke!"
        },
        {
            name: "Sophie.L",
            role: "Privatauftrag",
            emoji: "👩‍🔬",
            color: "purple.400",
            text: "Die Fensterreinigung war sensationell! So klar haben meine Fenster noch nie ausgesehen. Top Service!"
        },
        {
            name: "David.M",
            role: "Gewerblicher Auftrag",
            emoji: "👨‍💻",
            color: "teal.400",
            text: "Unser Coworking Space sieht täglich perfekt aus. Flexibel, zuverlässig und immer freundlich!"
        },
        {
            name: "Emma.K",
            role: "Privatauftrag",
            emoji: "👩‍🎤",
            color: "pink.400",
            text: "Nach dem Umzug war die Endreinigung fällig. CleanItUp hat alles übernommen. Stress-frei und gründlich!"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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

    // Funktion für Desktop Carousel - zeigt 3 Karten mit Preview links/rechts
    const getVisibleCards = () => {
        const prevIndex = (currentSlide - 1 + testimonials.length) % testimonials.length
        const nextIndex = (currentSlide + 1) % testimonials.length
        return [prevIndex, currentSlide, nextIndex]
    }

    return (
        <Box bg="transparent" py={isSmallScreen ? "8vh" : "16vh"} position="relative" overflow="hidden">

            <Container maxW={isSmallScreen ? "90%" : "container.xl"} position="relative" zIndex={1}>

                {/* Überschrift */}
                <Box textAlign="center" mb={isSmallScreen ? "6vh" : "10vh"}>
                    <Text
                        fontSize={isSmallScreen ? "2.5vw" : "0.8vw"}
                        fontWeight="600"
                        color="purple.400"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb="1.5vh"
                    >
                        Kundenstimmen
                    </Text>
                    <Heading
                        fontSize={isSmallScreen ? "7vw" : "6xl"}
                        fontWeight="bold"
                        color="black"
                        mb="2vh"
                    >
                        Was unsere Kunden{" "}
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
                                height: isSmallScreen ? "15px" : "24px",
                                bg: "purple.500",
                                opacity: 0.4,
                                zIndex: -1,
                                transform: "rotate(-1.5deg)",
                                borderRadius: "md"
                            }}
                        >
                            sagen
                        </Box>
                    </Heading>
                    <Text fontSize={isSmallScreen ? "3.5vw" : "xl"} color="blackAlpha.700" maxW="700px" mx="auto">
                        Über 200 zufriedene Kunden vertrauen auf unsere Arbeit
                    </Text>
                </Box>

                {/* Desktop: Carousel mit Preview */}
                {!isSmallScreen && (
                    <Box position="relative">
                        <Box display="flex" alignItems="center" justifyContent="center" gap="2%" position="relative">
                            {getVisibleCards().map((index, position) => {
                                const testimonial = testimonials[index]
                                const isCenter = position === 1
                                
                                return (
                                    <Box
                                        key={index}
                                        bg="whiteAlpha.50"
                                        backdropFilter="blur(10px)"
                                        border={isCenter ? "2px solid" : "1px solid"}
                                        borderColor={isCenter ? "purple.500" : "blackAlpha.300"}
                                        borderRadius="2xl"
                                        p="4%"
                                        position="relative"
                                        width={isCenter ? "40%" : "25%"}
                                        opacity={isCenter ? 1 : 0.5}
                                        transform={isCenter ? "scale(1.05)" : "scale(0.9)"}
                                        transition="all 0.5s ease"
                                        flexShrink={0}
                                    >
                                        {isCenter && (
                                            <Box
                                                position="absolute"
                                                top="-12px"
                                                left="50%"
                                                transform="translateX(-50%)"
                                                bg="purple.500"
                                                color="white"
                                                px="4%"
                                                py="1%"
                                                borderRadius="full"
                                                fontSize="xs"
                                                fontWeight="bold"
                                                whiteSpace="nowrap"
                                            >
                                                ⚡ TOP BEWERTUNG
                                            </Box>
                                        )}

                                        <Text
                                            fontSize="6xl"
                                            color={testimonial.color}
                                            opacity={0.3}
                                            position="absolute"
                                            top="2%"
                                            left="5%"
                                            lineHeight={1}
                                        >
                                            "
                                        </Text>

                                        <Box position="relative" zIndex={1}>
                                            <Text fontSize="2xl" mb="2vh" color="yellow.400">
                                                ⭐⭐⭐⭐⭐
                                            </Text>

                                            <Text
                                                color="blackAlpha.800"
                                                fontSize="1.1vw"
                                                mb="3vh"
                                                lineHeight="tall"
                                                fontStyle="italic"
                                            >
                                                {testimonial.text}
                                            </Text>

                                            <Box display="flex" alignItems="center" gap="4%">
                                                <Box
                                                    w="50px"
                                                    h="50px"
                                                    borderRadius="full"
                                                    bg={testimonial.color}
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    fontSize="2xl"
                                                >
                                                    {testimonial.emoji}
                                                </Box>
                                                <Box>
                                                    <Text color="black" fontWeight="600">
                                                        {testimonial.name}
                                                    </Text>
                                                    <Text color="blackAlpha.600" fontSize="0.9vw">
                                                        {testimonial.role}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })}
                        </Box>

                        {/* Navigation Buttons Desktop */}
                        <Button
                            position="absolute"
                            left="-50px"
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
                            w="60px"
                            h="60px"
                            fontSize="28px"
                            fontWeight="bold"
                            p="0"
                        >
                            ←
                        </Button>

                        <Button
                            position="absolute"
                            right="-50px"
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
                            w="60px"
                            h="60px"
                            fontSize="28px"
                            fontWeight="bold"
                            p="0"
                        >
                            →
                        </Button>

                        {/* Dots Desktop */}
                        <Box display="flex" justifyContent="center" gap="2%" mt="6vh">
                            {testimonials.map((_, index) => (
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

                {/* Mobile: Carousel */}
                {isSmallScreen && (
                    <Box position="relative">
                        <Box
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Box
                                bg="linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)"
                                backdropFilter="blur(20px)"
                                border="2px solid"
                                borderColor={testimonials[currentSlide].color}
                                borderRadius="3xl"
                                p="8%"
                                minH="400px"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                boxShadow="0 20px 60px rgba(0,0,0,0.15)"
                            >
                                <Box display="flex" alignItems="center" gap="4%" mb="4vh">
                                    <Box
                                        w="60px"
                                        h="60px"
                                        borderRadius="full"
                                        bg={testimonials[currentSlide].color}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="4xl"
                                        boxShadow="0 5px 15px rgba(0,0,0,0.2)"
                                    >
                                        {testimonials[currentSlide].emoji}
                                    </Box>
                                    <Box>
                                        <Text color="black" fontWeight="700" fontSize="5vw">
                                            {testimonials[currentSlide].name}
                                        </Text>
                                        <Text color="blackAlpha.600" fontSize="3.5vw">
                                            {testimonials[currentSlide].role}
                                        </Text>
                                    </Box>
                                </Box>

                                <Text fontSize="6vw" mb="3vh" color="yellow.400">
                                    ⭐⭐⭐⭐⭐
                                </Text>

                                <Text
                                    color="blackAlpha.800"
                                    fontSize="4.5vw"
                                    lineHeight="tall"
                                    fontStyle="italic"
                                    fontWeight="500"
                                >
                                    "{testimonials[currentSlide].text}"
                                </Text>
                            </Box>
                        </Box>

                        <Box display="flex" justifyContent="center" gap="3%" mt="4vh" flexWrap="wrap">
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    w="8px"
                                    h="8px"
                                    borderRadius="full"
                                    bg={currentSlide === index ? "purple.500" : "gray.300"}
                                    cursor="pointer"
                                    onClick={() => setCurrentSlide(index)}
                                    transition="all 0.3s ease"
                                />
                            ))}
                        </Box>

                        <Text textAlign="center" mt="2vh" fontSize="3.5vw" color="blackAlpha.600">
                            {currentSlide + 1} / {testimonials.length}
                        </Text>
                    </Box>
                )}

                {/* Bottom CTA */}
                <Box textAlign="center" mt={isSmallScreen ? "8vh" : "10vh"}>
                    <Box
                        display="inline-block"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="blackAlpha.300"
                        borderRadius="2xl"
                        px={isSmallScreen ? "6%" : "4%"}
                        py="3vh"
                        w={isSmallScreen ? "100%" : "auto"}
                    >
                        <Text color="black" fontSize={isSmallScreen ? "5vw" : "xl"} fontWeight="600" mb="1vh">
                            Werden Sie Teil unserer Clean Customers!
                        </Text>
                        <Text color="blackAlpha.600" mb="2vh" fontSize={isSmallScreen ? "3.5vw" : "md"}>
                            Überzeugen Sie sich selbst von unserer Qualität
                        </Text>
                        <Button
                            bg="purple.300"
                            color="black"
                            border="1px solid"
                            borderColor="blackAlpha.400"
                            borderRadius="full"
                            px="6%"
                            fontSize={isSmallScreen ? "4vw" : "14px"}
                            fontWeight="normal"
                            w={isSmallScreen ? "100%" : "auto"}
                            transition="all 0.3s ease"
                            _hover={{
                                bg: "transparent",
                                border: "1px solid",
                                transform: "scale(1.01)",
                                boxShadow: "0px 0px 44px 0px rgba(212, 174, 251, 0.5)",
                            }}
                            _active={{
                                transform: "scale(0.95)"
                            }}
                        >
                            Zur Anfrage - 1 Minute
                        </Button>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}