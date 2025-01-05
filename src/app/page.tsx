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
    id: 1,
    year: 2025,
    name: "Marcus Rivera",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/marcusrivera.ink",
      website: "https://marcusrivera.ink"
    }
  },
  {
    id: 2,
    year: 2025,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    social: {
      instagram: "https://instagram.com/yukitanaka.tattoo",
      website: "https://yukitanaka.ink"
    }
  },
  {
    id: 3,
    year: 2025,
    name: "Sofia Martinez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sofiamartinez.tattoo",
      website: "https://sofiamartinez.ink"
    }
  },
  {
    id: 4,
    year: 2024,
    name: "Alexander Kim",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/alexanderkim.ink",
      website: "https://alexanderkim.ink"
    }
  },
  {
    id: 5,
    year: 2024,
    name: "Emma Thompson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    social: {
      instagram: "https://instagram.com/emmathompson",
      website: "https://emmathompson.art"
    }
  },
  {
    id: 6,
    year: 2024,
    name: "Lucas Silva",
    location: "São Paulo, Brazil",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/lucassilva",
      website: "https://lucassilva.art"
    }
  },
  {
    id: 7,
    year: 2024,
    name: "Aria Chen",
    location: "Shanghai, China",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ariachen",
      website: "https://ariachen.art"
    }
  },
  {
    id: 8,
    year: 2023,
    name: "Gabriel Santos",
    location: "Mexico City, Mexico",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&q=80",
    social: {
      instagram: "https://instagram.com/gabrielsantos",
      website: "https://gabrielsantos.art"
    }
  },
  {
    id: 9,
    year: 2023,
    name: "Isabella Romano",
    location: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    social: {
      instagram: "https://instagram.com/isabellaromano",
      website: "https://isabellaromano.art"
    }
  },
  {
    id: 10,
    year: 2023,
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&q=80",
    social: {
      instagram: "https://instagram.com/liamoconnor",
      website: "https://liamoconnor.art"
    }
  },
  {
    id: 11,
    year: 2023,
    name: "Nina Petrova",
    location: "Moscow, Russia",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ninapetrova",
      website: "https://ninapetrova.art"
    }
  },
  {
    id: 12,
    year: 2023,
    name: "Kai Wong",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    social: {
      instagram: "https://instagram.com/kaiwong",
      website: "https://kaiwong.art"
    }
  },
  {
    id: 13,
    year: 2022,
    name: "Sophie Laurent",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sophielaurent",
      website: "https://sophielaurent.art"
    }
  },
  {
    id: 14,
    year: 2022,
    name: "Marco Rossi",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1507114845806-0347f6150324?w=800&q=80",
    social: {
      instagram: "https://instagram.com/marcorossi",
      website: "https://marcorossi.art"
    }
  },
  {
    id: 15,
    year: 2022,
    name: "Aisha Patel",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    social: {
      instagram: "https://instagram.com/aishapatel",
      website: "https://aishapatel.art"
    }
  },
  {
    id: 16,
    year: 2022,
    name: "Hans Weber",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80",
    social: {
      instagram: "https://instagram.com/hansweber",
      website: "https://hansweber.art"
    }
  },
  {
    id: 17,
    year: 2022,
    name: "Luna Park",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/lunapark",
      website: "https://lunapark.art"
    }
  },
  {
    id: 18,
    year: 2021,
    name: "Oliver Smith",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&q=80",
    social: {
      instagram: "https://instagram.com/oliversmith",
      website: "https://oliversmith.art"
    }
  },
  {
    id: 19,
    year: 2021,
    name: "Maya Patel",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
    social: {
      instagram: "https://instagram.com/mayapatel",
      website: "https://mayapatel.art"
    }
  },
  {
    id: 20,
    year: 2021,
    name: "Leo Chen",
    location: "Taipei, Taiwan",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80",
    social: {
      instagram: "https://instagram.com/leochen",
      website: "https://leochen.art"
    }
  },
  {
    id: 21,
    year: 2021,
    name: "Zara Ahmed",
    location: "Istanbul, Turkey",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    social: {
      instagram: "https://instagram.com/zaraahmed",
      website: "https://zaraahmed.art"
    }
  },
  {
    id: 22,
    year: 2021,
    name: "Felix Müller",
    location: "Munich, Germany",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    social: {
      instagram: "https://instagram.com/felixmuller",
      website: "https://felixmuller.art"
    }
  },
  {
    id: 23,
    year: 2020,
    name: "Elena Popov",
    location: "St. Petersburg, Russia",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    social: {
      instagram: "https://instagram.com/elenapopov",
      website: "https://elenapopov.art"
    }
  },
  {
    id: 24,
    year: 2020,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=800&q=80",
    social: {
      instagram: "https://instagram.com/carlosrodriguez",
      website: "https://carlosrodriguez.art"
    }
  },
  {
    id: 25,
    year: 2020,
    name: "Mia Zhang",
    location: "Beijing, China",
    image: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=800&q=80",
    social: {
      instagram: "https://instagram.com/miazhang",
      website: "https://miazhang.art"
    }
  },
  {
    id: 26,
    year: 2020,
    name: "Thomas Anderson",
    location: "Stockholm, Sweden",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80",
    social: {
      instagram: "https://instagram.com/thomasanderson",
      website: "https://thomasanderson.art"
    }
  },
  {
    id: 27,
    year: 2020,
    name: "Sakura Yamamoto",
    location: "Osaka, Japan",
    image: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sakurayamamoto",
      website: "https://sakurayamamoto.art"
    }
  },
  {
    id: 28,
    year: 2019,
    name: "David Cohen",
    location: "Tel Aviv, Israel",
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=800&q=80",
    social: {
      instagram: "https://instagram.com/davidcohen",
      website: "https://davidcohen.art"
    }
  },
  {
    id: 29,
    year: 2019,
    name: "Maria Santos",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1520512202623-51c5c53957df?w=800&q=80",
    social: {
      instagram: "https://instagram.com/mariasantos",
      website: "https://mariasantos.art"
    }
  },
  {
    id: 30,
    year: 2019,
    name: "James Wilson",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/jameswilson",
      website: "https://jameswilson.art"
    }
  },
  {
    id: 31,
    year: 2019,
    name: "Anna Kowalski",
    location: "Warsaw, Poland",
    image: "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?w=800&q=80",
    social: {
      instagram: "https://instagram.com/annakowalski",
      website: "https://annakowalski.art"
    }
  },
  {
    id: 32,
    year: 2019,
    name: "Luis Garcia",
    location: "Buenos Aires, Argentina",
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/luisgarcia",
      website: "https://luisgarcia.art"
    }
  },
  {
    id: 33,
    year: 2018,
    name: "Eva Novak",
    location: "Prague, Czech Republic",
    image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=800&q=80",
    social: {
      instagram: "https://instagram.com/evanovak",
      website: "https://evanovak.art"
    }
  },
  {
    id: 34,
    year: 2018,
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ahmedhassan",
      website: "https://ahmedhassan.art"
    }
  },
  {
    id: 35,
    year: 2018,
    name: "Lisa Wang",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1521252659862-eec69941b071?w=800&q=80",
    social: {
      instagram: "https://instagram.com/lisawang",
      website: "https://lisawang.art"
    }
  },
  {
    id: 36,
    year: 2018,
    name: "Michael Brown",
    location: "Melbourne, Australia",
    image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&q=80",
    social: {
      instagram: "https://instagram.com/michaelbrown",
      website: "https://michaelbrown.art"
    }
  },
  {
    id: 37,
    year: 2018,
    name: "Sara Nielsen",
    location: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=800&q=80",
    social: {
      instagram: "https://instagram.com/saranielsen",
      website: "https://saranielsen.art"
    }
  },
  {
    id: 38,
    year: 2017,
    name: "Ricardo Ferreira",
    location: "Rio de Janeiro, Brazil",
    image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ricardoferreira",
      website: "https://ricardoferreira.art"
    }
  },
  {
    id: 39,
    year: 2017,
    name: "Ava Johnson",
    location: "Vancouver, Canada",
    image: "https://images.unsplash.com/photo-1536096928601-99bac26a838b?w=800&q=80",
    social: {
      instagram: "https://instagram.com/avajohnson",
      website: "https://avajohnson.art"
    }
  },
  {
    id: 40,
    year: 2017,
    name: "Matteo Conti",
    location: "Florence, Italy",
    image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=800&q=80",
    social: {
      instagram: "https://instagram.com/matteoconti",
      website: "https://matteoconti.art"
    }
  },
  {
    id: 41,
    year: 2017,
    name: "Sophia Lee",
    location: "Busan, South Korea",
    image: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sophialee",
      website: "https://sophialee.art"
    }
  },
  {
    id: 42,
    year: 2017,
    name: "Daniel Schmidt",
    location: "Vienna, Austria",
    image: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?w=800&q=80",
    social: {
      instagram: "https://instagram.com/danielschmidt",
      website: "https://danielschmidt.art"
    }
  },
  {
    id: 43,
    year: 2016,
    name: "Emma Wilson",
    location: "Edinburgh, Scotland",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&q=80",
    social: {
      instagram: "https://instagram.com/emmawilson",
      website: "https://emmawilson.art"
    }
  },
  {
    id: 44,
    year: 2016,
    name: "Luca Bianchi",
    location: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?w=800&q=80",
    social: {
      instagram: "https://instagram.com/lucabianchi",
      website: "https://lucabianchi.art"
    }
  },
  {
    id: 45,
    year: 2016,
    name: "Olivia Taylor",
    location: "Auckland, New Zealand",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80",
    social: {
      instagram: "https://instagram.com/oliviataylor",
      website: "https://oliviataylor.art"
    }
  },
  {
    id: 46,
    year: 2016,
    name: "Hiroshi Sato",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?w=800&q=80",
    social: {
      instagram: "https://instagram.com/hiroshisato",
      website: "https://hiroshisato.art"
    }
  },
  {
    id: 47,
    year: 2016,
    name: "Isabel Torres",
    location: "Santiago, Chile",
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&q=80",
    social: {
      instagram: "https://instagram.com/isabeltorres",
      website: "https://isabeltorres.art"
    }
  },
  {
    id: 48,
    year: 2015,
    name: "Viktor Petrov",
    location: "Kiev, Ukraine",
    image: "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?w=800&q=80",
    social: {
      instagram: "https://instagram.com/viktorpetrov",
      website: "https://viktorpetrov.art"
    }
  },
  {
    id: 49,
    year: 2015,
    name: "Nina Larsson",
    location: "Oslo, Norway",
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ninalarsson",
      website: "https://ninalarsson.art"
    }
  },
  {
    id: 50,
    year: 2015,
    name: "Alex Morgan",
    location: "Amsterdam, Netherlands",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80",
    social: {
      instagram: "https://instagram.com/alexmorgan",
      website: "https://alexmorgan.art"
    }
  },
  {
    id: 98,
    year: 2015,
    name: "Raven Black",
    location: "Portland, USA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    social: {
      instagram: "https://instagram.com/ravenblack.ink",
      website: "https://ravenblack.ink"
    }
  },
  {
    id: 99,
    year: 2015,
    name: "Luna Wolf",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/lunawolf.tattoo",
      website: "https://lunawolf.ink"
    }
  },
  {
    id: 100,
    year: 2015,
    name: "Storm Shadow",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=800&q=80",
    social: {
      instagram: "https://instagram.com/stormshadow.ink",
      website: "https://stormshadow.ink"
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
                <div className="flex gap-4">
                  <a 
                    href={artist.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href={artist.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                    </svg>
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
                <div className="flex gap-4">
                  <a 
                    href={artist.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href={artist.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                    </svg>
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
              Featured Tattoo Artists
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-center text-white/60 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Celebrating the world's most innovative and talented tattoo artists
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
