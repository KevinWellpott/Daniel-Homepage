'use client'

import { Box, Container, Heading, Text, SimpleGrid, Icon } from '@chakra-ui/react'


export default function Services() {
    return (
        <Box bg="transparent" py={20}>

              <Box
                position="absolute"
                top="20%"
                left="-10%"
                w="500px"
                h="500px"
                bg="purple.500"
                filter="blur(120px)"
                opacity={0.10}
                borderRadius="full"
            />


              <Box
                position="absolute"
                top="40%"
                left="80%"
                w="500px"
                h="500px"
                bg="teal.500"
                
                filter="blur(120px)"
                opacity={0.10}
                borderRadius="full"
            />

                      <Box
                position="absolute"
                bottom="10%"
                right="-10%"
                w="600px"
                h="600px"
                bg="teal.500"
                filter="blur(120px)"
                opacity={0.15}
                borderRadius="full"
            />
            
            <Container maxW="container.xl">

                {/* Überschrift */}
                <Box textAlign="center" mb={16}>
                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="purple.600"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={3}
                    >
                        Unsere Leistungen
                    </Text>
                    <Heading
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="bold"
                        color="white"
                    >
                        Sauberkeit nach Maß
                    </Heading>
                </Box>

                {/* 3 Karten */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>

                    {/* Karte 1 */}
                    <Box


                        textAlign="center"
                        bg="white"
                        p={8}
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
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="5xl"                        >
                            🏠
                        </Box>

                        <Heading fontSize="2xl" mb={3} color="gray.900">
                            Treppenhaus-Reinigung
                        </Heading>

                        <Text color="gray.600" fontSize="md" lineHeight="tall">
                            Vom Wohnzimmer bis zum Bad – wir sorgen für strahlende Sauberkeit in Ihrem Zuhause.
                        </Text>
                    </Box>

                    {/* Karte 2 */}
                    <Box


                        textAlign="center"
                        bg="white"
                        p={8}
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
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="5xl"                        >
                            👨🏽‍💻
                        </Box>

                        <Heading fontSize="2xl" mb={3} color="gray.900">
                            Büro-Reinigung
                        </Heading>

                        <Text color="gray.600" fontSize="md" lineHeight="tall">
                            Ein sauberes Büro bedeutet produktive Mitarbeiter. Wir kümmern uns um Ihr Business.
                        </Text>
                    </Box>

                    {/* Karte 3 */}
                    <Box


                        textAlign="center"
                        bg="white"
                        p={8}
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
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="5xl"                        >
                            🧼
                        </Box>

                        <Heading fontSize="2xl" mb={3} color="gray.900">
                            Spezial-Reinigung
                        </Heading>

                        <Text color="gray.600" fontSize="md" lineHeight="tall">
                            Fenster, Teppiche, Polster – für die besonderen Fälle sind wir Ihre Experten.
                        </Text>
                    </Box>

</SimpleGrid>

{/* NEU: Team & Mission Section */}
<Box mt={32} position="relative">
    
    {/* Großer Titel oben */}
    <Box textAlign="center" mb={16}>
        <Heading 
            fontSize={{ base: "4xl", md: "6xl" }}
            color="white"
            fontWeight="bold"
            mb={4}
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
                    bg: "purple.500",
                    opacity: 0.5,
                    zIndex: -1,
                    transform: "rotate(-1.5deg)",
                    borderRadius: "md"
                }}
            >
                CleanItUp
            </Box>
        </Heading>
        <Text fontSize="xl" color="whiteAlpha.800" maxW="600px" mx="auto">
            Zwei Freunde, eine Vision: Sauberkeit auf höchstem Niveau
        </Text>
    </Box>

    {/* Founder Cards nebeneinander */}
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={20}>
        
        {/* Samuel Card */}
        <Box
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="2xl"
            p={8}
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
                mb={6}
            >
                <img
                    src="/samuel.png"
                    alt="Samuel Kerber"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(168, 85, 247, 0.5)'
                    }}
                />
                <Box
                    position="absolute"
                    bottom={2}
                    right={2}
                    bg="purple.500"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    border="3px solid black"
                >
                    ✨
                </Box>
            </Box>

            <Heading fontSize="2xl" color="white" mb={2}>
                Samuel Kerber
            </Heading>
            <Text color="purple.300" fontWeight="600" mb={4}>
                Co-Founder & Geschäftsführer
            </Text>
            <Text color="whiteAlpha.700" fontSize="sm" lineHeight="tall">
                "Perfektion ist kein Zufall – sie ist das Ergebnis von Leidenschaft und Präzision."
            </Text>
        </Box>

        {/* Daniel Card */}
        <Box
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="2xl"
            p={8}
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
                mb={6}
            >
                <img
                    src="/daniel.png"
                    alt="Daniel Lengert"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(20, 184, 166, 0.5)'
                    }}
                />
                <Box
                    position="absolute"
                    bottom={2}
                    right={2}
                    bg="teal.500"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    border="3px solid black"
                >
                    💎
                </Box>
            </Box>

            <Heading fontSize="2xl" color="white" mb={2}>
                Daniel Lengert
            </Heading>
            <Text color="teal.300" fontWeight="600" mb={4}>
                Co-Founder & Geschäftsführer
            </Text>
            <Text color="whiteAlpha.700" fontSize="sm" lineHeight="tall">
                "Sauberkeit schafft Vertrauen – und Vertrauen ist die Basis jeder guten Beziehung."
            </Text>
        </Box>

    </SimpleGrid>

    {/* Mission Statement unten */}
    <Box
        bg="gradient"
        bgGradient="linear(to-r, purple.600, teal.500)"
        borderRadius="3xl"
        p={{ base: 8, md: 12 }}
        textAlign="center"
        position="relative"
        overflow="hidden"
        _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "blackAlpha.300",
            zIndex: 0
        }}
    >
        <Box position="relative" zIndex={1}>
            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="white"
                fontWeight="600"
                lineHeight="tall"
                maxW="900px"
                mx="auto"
            >
                Von Treppenhaus über Büroräume bis zur Spezialreinigung – wir bringen{" "}
                <Box as="span" fontWeight="bold" color="yellow.300">
                    Bad Oeynhausen
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

