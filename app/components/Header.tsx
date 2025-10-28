 'use client'

import { Box, Container, Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkWidth = () => {
            setIsSmallScreen(window.innerWidth < 550)
        }
        
        checkWidth()
        window.addEventListener('resize', checkWidth)
        
        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return (
        <Box
            bg="white"
            color="black"
            h="80px"
            position="sticky"
            top={0}
            zIndex={1000}
            borderBottom="1px solid"
            borderColor="blackAlpha.400"
            display="flex"
            alignItems="center"
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">

                    <Link href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <img
                            src="/CleanItUp2.png"
                            alt="CleanItUp Logo"
                            style={{
                                height: isSmallScreen ? '6vh' : '8vh',
                                width: 'auto',
                                display: 'block',
                                marginTop: "15px",
                                transition: 'height 0.3s ease',
                                cursor: 'pointer'
                            }}
                        />
                    </Link>

                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <Button
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
                            {isSmallScreen ? 'Zur Anfrage' : 'Zur Anfrage - 1 Minute'}
                        </Button>
                    </Link>

                </Flex>
            </Container>
        </Box>
    )
} 