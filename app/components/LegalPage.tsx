'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function LegalPage({ 
    title, 
    children 
}: { 
    title: string
    children: React.ReactNode 
}) {
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
            minH="100vh" 
            bg="gray.50"
            py={isSmallScreen ? "8vh" : "10vh"}
            px={isSmallScreen ? "5%" : "0"}
        >
            <Container maxW={isSmallScreen ? "100%" : "container.md"}>
                
                {/* Back Button */}
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Text 
                        fontSize={isSmallScreen ? "3.5vw" : "14px"}
                        color="purple.500" 
                        mb="4vh"
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        ← Zurück zur Startseite
                    </Text>
                </Link>

                {/* Content Card */}
                <Box 
                    bg="white" 
                    p={isSmallScreen ? "6%" : "8%"}
                    borderRadius="2xl"
                    boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                >
                    {/* Title */}
                    <Heading 
                        fontSize={isSmallScreen ? "7vw" : "4xl"}
                        mb="4vh"
                        color="black"
                    >
                        {title}
                    </Heading>

                    {/* Content */}
                    <VStack 
                        align="stretch" 
                        gap="3vh"
                        fontSize={isSmallScreen ? "4vw" : "16px"}
                        color="gray.700"
                        lineHeight="tall"
                    >
                        {children}
                    </VStack>

                </Box>

                {/* Footer Info */}
                <Text 
                    textAlign="center" 
                    fontSize={isSmallScreen ? "3vw" : "14px"}
                    color="gray.500" 
                    mt="4vh"
                >
                    Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
                </Text>

            </Container>
        </Box>
    )
}