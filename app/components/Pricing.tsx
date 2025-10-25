'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button, VStack, HStack } from '@chakra-ui/react'

export default function Pricing() {
    return (
        <Box bg="gray.50" py={20}>
            <Container maxW="container.xl">
                
                {/* Überschrift */}
                <Box textAlign="center" mb={16}>
                    <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color="purple.500" 
                        textTransform="uppercase" 
                        letterSpacing="wider"
                        mb={3}
                    >
                        Unsere Preise
                    </Text>
                    <Heading 
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="bold"
                        color="gray.900"
                    >
                        Transparent & Fair
                    </Heading>
                    <Text fontSize="lg" color="gray.600" mt={4}>
                        Wählen Sie das passende Paket für Ihre Bedürfnisse
                    </Text>
                </Box>

                {/* 3 Preiskarten */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    
                    {/* Basic Paket */}
                    <Box
                        textAlign="center"
                        bg="white"
                        p={8}
                        borderRadius="2xl"
                        border="1px solid"
                        borderColor="gray.200"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
                            borderColor: "blue.300"
                        }}
                    >
                        <Box
                            bg="blue.50"
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="3xl"
                        >
                            🧹
                        </Box>
                        
                        <Heading fontSize="2xl" mb={2} color="gray.900">
                            Basic
                        </Heading>
                        
                        <Text color="gray.500" mb={6} fontSize="sm">
                            Für kleine Wohnungen
                        </Text>

                        <Box mb={6}>
                            <Text fontSize="5xl" fontWeight="bold" color="gray.900">
                                49€
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                                pro Reinigung
                            </Text>
                        </Box>

                        <VStack gap={3} mb={8} align="stretch">
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Bis 50m²</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Grundreinigung</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">2 Stunden</Text>
                            </HStack>
                        </VStack>

                        <Button
                            w="full"
                            size="lg"
                            bg="blue.500"
                            color="white"
                            _hover={{ bg: "blue.600" }}
                        >
                            Jetzt buchen
                        </Button>
                    </Box>

                    {/* Standard Paket (Beliebt) */}
                    <Box
                        textAlign="center"
                        bg="white"
                        p={8}
                        borderRadius="2xl"
                        border="2px solid"
                        borderColor="purple.400"
                        position="relative"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 60px rgba(165, 31, 183, 0.2)",
                        }}
                    >
                        {/* Beliebt Badge */}
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
                            BELIEBT
                        </Box>

                        <Box
                            bg="purple.50"
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="3xl"
                        >
                            💎
                        </Box>
                        
                        <Heading fontSize="2xl" mb={2} color="gray.900">
                            Standard
                        </Heading>
                        
                        <Text color="gray.500" mb={6} fontSize="sm">
                            Für die meisten Haushalte
                        </Text>

                        <Box mb={6}>
                            <Text fontSize="5xl" fontWeight="bold" color="gray.900">
                                99€
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                                pro Reinigung
                            </Text>
                        </Box>

                        <VStack gap={3} mb={8} align="stretch">
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Bis 100m²</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Tiefenreinigung</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">4 Stunden</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Fensterreinigung</Text>
                            </HStack>
                        </VStack>

                        <Button
                            w="full"
                            size="lg"
                            bg="purple.500"
                            color="white"
                            _hover={{ bg: "purple.600" }}
                        >
                            Jetzt buchen
                        </Button>
                    </Box>

                    {/* Premium Paket */}
                    <Box
                        textAlign="center"
                        bg="white"
                        p={8}
                        borderRadius="2xl"
                        border="1px solid"
                        borderColor="gray.200"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 60px rgba(20, 184, 166, 0.15)",
                            borderColor: "teal.300"
                        }}
                    >
                        <Box
                            bg="teal.50"
                            w="60px"
                            h="60px"
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={6}
                            mx="auto"
                            fontSize="3xl"
                        >
                            ⭐
                        </Box>
                        
                        <Heading fontSize="2xl" mb={2} color="gray.900">
                            Premium
                        </Heading>
                        
                        <Text color="gray.500" mb={6} fontSize="sm">
                            Für große Wohnungen
                        </Text>

                        <Box mb={6}>
                            <Text fontSize="5xl" fontWeight="bold" color="gray.900">
                                149€
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                                pro Reinigung
                            </Text>
                        </Box>

                        <VStack gap={3} mb={8} align="stretch">
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Bis 150m²</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Premium-Reinigung</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">6 Stunden</Text>
                            </HStack>
                            <HStack>
                                <Text>✓</Text>
                                <Text color="gray.600">Alle Extras inklusive</Text>
                            </HStack>
                        </VStack>

                        <Button
                            w="full"
                            size="lg"
                            bg="teal.500"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            Jetzt buchen
                        </Button>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}