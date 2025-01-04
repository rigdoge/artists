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
    id: 12,
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
    id: 11,
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
    id: 1,
    year: 2023,
    name: "Sarah Chen",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sarahchen",
      website: "https://sarahchen.art"
    }
  },
  {
    id: 2,
    year: 2023,
    name: "Marcus Rivera",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/marcusrivera",
      website: "https://marcusrivera.com"
    }
  },
  {
    id: 3,
    year: 2022,
    name: "Yuki Tanaka",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    social: {
      instagram: "https://instagram.com/yukitanaka",
      website: "https://yukitanaka.art"
    }
  },
  {
    id: 4,
    year: 2022,
    name: "Elena Kowalski",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    social: {
      instagram: "https://instagram.com/elenakowalski",
      website: "https://elena.art"
    }
  },
  {
    id: 5,
    year: 2021,
    name: "David Zhang",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/davidzhang",
      website: "https://davidzhang.art"
    }
  },
  {
    id: 6,
    year: 2021,
    name: "Isabella Santos",
    location: "São Paulo, Brazil",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    social: {
      instagram: "https://instagram.com/isabellasantos",
      website: "https://isabella.art"
    }
  },
  {
    id: 7,
    year: 2020,
    name: "Alex Morgan",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/alexmorgan",
      website: "https://alexmorgan.art"
    }
  },
  {
    id: 8,
    year: 2020,
    name: "Nina Patel",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ninapatel",
      website: "https://nina.art"
    }
  },
  {
    id: 9,
    year: 2019,
    name: "Carlos Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&q=80",
    social: {
      instagram: "https://instagram.com/carlosrodriguez",
      website: "https://carlos.art"
    }
  },
  {
    id: 10,
    year: 2019,
    name: "Sophie Laurent",
    location: "Montreal, Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sophielaurent",
      website: "https://sophie.art"
    }
  }
];

// Tattoo Needle SVG Component
const TattooNeedle = ({ isHovered, color = "#34D399" }: { isHovered: boolean; color?: string }) => (
  <motion.svg
    width="12"
    height="120"
    viewBox="0 0 24 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2 -translate-x-1/2"
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
    {/* Multiple needle tips */}
    <motion.g
      animate={{
        y: isHovered ? [0, -2, 0] : 0
      }}
      transition={{
        repeat: Infinity,
        duration: 0.08,
        ease: "linear",
        repeatType: "reverse"
      }}
    >
      {/* Needle array */}
      {[...Array(9)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${8.5 + i * 0.8} 50 L${8.9 + i * 0.8} 15 L${9.3 + i * 0.8} 50`}
          fill="#D1D5DB"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.9
          }}
          transition={{
            delay: 1 + i * 0.1
          }}
        />
      ))}
    </motion.g>

    {/* Rest of the components with initial animations */}
    <motion.path
      d="M7 50 L7 70 L17 70 L17 50 L7 50"
      fill="rgba(255, 255, 255, 0.2)"
      initial={{ opacity: 0 }}
      animate={{
        fill: isHovered ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)",
        opacity: 1
      }}
      transition={{ delay: 1.2 }}
    />

    <motion.path
      d="M5 70 L5 180 L19 180 L19 70 L5 70"
      fill="rgba(218, 165, 32, 0.8)"
      initial={{ opacity: 0 }}
      animate={{
        fill: isHovered ? "rgba(218, 165, 32, 0.9)" : "rgba(218, 165, 32, 0.8)",
        opacity: 1
      }}
      transition={{ delay: 1.3 }}
    />

    <motion.rect
      x="3"
      y="90"
      width="2"
      height="60"
      fill="rgba(0, 0, 0, 0.3)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    />
    <motion.rect
      x="19"
      y="90"
      width="2"
      height="60"
      fill="rgba(0, 0, 0, 0.3)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    />

    <motion.rect
      x="7"
      y="120"
      width="10"
      height="40"
      fill={color}
      initial={{ opacity: 0 }}
      animate={{
        fillOpacity: isHovered ? [0.6, 0.8, 0.6] : 0.6,
        opacity: 1,
        height: isHovered ? [40, 38, 40] : 40
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
        delay: 1.5
      }}
    />

    <motion.path
      d="M6 180 L6 220 L18 220 L18 180 L6 180"
      fill="rgba(255, 255, 255, 0.15)"
      initial={{ opacity: 0 }}
      animate={{
        fill: isHovered ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.15)",
        opacity: 1
      }}
      transition={{ delay: 1.6 }}
    />

    {/* Metallic details with fade in */}
    {[85, 100, 150].map((y, i) => (
      <motion.rect
        key={i}
        x="4"
        y={y}
        width="16"
        height="2"
        fill="rgba(255, 255, 255, 0.4)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 + i * 0.1 }}
      />
    ))}
  </motion.svg>
);

const TimelineItem = ({ artist, index }: { artist: Artist; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 为每个艺术家分配不同的颜色
  const colors = ['#60A5FA', '#34D399', '#F87171', '#A78BFA'];
  const needleColor = colors[index % colors.length];

  return (
    <div className="group relative flex items-center gap-8 py-16">
      {/* Timeline line only */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
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
const Star = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="star"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`
    }}
  />
);

// Firework component
const Firework = ({ delay = 0 }: { delay?: number }) => {
  const colors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead',
    '#ff9999', '#99ccff', '#ff99cc', '#99ff99', '#ffcc99'
  ];
  const sparkCount = 20;
  const particleCount = 30;
  
  return (
    <motion.div
      className="firework"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        animationDelay: `${delay}s`,
        background: colors[Math.floor(Math.random() * colors.length)]
      }}
    >
      <div className="firework-trail" />
      {[...Array(sparkCount)].map((_, i) => (
        <motion.div
          key={i}
          className="spark"
          style={{
            '--angle': `${(360 / sparkCount) * i}deg`,
            '--distance': `${100 + Math.random() * 50}px`,
            background: colors[Math.floor(Math.random() * colors.length)],
            animation: `spark 0.8s ease-out forwards ${delay + 0.5}s`,
            boxShadow: `0 0 4px ${colors[Math.floor(Math.random() * colors.length)]}`,
          } as React.CSSProperties}
        />
      ))}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="firework-particle"
          style={{
            '--x': `${(Math.random() - 0.5) * 200}px`,
            '--y': `${(Math.random() - 0.5) * 200}px`,
            background: colors[Math.floor(Math.random() * colors.length)],
            boxShadow: `0 0 4px ${colors[Math.floor(Math.random() * colors.length)]}`,
            animationDelay: `${delay + 0.5}s`
          } as React.CSSProperties}
        />
      ))}
    </motion.div>
  );
};

// StarrySky component
const StarrySky = () => {
  return (
    <div className="starry-sky">
      {[...Array(50)].map((_, i) => (
        <Star key={`star-${i}`} delay={Math.random() * 4} />
      ))}
      {[...Array(4)].map((_, i) => (
        <Firework key={`firework-${i}`} delay={Math.random() * 8} />
      ))}
    </div>
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
        {/* Title section with needle */}
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

          {/* Centered needle at the bottom of the title section */}
          <div className="absolute left-1/2 -bottom-20 -translate-x-1/2">
            <TattooNeedle isHovered={isHovered} color="#34D399" />
          </div>
        </div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {sponsoredArtists.map((artist, index) => (
            <TimelineItem key={artist.id} artist={artist} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
