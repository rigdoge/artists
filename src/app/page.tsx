"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Social {
  instagram: string;
  website: string;
}

interface Artist {
  id: number;
  year: number;
  name: string;
  location: string;
  image: string;
  social: Social;
}

const sponsoredArtists: Artist[] = [
  {
    id: 6,
    year: 2021,
    name: "Yuki Tanaka",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    social: {
      instagram: "https://instagram.com/yukitanaka",
      website: "https://yukitanaka.art"
    }
  },
  {
    id: 1,
    year: 2025,
    name: "Marcus Rivera",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/marcusrivera",
      website: "https://marcusrivera.com"
    }
  },
  {
    id: 2,
    year: 2024,
    name: "Sarah Chen",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sarahchen",
      website: "https://sarahchen.art"
    }
  },
  {
    id: 3,
    year: 2023,
    name: "David Zhang",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/davidzhang",
      website: "https://davidzhang.art"
    }
  },
  {
    id: 4,
    year: 2022,
    name: "Nina Patel",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ninapatel",
      website: "https://nina.art"
    }
  },
  {
    id: 5,
    year: 2021,
    name: "Yuki Tanaka",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    social: {
      instagram: "https://instagram.com/yukitanaka",
      website: "https://yukitanaka.art"
    }
  }
];

// TattooMachine SVG Component
const TattooMachine = ({ isHovered, color = "#34D399" }: { isHovered: boolean; color?: string }) => (
  <div 
    style={{ 
      transform: 'rotate(30deg)',
      transformOrigin: 'center bottom',
      display: 'inline-block'
    }}
  >
    <motion.svg
      width="40"
      height="160"
      viewBox="0 0 80 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        filter: isHovered ? 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.5))' : 'none',
      }}
      initial={{ 
        y: 200,
        opacity: 0,
        scale: 0.8
      }}
      animate={{ 
        y: isHovered ? -5 : 0,
        opacity: 1,
        scale: 1
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
        delay: 0.8
      }}
    >
      {/* Top Connection */}
      <motion.rect
        x="30"
        y="20"
        width="20"
        height="30"
        fill="#1A1A1A"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      />

      {/* Main Body */}
      <motion.rect
        x="25"
        y="50"
        width="30"
        height="160"
        rx="2"
        fill="#000000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />

      {/* Gold Ring */}
      <motion.rect
        x="25"
        y="120"
        width="30"
        height="4"
        fill="#FFD700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      />

      {/* Grip Pattern */}
      {[...Array(4)].map((_, i) => (
        <motion.rect
          key={i}
          x="25"
          y={140 + i * 12}
          width="30"
          height="8"
          fill="#1A1A1A"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 + i * 0.1 }}
        />
      ))}

      {/* Bottom Section */}
      <motion.rect
        x="30"
        y="210"
        width="20"
        height="30"
        fill="#2C2C2C"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />

      {/* Needle */}
      <motion.g
        animate={{
          y: isHovered ? [0, -1, 0] : 0
        }}
        transition={{
          repeat: Infinity,
          duration: 0.05,
          ease: "linear",
          repeatType: "reverse"
        }}
      >
        <motion.rect
          x="38"
          y="240"
          width="4"
          height="20"
          fill="#A0A0A0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        />
        <motion.rect
          x="39"
          y="260"
          width="2"
          height="10"
          fill="#D4D4D4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        />
      </motion.g>

      {/* Power Button */}
      <motion.circle
        cx="40"
        cy="90"
        r="4"
        fill={color}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: isHovered ? [1, 1.2, 1] : 1
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      />

      {/* Highlights */}
      <motion.rect
        x="25"
        y="50"
        width="2"
        height="160"
        fill="#333333"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8 }}
      />
      <motion.rect
        x="53"
        y="50"
        width="2"
        height="160"
        fill="#333333"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8 }}
      />
    </motion.svg>
  </div>
);

const TimelineItem = ({ artist, index }: { artist: Artist; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 为每个艺术家分配不同的颜色
  const colors = ['#60A5FA', '#34D399', '#F87171', '#A78BFA'];
  const needleColor = colors[index % colors.length];

  return (
    <div className="group relative flex items-center gap-8 py-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-[-32px] bottom-[-32px] -translate-x-1/2">
        <div 
          className="w-[4px] h-full" 
          style={{
            background: `linear-gradient(
              to bottom,
              transparent,
              rgba(255, 255, 255, 0.3) 20%,
              rgba(255, 255, 255, 0.3) 80%,
              transparent
            )`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)'
          }}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-[1fr,auto,1fr] w-full gap-8 items-center">
        {/* Left side - Image */}
        <div className={index % 2 === 0 ? 'block' : 'opacity-0'}>
          <motion.div 
            className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-black/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              boxShadow: isHovered 
                ? `0 0 40px 2px ${needleColor}40, 0 0 80px 8px ${needleColor}20` 
                : `0 0 20px 1px ${needleColor}20, 0 0 40px 4px ${needleColor}10`
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                opacity: isHovered ? 0.5 : 0.2,
                backgroundPosition: isHovered ? "100%" : "0%"
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              style={{
                backgroundSize: "200% 100%"
              }}
            />
            <motion.img
              src={artist.image}
              alt={artist.name}
              className="relative w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <p className="text-lg text-white/90">{artist.location}</p>
                <div className="flex gap-3">
                  <a 
                    href={artist.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-blue-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href={artist.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Center - Year and Name */}
        <motion.div 
          className="relative z-10 -mx-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 whitespace-nowrap">
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              animate={{
                backgroundColor: isHovered ? `${needleColor}33` : "rgba(59, 130, 246, 0)",
                scale: isHovered ? 1.2 : 1,
              }}
            />
            <span className="text-blue-400 mr-2">{artist.year}</span>
            <span className="text-white/90">{artist.name}</span>
          </div>
        </motion.div>

        {/* Right side - Image */}
        <div className={index % 2 === 0 ? 'opacity-0' : 'block'}>
          <motion.div 
            className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-black/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              boxShadow: isHovered 
                ? `0 0 40px 2px ${needleColor}40, 0 0 80px 8px ${needleColor}20` 
                : `0 0 20px 1px ${needleColor}20, 0 0 40px 4px ${needleColor}10`
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                opacity: isHovered ? 0.5 : 0.2,
                backgroundPosition: isHovered ? "100%" : "0%"
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              style={{
                backgroundSize: "200% 100%"
              }}
            />
            <motion.img
              src={artist.image}
              alt={artist.name}
              className="relative w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <p className="text-lg text-white/90">{artist.location}</p>
                <div className="flex gap-3">
                  <a 
                    href={artist.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-blue-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href={artist.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Star component
const Star = ({ id, delay = 0 }: { id: string; delay?: number }) => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    setPosition({
      top: Math.random() * 100,
      left: Math.random() * 100
    });
  }, []);

  return (
    <motion.div
      key={id}
      className="star"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

// Firework component
const Firework = ({ id, delay = 0 }: { id: string; delay?: number }) => {
  const [position, setPosition] = React.useState({ left: 50 });
  const [sparkColors, setSparkColors] = React.useState<string[]>([]);
  const [particleColors, setParticleColors] = React.useState<string[]>([]);
  
  const colors = React.useMemo(() => [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead',
    '#ff9999', '#99ccff', '#ff99cc', '#99ff99', '#ffcc99'
  ], []);

  React.useEffect(() => {
    setPosition({ left: Math.random() * 80 + 10 });
    setSparkColors(Array(30).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]));
    setParticleColors(Array(50).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]));
  }, [colors]);

  return (
    <motion.div
      key={id}
      className="firework"
      style={{
        left: `${position.left}%`,
        animationDelay: `${delay}s`,
        background: colors[0],
        transform: 'scale(2)',
      }}
    >
      <div className="firework-trail" />
      {sparkColors.map((color, i) => (
        <motion.div
          key={`${id}-spark-${i}`}
          className="spark"
          style={{
            '--angle': `${(360 / 30) * i}deg`,
            '--distance': '200px',
            background: color,
            animation: `spark 1.2s ease-out forwards ${delay + 0.5}s`,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
            width: '4px',
            height: '4px',
          } as React.CSSProperties}
        />
      ))}
      {particleColors.map((color, i) => (
        <motion.div
          key={`${id}-particle-${i}`}
          className="firework-particle"
          style={{
            '--x': `${(Math.random() - 0.5) * 400}px`,
            '--y': `${(Math.random() - 0.5) * 400}px`,
            background: color,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
            animationDelay: `${delay + 0.5}s`,
            width: '3px',
            height: '3px',
          } as React.CSSProperties}
        />
      ))}
    </motion.div>
  );
};

// StarrySky component
const StarrySky = () => {
  const [elements] = React.useState(() => ({
    stars: Array.from({ length: 50 }, (_, i) => ({
      id: `star-${i}`,
      delay: i * 0.08
    })),
    fireworks: Array.from({ length: 6 }, (_, i) => ({
      id: `firework-${i}`,
      delay: i * 1.5
    }))
  }));

  return (
    <div className="starry-sky">
      {elements.stars.map((star) => (
        <Star key={star.id} id={star.id} delay={star.delay} />
      ))}
      {elements.fireworks.map((firework) => (
        <Firework key={firework.id} id={firework.id} delay={firework.delay} />
      ))}
    </div>
  );
};

// Add JoinUsButton component
const JoinUsButton = () => {
  return (
    <motion.div
      className="flex justify-center mt-20 mb-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                   hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300
                   shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = 'mailto:contact@example.com'}
      >
        Join Us
      </motion.button>
    </motion.div>
  );
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <StarrySky />
      <motion.div 
        className="container mx-auto px-4 py-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Title section with tattoo machine */}
        <div className="relative mb-32">
          <motion.h1
            className="text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Sponsored Artists
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-center text-white/60 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Supporting visionary creators shaping the future of art
          </motion.p>

          {/* Centered machine aligned with timeline */}
          <div className="max-w-5xl mx-auto relative">
            <div className="flex justify-center mb-32">
              <div className="relative">
                <div className="absolute left-1/2 top-[180px] -translate-x-1/2 w-[2px] h-[2000px] bg-gradient-to-b from-white/10 via-white/10 to-transparent" />
                <div className="relative" style={{ marginBottom: "60px" }}>
                  <TattooMachine isHovered={isHovered} color="#34D399" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {sponsoredArtists.map((artist, index) => (
            <TimelineItem key={artist.id} artist={artist} index={index} />
          ))}
          <JoinUsButton />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
