'use client';

import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

const float1 = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-60px) translateX(40px);
  }
`;

const float2 = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-80px) translateX(-30px);
  }
`;

const float3 = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-50px) translateX(50px);
  }
`;

const float4 = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-70px) translateX(-40px);
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
`;

interface Bubble {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  animation: any;
  fadeDelay: number;
}

const generateBubbles = (): Bubble[] => {
  const animations = [float1, float2, float3, float4];
  const bubbles: Bubble[] = [];
  
  for (let i = 0; i < 5; i++) {
    bubbles.push({
      size: Math.random() * 100 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}vh`,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8,
      animation: animations[Math.floor(Math.random() * animations.length)],
      fadeDelay: Math.random() * 3,
    });
  }
  
  return bubbles;
};

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles());
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <>
      {bubbles.map((bubble, index) => (
        <Box
          key={index}
          position="fixed"
          left={bubble.left}
          top={bubble.top}
          width={`${bubble.size}px`}
          height={`${bubble.size}px`}
          borderRadius="50%"
          background="
            radial-gradient(
              circle at 25% 25%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0.4) 10%,
              rgba(200, 240, 255, 0.3) 25%,
              rgba(220, 200, 255, 0.2) 40%,
              rgba(255, 220, 240, 0.15) 60%,
              rgba(255, 255, 255, 0.05) 100%
            )
          "
          border="2px solid"
          borderColor="rgba(255, 255, 255, 0.4)"
          boxShadow="
            inset -8px -8px 20px rgba(200, 240, 255, 0.3),
            inset 3px 3px 10px rgba(255, 255, 255, 0.5),
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 2px 8px rgba(255, 255, 255, 0.2)
          "
          pointerEvents="none"
          zIndex={-1}
          animation={`${bubble.animation} ${bubble.duration}s ease-in-out ${bubble.delay}s infinite, ${fadeInOut} 3s ease-in-out ${bubble.fadeDelay}s infinite`}
          _before={{
            content: '""',
            position: 'absolute',
            top: '18%',
            left: '22%',
            width: '28%',
            height: '28%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
            filter: 'blur(1px)',
          }}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '25%',
            right: '28%',
            width: '18%',
            height: '18%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent 60%)',
            filter: 'blur(2px)',
          }}
        />
      ))}
    </>
  );
}