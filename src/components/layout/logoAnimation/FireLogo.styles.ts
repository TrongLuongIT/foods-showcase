import styled, { keyframes } from "styled-components";
import {motion} from "framer-motion";

export const lavaBurn = keyframes`
  0% {
    text-shadow: 0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #f80, -2px -15px 11px #f00;
  }
  50% { 
    text-shadow: 0 0 4px #fff, 0 -4px 4px #ff3, 2px -8px 6px #f80, -2px -12px 11px #f00;
  }
  100% { 
    text-shadow: 0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #f80, -2px -15px 11px #f00;
  }
`;

export const newLava = keyframes`
  0% { 
    text-shadow: 
      1px 1px 2px rgba(0,0,0,1), 
      0 -2px 4px #ff4500, 
      0 -4px 8px #b22222; 
  }
  50% { 
    text-shadow: 
      1px 1px 2px rgba(0,0,0,1), 
      0 -3px 6px #ff4500, 
      0 -6px 12px #8b0000; 
  }
  100% { 
    text-shadow: 
      1px 1px 2px rgba(0,0,0,1), 
      0 -2px 4px #ff4500, 
      0 -4px 8px #b22222; 
  }
`;

// --- Hiệu ứng xoáy Plasma cho Logo ---
export const plasmaGlow = keyframes`
  0% { box-shadow: 0 0 20px #4facfe, 0 0 40px #00f2fe, inset 0 0 10px #fff; }
  50% { box-shadow: 0 0 40px #4facfe, 0 0 70px #00f2fe, inset 0 0 20px #fff; }
  100% { box-shadow: 0 0 20px #4facfe, 0 0 40px #00f2fe, inset 0 0 10px #fff; }
`;

export const LogoContainer = styled(motion.div)`
  z-index: 10;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: absolute; /* Giữ logo độc lập để không đẩy chữ */
  left: 0;
  animation: ${plasmaGlow} 1.5s infinite ease-in-out;
  filter: brightness(0.8) contrast(1.1);
`;

export const Letter = styled(motion.span)`
  display: inline-block;
  will-change: transform, opacity;
  animation: ${lavaBurn} 1s infinite alternate;
  opacity: 1;
`;
