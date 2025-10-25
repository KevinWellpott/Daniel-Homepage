'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'

export default function Testimonials() {
    return (
        <Box bg="tranparent" py={32} position="relative" overflow="hidden">



            <Container maxW="container.xl" position="relative" zIndex={1}>

                {/* Überschrift */}
                <Box textAlign="center" mb={20}>
                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="purple.400"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={3}
                    >
                        Kundenstimmen
                    </Text>
                    <Heading
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        color="white"
                        mb={4}
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
                                height: "24px",
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
                    <Text fontSize="xl" color="whiteAlpha.700" maxW="700px" mx="auto">
                        Über 200 zufriedene Kunden vertrauen auf unsere Arbeit
                    </Text>
                </Box>

                {/* Testimonial Cards - 3er Grid */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>

                    {/* Testimonial 1 */}
                    <Box
                        bg="whiteAlpha.50"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        borderRadius="2xl"
                        p={8}
                        position="relative"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-12px)",
                            borderColor: "purple.400",
                            boxShadow: "0 30px 80px rgba(168, 85, 247, 0.4)"
                        }}
                    >
                        {/* Quotes Icon */}
                        <Text
                            fontSize="6xl"
                            color="purple.400"
                            opacity={0.3}
                            position="absolute"
                            top={4}
                            left={6}
                            lineHeight={1}
                        >
                            "
                        </Text>

                        <Box position="relative" zIndex={1}>
                            {/* Stars */}
                            <Text fontSize="2xl" mb={4} color="yellow.400">
                                ⭐⭐⭐⭐⭐
                            </Text>

                            <Text
                                color="white"
                                fontSize="lg"
                                mb={6}
                                lineHeight="tall"
                                fontStyle="italic"
                            >
                                Absolut begeistert! Unser Büro erstrahlt in neuem Glanz. Das Team ist pünktlich, zuverlässig und extrem gründlich.
                            </Text>

                            {/* Avatar & Name */}
                            <Box display="flex" alignItems="center" gap={4}>
                                <Box
                                    w="50px"
                                    h="50px"
                                    borderRadius="full"
                                    bg="purple.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="2xl"
                                >
                                    👩‍💼
                                </Box>
                                <Box>
                                    <Text color="white" fontWeight="600">
                                        Sarah.B
                                    </Text>
                                    <Text color="whiteAlpha.600" fontSize="sm">
                                        Gewerblicher Auftrag
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Testimonial 2 - Featured (höher) */}
                    <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        border="2px solid"
                        borderColor="purple.500"
                        borderRadius="2xl"
                        p={8}
                        position="relative"
                        transform={{ md: "translateY(-20px)" }}
                        transition="all 0.3s ease"
                        _hover={{
                            transform: { md: "translateY(-32px)" },
                            boxShadow: "0 40px 100px rgba(168, 85, 247, 0.5)"
                        }}
                    >
                        {/* Badge */}
                        <Box
                            position="absolute"
                            top="-12px"
                            left="50%"
                            transform="translateX(-50%)"
                            bg="purple.500"
                            color="white"
                            px={4}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="bold"
                        >
                            ⚡ TOP BEWERTUNG
                        </Box>

                        {/* Quotes Icon */}
                        <Text
                            fontSize="6xl"
                            color="purple.400"
                            opacity={0.3}
                            position="absolute"
                            top={4}
                            left={6}
                            lineHeight={1}
                        >
                            "
                        </Text>

                        <Box position="relative" zIndex={1}>
                            {/* Stars */}
                            <Text fontSize="2xl" mb={4} color="yellow.400">
                                ⭐⭐⭐⭐⭐
                            </Text>

                            <Text
                                color="white"
                                fontSize="lg"
                                mb={6}
                                lineHeight="tall"
                                fontStyle="italic"
                            >
                                Seit 2 Jahren lassen wir unser Treppenhaus von CleanItUp reinigen. Immer perfekt, immer freundlich. Kann ich nur weiterempfehlen!
                            </Text>

                            {/* Avatar & Name */}
                            <Box display="flex" alignItems="center" gap={4}>
                                <Box
                                    w="50px"
                                    h="50px"
                                    borderRadius="full"
                                    bg="teal.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="2xl"
                                >
                                    👨‍🔧
                                </Box>
                                <Box>
                                    <Text color="white" fontWeight="600">
                                        Hassan.M
                                    </Text>
                                    <Text color="whiteAlpha.600" fontSize="sm">
                                        Privatauftrag
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Testimonial 3 */}
                    <Box
                        bg="whiteAlpha.50"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        borderRadius="2xl"
                        p={8}
                        position="relative"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-12px)",
                            borderColor: "teal.400",
                            boxShadow: "0 30px 80px rgba(20, 184, 166, 0.4)"
                        }}
                    >
                        {/* Quotes Icon */}
                        <Text
                            fontSize="6xl"
                            color="teal.400"
                            opacity={0.3}
                            position="absolute"
                            top={4}
                            left={6}
                            lineHeight={1}
                        >
                            "
                        </Text>

                        <Box position="relative" zIndex={1}>
                            {/* Stars */}
                            <Text fontSize="2xl" mb={4} color="yellow.400">
                                ⭐⭐⭐⭐⭐
                            </Text>

                            <Text
                                color="white"
                                fontSize="lg"
                                mb={6}
                                lineHeight="tall"
                                fontStyle="italic"
                            >
                                Professionell, schnell und das Ergebnis ist einfach wow! Meine Fenster haben noch nie so geglänzt. Danke!
                            </Text>

                            {/* Avatar & Name */}
                            <Box display="flex" alignItems="center" gap={4}>
                                <Box
                                    w="50px"
                                    h="50px"
                                    borderRadius="full"
                                    bg="pink.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="2xl"
                                >
                                    👩‍🏫
                                </Box>
                                <Box>
                                    <Text color="white" fontWeight="600">
                                        Anna.X
                                    </Text>
                                    <Text color="whiteAlpha.600" fontSize="sm">
                                        Privatauftrag
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </SimpleGrid>

                {/* Bottom CTA */}
                <Box textAlign="center" mt={20}>
                    <Box
                        display="inline-block"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        borderRadius="2xl"
                        px={8}
                        py={6}
                    >

                        <Text color="white" fontSize="xl" fontWeight="600" mb={2}>
                            Werden Sie Teil unserer Clean Customers!
                        </Text>
                        <Text color="whiteAlpha.600">
                            Überzeugen Sie sich selbst von unserer Qualität
                        </Text>
                        <Button

                            size="md"
                            bg="transparent"
                            color="white"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                            borderRadius="full"
                            px={6}
                            fontWeight="normal"
                            transition="all 0.3s ease"
                            marginTop="14px"
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
                            Zur Anfrage - 1 Minute
                        </Button>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}