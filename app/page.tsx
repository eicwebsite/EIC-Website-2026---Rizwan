"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  PhoneCall,
  Mail,
  MapPinned,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Users,
  Compass,
  FileText,
  Bookmark,
  Globe,
  Star,
  ArrowUpRight,
  BookOpen,
  Clock,
  Calendar,
  Award,
  Plus,
  Minus,
  Search
} from "lucide-react";

// Modern, minimalist vector SVGs representing world landmarks
const OperaHouseIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20h18" />
    <path d="M4 20c1.5-3 5.5-5 8.5-5M7 20c2-4 7.5-6.5 11-6.5M11 20c1.5-3 5-4.5 8-4.5" />
    <path d="M12 15c1.5-2.5 4-3.5 6-3.5" />
  </svg>
);

const MapleLeafIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-3" />
    <path d="M12 19c-1.5-1.5-3.5-2-4.5-3a2.5 2.5 0 01.5-3.5c-.5-.8-1.2-.8-2-.4a1.5 1.5 0 01-1.2-1.6 1.5 1.5 0 011.8-.8c.4-.4.8-1.2.4-2 1.2.4 2 1.6 2.8 1.2.4-.8.4-1.6.8-2.8.4 1.2.4 2 .8 2.8.8.4 1.6-.8 2.8-1.2-.4.8 0 1.6.4 2 1-.4 1.8.4 1.8.8a1.5 1.5 0 01-1.2 1.6c-.8-.4-1.5-.4-2 .4a2.5 2.5 0 01.5 3.5c-1 1-3 1.5-4.5 3" />
  </svg>
);

const StatueOfLibertyIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6M10 18h4M11 15h2" />
    <path d="M10.5 15l.5-5h2l.5 5z" />
    <path d="M9 8.5l1.5.5M15 8.5l-1.5.5M12 7.5V5.5M10.5 8L9.5 7M13.5 8l1-1" />
    <path d="M14 10V6.5l1.5-1M15.5 5.5V4" />
    <path d="M9.5 11.5l-1.5.5v1.5l1.5-.5z" />
  </svg>
);

const BigBenIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 22V9h4v13M11.5 22V9M12.5 22V9" />
    <path d="M9.5 9h5M9.5 5.5h5" />
    <circle cx="12" cy="7.2" r="1.2" />
    <path d="M10.5 5.5l1.5-3.5 1.5 3.5" />
    <path d="M12 2v1" />
  </svg>
);

const CastleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14h6v7H9zM11 21v-3h2v3" />
    <path d="M5 21V9h4v12zM4 9l3-4 3 4M15 21V9h4v12zM14 9l3-4 3 4M7 5V3M17 5V3" />
  </svg>
);

const EiffelTowerIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21c1.5-2 4.5-2 6 0M7 21l3.5-12M17 21L13.5 9M8.5 15h7M10 9h4M12 9V3M11 5h2" />
  </svg>
);

const PetronasTowersIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 21v-12l1.5-2V3h1v4l1.5 2v12M14 21v-12l1.5-2V3h1v4l1.5 2v12" />
    <path d="M9 11h6M9 12.5h6" />
    <path d="M4 21h16" />
  </svg>
);

const PagodaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21h14M7 21v-4h10v4" />
    <path d="M4 17c3-1 13-1 16 0M8 17v-4h8v4" />
    <path d="M5 13c3-1 11-1 14 0M9 13V9h6v4" />
    <path d="M7 9c2-1 8-1 10 0M12 9V5" />
  </svg>
);

const DubaiIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L9 6h6z" />
    <path d="M12 6v16M9 6v16h6V6" />
    <path d="M6 22h12" />
    <path d="M9 10h6M9 14h6M9 18h6" />
  </svg>
);

function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "", hasComma = false, decimals = 0 }: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  hasComma?: boolean;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = progress * (2 - progress); // easeOutQuad
      const currentCount = startValue + easedProgress * (endValue - startValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, value, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  const displayedCount = hasComma && decimals === 0
    ? parseInt(formattedCount, 10).toLocaleString()
    : formattedCount;

  return (
    <span ref={elementRef}>
      {prefix}
      {displayedCount}
      {suffix}
    </span>
  );
}

const countriesList = [
  { name: "Australia", flag: "🇦🇺", famousFor: "Opera House", Icon: OperaHouseIcon },
  { name: "Canada", flag: "🇨🇦", famousFor: "Maple Nature", Icon: MapleLeafIcon },
  { name: "USA", flag: "🇺🇸", famousFor: "Statue of Liberty", Icon: StatueOfLibertyIcon },
  { name: "UK", flag: "🇬🇧", famousFor: "Big Ben Tower", Icon: BigBenIcon },
  { name: "Germany", flag: "🇩🇪", famousFor: "Neuschwanstein Castle", Icon: CastleIcon },
  { name: "France", flag: "🇫🇷", famousFor: "Eiffel Tower", Icon: EiffelTowerIcon },
  { name: "Malaysia", flag: "🇲🇾", famousFor: "Petronas Towers", Icon: PetronasTowersIcon },
  { name: "China", flag: "🇨🇳", famousFor: "Ancient Pagodas", Icon: PagodaIcon },
  { name: "Dubai", flag: "🇦🇪", famousFor: "Burj Khalifa", Icon: DubaiIcon }
];

const globalFootprintCountries = [
  {
    name: "United Kingdom",
    shortName: "UK",
    flag: "🇬🇧",
    desc: "Fast-track 1-Year Masters & guaranteed 2-Year Post Study Work Stream.",
    intake: "Sept / Jan",
    link: "https://drive.google.com/file/d/1yQoQZbO5jLKa_XDoH5ebSensFuiybEux/view?usp=drive_link",
    Icon: BigBenIcon
  },
  {
    name: "United States",
    shortName: "USA",
    flag: "🇺🇸",
    desc: "Leading Ivy League research hubs, OPT extensions, and STEM career pathways.",
    intake: "Fall / Spring",
    link: "https://drive.google.com/file/d/1FfdYUnHQIkQJk38s9XGptAHGBrcPRefL/view?usp=drive_link",
    Icon: StatueOfLibertyIcon
  },
  {
    name: "Australia",
    shortName: "Australia",
    flag: "🇦🇺",
    desc: "Group of Eight universities, unbeatable lifestyle, and regional post-study rights.",
    intake: "Feb / July",
    link: "https://drive.google.com/file/d/1Ok_OMUrqNxl45DJ3SBgLrCFsdoC3lRL2/view?usp=drive_link",
    Icon: OperaHouseIcon
  },
  {
    name: "Canada",
    shortName: "Canada",
    flag: "🇨🇦",
    desc: "Generous work permits, top-ranked colleges, and secure pathways to permanent residency.",
    intake: "Sept / Jan",
    link: "https://drive.google.com/file/d/1I6GPO_oatr5TAk7uvObhzs-Wfko7Q1sU/view?usp=drive_link",
    Icon: MapleLeafIcon
  },
  {
    name: "China",
    shortName: "China",
    flag: "🇨🇳",
    desc: "Rapidly rising top global universities with highly competitive fully-funded scholarships.",
    intake: "Sept / March",
    link: "https://drive.google.com/file/d/1JiANPW4gTC9dLJu0e1UuN873bwhWFxhv/view?usp=drive_link",
    Icon: PagodaIcon
  },
  {
    name: "Dubai",
    shortName: "Dubai",
    flag: "🇦🇪",
    desc: "Hub of elite global university campuses, excellent part-time job opportunities, and tax-free post-study careers.",
    intake: "Sept / Jan",
    link: "https://drive.google.com/file/d/1ghZOAYB0PG7o3cw7lOL5113Riv9ilOL3/view?usp=drive_link",
    Icon: DubaiIcon
  },
  {
    name: "France",
    shortName: "France",
    flag: "🇫🇷",
    desc: "Prestigious business schools, culinary arts, and affordable world-renowned public education.",
    intake: "Sept / Feb",
    link: "https://drive.google.com/file/d/1pRCtOqjn-_xwdK6d1xdpFVwaofyoWkq2/view?usp=drive_link",
    Icon: EiffelTowerIcon
  },
  {
    name: "Germany",
    shortName: "Germany",
    flag: "🇩🇪",
    desc: "Tuition-free public universities, world-class engineering, and high post-study employment.",
    intake: "Oct / April",
    link: "https://drive.google.com/file/d/1EmnMXHW1a2fS316AxtYgwyrd2w6qi_Oi/view?usp=drive_link",
    Icon: CastleIcon
  },
  {
    name: "Malaysia",
    shortName: "Malaysia",
    flag: "🇲🇾",
    desc: "Affordable British and Australian branch campuses offering dual-degree credentials.",
    intake: "Feb / Sept",
    link: "https://drive.google.com/file/d/1l3jGOGaoxAHgk3aBMfhHsCjVFtmfkMtf/view?usp=drive_link",
    Icon: PetronasTowersIcon
  }
];

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    bio: "Alice has over 15 years of experience in strategic leadership and global education admissions. She leads our vision of borderless global education.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Carter Botosh",
    role: "Chief Financial Officer",
    bio: "Carter manages international partnerships, student tuition financing, and scholarship allocations to make elite education highly accessible.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Phillip Ekstrom",
    role: "Head of Technology",
    bio: "Phillip designs our state-of-the-art interactive admissions platforms, matching engine, and student portal applications.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Abram Culhane",
    role: "Director of Global Admissions",
    bio: "Abram is an ivy-league admissions expert who has helped over 1,500 students successfully secure placements at world-class destination campuses.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Sophia Chen",
    role: "Principal Consultant",
    bio: "Sophia specializes in visa procurement, pre-departure briefings, and campus transition programs across Australia and Canada.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Amara Al-Jamil",
    role: "Middle East Liaison",
    bio: "Amara coordinates our partnerships in Dubai and Saudi Arabia, offering students unparalleled local support and elite scholarship guidance.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

const testimonials = [
  {
    name: "Muhammad Usman",
    role: "Admitted to University of Hertfordshire, UK",
    stars: 5,
    text: "Alhamdulillah, got my UK study visa within 2 weeks! The team at EIC International Faisalabad was extremely professional and cooperative throughout the entire process. Highly recommended!"
  },
  {
    name: "Ayesha Fatima",
    role: "Admitted to York University, Canada",
    stars: 5,
    text: "Excellent service and highly professional staff. They guided me step-by-step from university selection and document evaluation to visa approval for Canada. Best consultancy in Kohinoor Faisalabad!"
  },
  {
    name: "Zainab Malik",
    role: "Admitted to Deakin University, Australia",
    stars: 5,
    text: "I am incredibly thankful to EIC International. Their expertise, quick response, and dedication made my dream of studying in Australia come true. Their visa success rate is absolutely genuine."
  },
  {
    name: "Hamza Ali",
    role: "Admitted to Technical University of Munich, Germany",
    stars: 5,
    text: "Very transparent and honest consultancy. They don't make fake promises. Got my German visa successfully with their excellent document curation and guidance. Top-tier service!"
  },
  {
    name: "Bilal Ahmed",
    role: "Admitted to Coventry University, UK",
    stars: 5,
    text: "The best study abroad consultants in Faisalabad. Very friendly environment and highly knowledgeable advisors. Had an extremely smooth process from the day of admission to visa collection."
  }
];

interface BlogAuthor {
  name: string;
  title: string;
  avatar: string;
}

interface BlogContentSection {
  title: string;
  paragraphs: string[];
  subsections?: { title: string; content: string }[];
  listItems?: string[];
  additionalText?: string;
  link?: { text: string; href: string };
  image?: string;
}

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  author: BlogAuthor;
  introduction: string[];
  links?: { text: string; href: string }[];
  sections: BlogContentSection[];
  faqs?: { q: string; a: string }[];
}

const BLOGS_DATA: BlogPost[] = [
  {
    id: "portugal-golden-visa-2026",
    title: "Portugal Golden Visa 2026: Requirements, Investment Options, Benefits & FAQs",
    category: "Immigration",
    readTime: "8 min read",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200&auto=format&fit=crop",
    summary: "The ultimate guide to Portugal's Golden Visa program in 2026. Discover the non-real estate investment routes, key benefits, eligibility, and step-by-step application process.",
    author: {
      name: "Rizwan.S",
      title: "Study Abroad Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "The Portugal Golden Visa 2026 remains one of Europe's most attractive residency-by-investment programs for non-EU nationals who want to access Portugal, the Schengen Area, and a long-term European residency route.",
      "Officially known as the Autorização de Residência para Atividade de Investimento, or ARI, the program allows eligible third-country nationals to obtain a temporary residence permit in Portugal by making a qualifying investment.",
      "AIMA confirms that the ARI regime has been in force since 8 October 2012 and allows qualifying investors to obtain temporary residence for investment activity.",
      "While the program is still active, it has changed significantly. The most important update is that real estate purchases and real estate-linked funds no longer qualify for new Golden Visa applications. Instead, the program now focuses on investment funds, cultural support, scientific research, company creation, and job creation.",
      "Get Golden Visa's updated 2026 guide also confirms that real estate and real estate-related fund options are no longer available under the current rules.",
      "For investors seeking European flexibility without full-time relocation, the Portugal Golden Visa continues to offer a practical route. However, applicants should understand the latest requirements, eligible investment options, and citizenship timeline before applying."
    ],
    links: [
      { text: "Latvia Golden Visa: Complete Guide to Residency by Investment in Latvia for Pakistani", href: "#" }
    ],
    sections: [
      {
        title: "What is the Portugal Golden Visa 2026?",
        paragraphs: [
          "The Portugal Golden Visa is a residency-by-investment program designed for non-EU, non-EEA, and non-Swiss nationals. It grants a Portuguese residence permit to applicants who make and maintain an eligible investment in the country.",
          "The program is not a direct citizenship-by-investment scheme. Instead, it provides legal residence in Portugal, with the possibility of applying for permanent residence or Portuguese nationality later, provided the applicant meets the relevant legal requirements.",
          "AIMA states that ARI holders may request permanent residence under Portugal's Foreigners Law and may request Portuguese nationality by naturalization if they meet the requirements of the Nationality Law.",
          "The main appeal of the Portugal Golden Visa 2026 is its combination of European residency, Schengen mobility, family inclusion, and relatively low physical stay requirements compared with many other residency programs."
        ]
      },
      {
        title: "Key Benefits of the Portugal Golden Visa",
        paragraphs: [
          "The Portugal Golden Visa offers several advantages for investors and their families.",
          "First, it allows holders to live and work in Portugal. AIMA confirms that ARI beneficiaries may reside and work in Portugal while maintaining the required minimum stay.",
          "Second, it provides visa-free movement within the Schengen Area, allowing residents to travel across Schengen countries without applying for separate short-stay visas. AIMA also lists Schengen circulation without a visa as one of the ARI benefits.",
          "Third, the program allows family reunification. This means the main applicant may be able to include eligible family members, such as a spouse, dependent children, and qualifying dependent relatives, subject to the applicable rules.",
          "Fourth, the stay requirement is relatively flexible. AIMA states that ARI holders must remain in Portugal for at least seven days in the first year and at least 14 days in subsequent periods.",
          "Finally, the program can support long-term settlement planning. After meeting the applicable requirements, investors may be able to apply for permanent residence and, separately, Portuguese citizenship by naturalization."
        ]
      },
      {
        title: "Portugal Golden Visa 2026 Investment Options",
        paragraphs: [
          "The current Portugal Golden Visa investment routes no longer include direct real estate purchases. As of 2026, applicants must choose from the qualifying investment categories that remain available under the ARI framework."
        ],
        subsections: [
          {
            title: "1. Investment Fund Route",
            content: "One of the most popular current options is a qualifying investment in non-real estate collective investment funds. AIMA lists a capital transfer of at least €500,000 for the acquisition of units in non-real estate collective investment undertakings, established under Portuguese law, with a maturity of at least five years and at least 60% of investments made in Portuguese companies.\n\nThis route is often attractive to investors who want a professionally managed investment structure. However, fund performance is not guaranteed, and applicants should review legal, tax, and financial risks before investing."
          },
          {
            title: "2. Cultural or Artistic Contribution",
            content: "Another available route is a contribution of at least €250,000 toward artistic production or the recovery and maintenance of Portuguese national cultural heritage. AIMA lists this as an eligible ARI investment route.\n\nThis option may appeal to investors who prefer a lower minimum contribution and want to support cultural or heritage projects. However, it is usually structured as a contribution rather than a recoverable investment."
          },
          {
            title: "3. Scientific Research Investment",
            content: "Applicants may also qualify by transferring at least €500,000 to research activities conducted by public or private scientific research institutions integrated into Portugal's national scientific and technological system.\n\nThis route can suit investors interested in innovation, research, and long-term national development."
          },
          {
            title: "4. Business Creation and Job Creation",
            content: "The Portugal Golden Visa 2026 also supports business and employment-based investment. AIMA lists the creation of at least 10 jobs as an eligible investment option.\n\nAnother business route involves transferring at least €500,000 to establish a Portuguese company, aligned with the creation of five permanent jobs, or reinforcing the capital of an existing Portuguese company while creating or maintaining the required number of jobs for a minimum period.\n\nThis route may be suitable for entrepreneurs, business owners, and investors who want an active role in Portugal's economy."
          }
        ]
      },
      {
        title: "Investment Options No Longer Available",
        paragraphs: [
          "One of the most important things to understand about the Portugal Golden Visa 2026 is what no longer qualifies.",
          "Real estate purchases are no longer eligible for new applications. This includes the previous €500,000 property purchase route and the reduced urban rehabilitation route.",
          "Get Golden Visa states that, as of October 2023, the program no longer accepts real estate purchases or real estate-related funds as qualifying investments.",
          "The older capital transfer route is also no longer available. Investors considering Portugal should therefore avoid outdated advice that still promotes property as a Golden Visa route."
        ]
      },
      {
        title: "Basic Eligibility Requirements",
        paragraphs: [
          "To apply for the Portugal Golden Visa, applicants generally need to be non-EU nationals and make a qualifying investment through one of the approved routes. They must also provide supporting documentation, maintain the investment for the required period, and meet legal admissibility requirements.",
          "AIMA notes that the granting of residence requires, among other conditions, the absence of disqualifying facts, no conviction for a crime punishable in Portugal by imprisonment of more than one year, no entry or stay ban, and no relevant refusal indication in the applicable information systems.",
          "Applicants should also expect to prepare documents such as a valid passport, criminal record certificates, proof of investment, tax identification, proof of funds, health insurance, and family documents where dependents are included."
        ]
      },
      {
        title: "Application Process",
        paragraphs: [
          "The Portugal Golden Visa application is submitted through the ARI Portal. AIMA explains that the Portal ARI allows investors and family members to register the ARI application, upload required documents, generate payment documents for fees, and schedule appointments.",
          "A simplified application process usually follows these steps:"
        ],
        listItems: [
          "Choose the qualifying investment route.",
          "Obtain a Portuguese tax number and open a bank account if required.",
          "Complete the investment.",
          "Collect and legalize all supporting documents.",
          "Submit the online ARI application.",
          "Pay the relevant government fees.",
          "Attend the AIMA appointment for biometrics.",
          "Receive the residence permit after approval.",
          "Renew the permit and maintain compliance."
        ],
        additionalText: "Processing times can vary due to administrative demand, so applicants should plan conservatively and work with qualified legal advisers.",
        link: { text: "HEC Announces Scholarships in Top 100 US Universities for Pakistani Students", href: "#" }
      },
      {
        title: "Citizenship and Permanent Residence",
        paragraphs: [
          "The Portugal Golden Visa can support a long-term path to permanent residence and citizenship, but it should not be confused with immediate citizenship.",
          "The 2026 nationality law changes have affected the citizenship timeline. Get Golden Visa's 2026 update notes that approved revisions extend the general citizenship eligibility period from five years to ten years for most applicants, or seven years for EU and CPLP nationals, with applicants advised to verify the latest requirements due to implementation details and transitional rules.",
          "Permanent residence remains a separate process under Portugal's immigration rules. Because nationality and residency rules can change, investors should obtain current legal advice before relying on citizenship timelines."
        ]
      },
      {
        title: "Conclusion",
        paragraphs: [
          "The Portugal Golden Visa 2026 remains a strong option for investors seeking European residency, Schengen mobility, and long-term ties to Portugal. Although real estate is no longer an eligible route, applicants still have several qualifying options, including investment funds, cultural contributions, scientific research, company creation, and job creation.",
          "The program is best suited to investors who want flexibility, family inclusion, and a potential route to permanent residence or citizenship over time.",
          "Before applying, applicants should carefully review the current rules, compare investment options, and seek professional legal, tax, and financial advice."
        ]
      }
    ],
    faqs: [
      {
        q: "1. Is the Portugal Golden Visa still available in 2026?",
        a: "Yes. The Portugal Golden Visa, officially called ARI, remains available in 2026 for qualifying non-EU investors."
      },
      {
        q: "2. Can I get a Portugal Golden Visa by buying property?",
        a: "No. Real estate purchases and real estate-related funds no longer qualify for new Portugal Golden Visa applications."
      },
      {
        q: "3. What is the minimum investment for the Portugal Golden Visa 2026?",
        a: "The lowest listed route is the €250,000 cultural or heritage contribution, while other routes commonly start at €500,000."
      },
      {
        q: "4. Can my family join my Portugal Golden Visa application?",
        a: "Yes. The program allows family reunification, subject to eligibility and documentation requirements."
      },
      {
        q: "5. Does the Portugal Golden Visa lead to citizenship?",
        a: "It can support a future citizenship application, but it is not direct citizenship. Applicants must meet Portugal's nationality requirements in force at the time of application."
      }
    ]
  },
  {
    id: "leeds-trinity-2026",
    title: "Leeds Trinity University: A Gateway to Academic Excellence for Pakistani Students",
    category: "Study Guides",
    readTime: "6 min read",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    summary: "Explore how Leeds Trinity University offers exceptional academic paths, career opportunities, and a thriving international student community.",
    author: {
      name: "Rizwan.S",
      title: "Study Abroad Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "Leeds Trinity University is widely renowned for its highly supportive academic environment, career-led degrees, and exceptional campus life. For Pakistani students, Leeds Trinity offers a beautiful blend of professional preparation and academic rigor.",
      "Located in the vibrant student city of Leeds, UK, the university has long been a preferred hub for students seeking high employability and customized support frameworks.",
      "With modern facilities, industry-vetted curriculums, and a dedicated international support cell, Leeds Trinity stands out as an exceptional gateway to building a successful international career."
    ],
    sections: [
      {
        title: "Why Choose Leeds Trinity?",
        paragraphs: [
          "Leeds Trinity is proud to be one of the UK's leading universities for professional work placements built directly into every undergraduate degree. This professional focus is why over 95% of graduates are in work or further study within 15 months of completing their courses.",
          "The university offers a highly personalized learning experience where students are treated as individuals, receiving tailored support to help them achieve their potential both academically and professionally."
        ]
      },
      {
        title: "Popular Programs for Pakistani Students",
        paragraphs: [
          "Pakistani students show a strong preference for Leeds Trinity's diverse range of undergraduate and postgraduate courses, including:",
          "• MSc Business and Management: Designed to equip future leaders with core strategic and analytical skillsets.",
          "• MBA: Accelerate your career with real-world executive case studies and strategic network development.",
          "• BSc Computer Science: Focused on software engineering, cybersecurity, and practical system development.",
          "• MSc Journalism & Media: Learn from active industry professionals in state-of-the-art media centers."
        ]
      },
      {
        title: "Scholarships and Admissions for 2026",
        paragraphs: [
          "Leeds Trinity University provides highly competitive entry bursaries and regional scholarships for Pakistani applicants, varying from £1,000 up to £3,000 off their first-year tuition fees based on academic excellence.",
          "To apply, students require their official academic transcripts, a compelling Statement of Purpose (SOP), two letters of recommendation, and a qualifying IELTS Academic score (typically overall 6.0 with no band less than 5.5)."
        ]
      }
    ]
  },
  {
    id: "erasmus-mundus-2026",
    title: "Erasmus Mundus Scholarship 2026: Fully Funded Master's Guide for Pakistani Students",
    category: "Scholarships",
    readTime: "8 min read",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    summary: "The ultimate roadmap to winning the prestigious Erasmus Mundus Joint Master Degree scholarship, featuring prep tips and documentation checklists.",
    author: {
      name: "Rizwan.S",
      title: "Scholarship Strategist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "The Erasmus Mundus Joint Master Degree (EMJMD) is one of the most prestigious fully funded scholarship programs globally, allowing students to study at multiple leading universities across Europe.",
      "Pakistan has consistently been one of the top countries globally in terms of receiving Erasmus Mundus scholarship offers, highlighting the immense talent and preparation of Pakistani applicants.",
      "This guide provides an essential, step-by-step framework to optimize your documentation, structure a powerful Letter of Motivation, and secure your spot on this life-changing European academic adventure."
    ],
    sections: [
      {
        title: "What Does the Erasmus Mundus Scholarship Cover?",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        paragraphs: [
          "The Erasmus Mundus program is fully funded and covers almost every cost associated with your academic journey:",
          "1. Full Tuition Fees: Complete waiver of all academic and laboratory costs at host institutions.",
          "2. Monthly Living Allowance: €1,400 per month for the entire duration of the master's program (up to 24 months).",
          "3. Travel and Installation Allowance: Annual travel support and a settlement allowance to facilitate relocations.",
          "4. Comprehensive Health Insurance: Complete medical coverage across all European host nations."
        ]
      },
      {
        title: "Crucial Steps to Prepare a Winning Application",
        paragraphs: [
          "Successful EMJMD applicants start preparing months in advance. To make your application stand out, focus on:",
          "• Crafting an Impressive CV: Use the official Europass format and highlight specific academic research, community projects, and leadership milestones.",
          "• A Stellar Letter of Motivation (LOM): Explain why you chose this specific consortium, how your academic background aligns with their curriculum, and what unique cultural perspective you bring.",
          "• Strong Recommendation Letters: Secure recommendations from professors who can speak in detail about your research potential, academic commitment, and analytical skills."
        ]
      }
    ]
  },
  {
    id: "study-nz-2026",
    title: "Study in New Zealand for Pakistani Students: Complete Guide to Visa and Requirements",
    category: "Study Guides",
    readTime: "7 min read",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    summary: "Everything you need to know about New Zealand's top universities, visa documentation, post-study work rights, and lifestyle for Pakistani students.",
    author: {
      name: "Rizwan.S",
      title: "Study Abroad Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "New Zealand is world-renowned for its prestigious educational institutions, high quality of life, and incredible natural landscapes. For students seeking a safe, friendly, and innovative academic environment, New Zealand is a premier choice.",
      "All eight of New Zealand's universities are ranked within the top 3% globally in the QS World University Rankings, reflecting the world-class standard of its tertiary education system.",
      "From understanding fee structures to preparing a robust visa portfolio, this guide details everything Pakistani students need to successfully transition to studying in New Zealand."
    ],
    sections: [
      {
        title: "Why Choose New Zealand for 2026?",
        paragraphs: [
          "New Zealand universities offer top-tier research opportunities, strong industry connections, and an education focused on practical application and critical thinking.",
          "Moreover, New Zealand's post-study work visa options allow graduates to live and work in the country for up to 3 years after graduation, providing an excellent pathway to launch a global professional career."
        ]
      },
      {
        title: "Key Student Visa Requirements",
        paragraphs: [
          "Securing a New Zealand Student Visa requires meticulous documentation. Essential requirements include:",
          "1. Offer of Place: An official, unconditional acceptance letter from a certified New Zealand educational provider.",
          "2. Proof of Funds: Evidence of at least NZD 20,000 per year of study to cover living expenses, plus tuition fees.",
          "3. Medical and Character Certificates: Medical examinations from panel doctors and police clearance certificates.",
          "4. Genuine Temporary Entrant (GTE): A compelling statement explaining your motivation, study pathway, and ties to Pakistan."
        ]
      }
    ]
  },
  {
    id: "mba-france-2026",
    title: "MBA in France for Pakistani Students: Admission and Costs",
    category: "Study Guides",
    readTime: "6 min read",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    summary: "Unlock prestigious business opportunities in Europe. Learn about French MBA programs, fee structures, GMAT requirements, and career prospects.",
    author: {
      name: "Rizwan.S",
      title: "Business Education Specialist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "France is home to some of the world's absolute top business schools, consistently dominating international rankings (such as INSEAD, HEC Paris, and ESSEC). An MBA from France offers unmatched prestige, robust corporate networks, and a dynamic entry point into the European business ecosystem.",
      "For Pakistani executives and graduates, French business schools offer both traditional 2-year MBAs and highly efficient, accelerated 1-year programs designed to optimize return on investment.",
      "This guide outlines admission criteria, average tuition and living costs, and post-graduation stay-back options available for Pakistani candidates in France."
    ],
    sections: [
      {
        title: "Top French Business Schools",
        paragraphs: [
          "France boasts an array of triple-accredited business institutions, offering premium instruction and executive-level networks:",
          "• HEC Paris: Consistently ranked #1 in Europe, famous for leadership development and luxury brand management.",
          "• INSEAD (Fontainebleau): A globally leading executive network with dynamic international modules.",
          "• EMLyon Business School: Heavily focused on entrepreneurship, technology management, and global enterprise.",
          "• EDHEC Business School: Renowned for quantitative finance, marketing strategy, and corporate social responsibility."
        ]
      },
      {
        title: "Admissions Criteria & Documentation",
        paragraphs: [
          "Applying to French MBA programs requires a mixture of professional excellence and academic capability. Key requirements:",
          "• Professional Experience: Typically requires a minimum of 2 to 3 years of post-graduation professional work history.",
          "• GMAT or GRE Scores: Highly ranked programs usually look for a GMAT score of 650+ (or equivalent GRE metrics).",
          "• Language Proficiency: Most premium MBA programs in France are taught entirely in English, requiring an IELTS score of 6.5+ or TOEFL equivalent."
        ]
      }
    ]
  },
  {
    id: "australia-biz-2026",
    title: "Top Universities in Australia for Business and Economics 2026",
    category: "Study Guides",
    readTime: "5 min read",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200&auto=format&fit=crop",
    summary: "A comprehensive review of the Group of Eight (Go8) universities in Australia offering leading business, finance, and economics programs.",
    author: {
      name: "Rizwan.S",
      title: "Study Abroad Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "Australia has established itself as an absolute powerhouse for international business and economics education. Australian universities boast incredible academic standings, high-quality research contributions, and deep integration with thriving Asia-Pacific markets.",
      "For Pakistani students, studying business in Australia offers a globally recognized qualification, excellent hands-on internships, and robust post-study work opportunities under the Subclass 485 stream.",
      "Let's explore the country's leading business schools, average tuition costs, and the special benefits of choosing Australia for your higher education journey in 2026."
    ],
    sections: [
      {
        title: "Leading Australian Business Schools (Group of Eight)",
        paragraphs: [
          "The prestigious Group of Eight (Go8) universities in Australia represent the peak of academic quality and graduate employability:",
          "1. University of Melbourne: Renowned for its rigorous Business School, top-tier economic research, and prime location.",
          "2. University of Sydney: Celebrated for its focus on leadership development, global financial markets, and business consulting projects.",
          "3. UNSW Sydney: Famous for its exceptional commerce and accounting programs, fostering a large startup and entrepreneurship community.",
          "4. Monash University: Holds prestigious triple-accreditation (AACSB, AMBA, EQUIS), offering highly industry-integrated courses."
        ]
      },
      {
        title: "Post-Study Work Benefits in Australia",
        paragraphs: [
          "Australia has revised its post-study work guidelines to provide extensive work opportunities for international graduates. Under the temporary graduate visa stream, master's graduates can secure up to 3 to 5 years of post-study work authorization depending on regional locations, offering an exceptional runway to gain international experience."
        ]
      }
    ]
  },
  {
    id: "llm-nz-2026",
    title: "Study LLM in International Law and Politics in New Zealand: Complete Guide",
    category: "Study Guides",
    readTime: "7 min read",
    date: "3 weeks ago",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    summary: "Elevate your legal career. Understand LLM admission rules, specialization choices, scholarship availability, and New Zealand legal pathways.",
    author: {
      name: "Rizwan.S",
      title: "Legal Education Advisor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    introduction: [
      "A Master of Laws (LLM) in International Law and Politics from a top-tier New Zealand university equips you with the analytical skills and legal frameworks required to address complex global challenges.",
      "New Zealand law schools are highly ranked and prestigious, providing students with interactive instruction, comparative legal analysis, and a deep appreciation for human rights and treaty frameworks.",
      "This complete guide covers the top New Zealand LLM curricula, entry pathways for law graduates from Pakistan, and the scholarship opportunities that can support your educational goals."
    ],
    sections: [
      {
        title: "Key Aspects of the LLM in New Zealand",
        paragraphs: [
          "The LLM program in New Zealand is highly respected worldwide, emphasizing independent research, critical analysis of current international treaties, and active participation in seminars.",
          "Specializations include International Environmental Law, Human Rights Law, Maritime Law, and the intersection of Global Economics and International Arbitration."
        ]
      },
      {
        title: "Admission Requirements for International Students",
        paragraphs: [
          "To qualify for an LLM at a New Zealand university, Pakistani applicants generally require:",
          "• A Bachelor of Laws (LLB) from a recognized university, with strong academic results (typically equivalent to a B average or above).",
          "• English Proficiency Proof: A qualifying IELTS Academic score of overall 6.5 or 7.0 (depending on university criteria) with no individual band score below 6.0 or 6.5.",
          "• Research Statement: A clear outline of your intended thesis topic or research goals, especially for research-based LLM programs."
        ]
      }
    ]
  }
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamScrollRef = useRef<HTMLDivElement>(null);

  const scrollTeam = (direction: "left" | "right") => {
    if (teamScrollRef.current) {
      const { scrollLeft } = teamScrollRef.current;
      const scrollAmount = 334; // Card width + gap (approx 310 + 24)
      const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      teamScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const { scrollY } = useScroll();

  // Hardware accelerated buttery smooth parallax values
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Contact page scroll parallax transforms
  const contactBgY = useTransform(scrollY, [0, 600], [0, 150]);
  const contactTextY = useTransform(scrollY, [0, 500], [0, -60]);
  const contactTextOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Navigation active link highlights
  const [activeItem, setActiveItem] = useState("Home");
  const [activeSubItem, setActiveSubItem] = useState("Who We Are");
  
  // Who We Are page states (Sk1llex design style)
  const [whoWeAreSearch, setWhoWeAreSearch] = useState("");
  const [whoWeAreHoveredPanel, setWhoWeAreHoveredPanel] = useState<number>(0);
  const [whoWeAreRegionTab, setWhoWeAreRegionTab] = useState("All Regions");
  const [whoWeAreFeatureTab, setWhoWeAreFeatureTab] = useState(0);
  const [whoWeAreReviewIndex, setWhoWeAreReviewIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeItem]);

  // Contact page states
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 3000);
  };
  
  // Interactive Modal state for "Apply Online"
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetCountry: "United Kingdom",
    educationLevel: "Bachelors",
    message: ""
  });
  const [activeBlogPost, setActiveBlogPost] = useState<any>(null);

  const menuItems = [
    { title: "Home", subItems: [] },
    { title: "Services", subItems: [] },
    { title: "Destinations", subItems: ["United Kingdom", "United States", "Canada", "Australia", "Germany"] },
    { title: "Courses", subItems: ["SAT Prep", "IELTS Academic", "TOEFL / PTE"] },
    { title: "About", subItems: ["Who We Are", "Our Team", "Success Stories"] },
    { title: "Blogs", subItems: [] },
    { title: "Contact", subItems: [] }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefCode(`EE-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsApplyModalOpen(false);
      setRefCode("");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        targetCountry: "United Kingdom",
        educationLevel: "Bachelors",
        message: ""
      });
    }, 2500);
  };

  return (
    <div ref={heroRef} className="relative min-h-screen font-sans text-white overflow-x-hidden selection:bg-blue-600 selection:text-white" id="home-view">
      
      {/* BACKGROUND HERO IMAGE */}
      {activeItem === "Home" && (
        <motion.div 
          style={{ y: bgY, translateZ: 0 }}
          className="absolute inset-0 h-screen w-full overflow-hidden z-0 will-change-transform"
        >
          <Image
            src="https://lh3.googleusercontent.com/d/1_AE98TCClLVLIr9XXxaZqMLJXYsC85V8"
            alt="Diverse international university students smiling on campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Reduced black shadows and elegant gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 z-10" />
        </motion.div>
      )}

      {/* FLOAT TOP NAVIGATION BAR */}
      <header className="absolute top-0 left-0 w-full z-30 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand with custom Google Drive image */}
          <a href="#home-view" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative h-11 w-48">
              <Image
                src="https://lh3.googleusercontent.com/d/18OXfwSEf1g4NAFLcr7ZuIvzA0UA5CkYD"
                alt="EIC INTERNATIO AL"
                fill
                priority
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Central Capsule Navigation (Desktop only) */}
          <nav className="hidden lg:flex items-center bg-black/30 hover:bg-black/45 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 shadow-xl transition-all duration-300">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.title} className="relative group py-0.5">
                  <button
                    onClick={() => {
                      setActiveItem(item.title);
                      if (item.title === "About") {
                        setActiveSubItem("Who We Are");
                      } else {
                        setActiveSubItem("");
                      }
                      if (item.title === "Blogs") {
                        setActiveBlogPost(null);
                      }
                    }}
                    className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      activeItem === item.title
                        ? "bg-white text-black shadow-md"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.subItems.length > 0 && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180 ${activeItem === item.title ? "text-black" : "text-slate-400"}`} />
                    )}
                  </button>
                  
                  {item.subItems.length > 0 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-50">
                      <div className="bg-[#12141c]/95 border border-white/10 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setActiveItem(item.title);
                              setActiveSubItem(sub);
                              if (item.title === "Blogs") {
                                  setActiveBlogPost(null);
                              }
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:scale-[1.03] active:scale-95 text-center cursor-pointer"
            >
              Apply Online
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white bg-black/20 backdrop-blur-md rounded-xl border border-white/10 hover:bg-black/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* MOBILE EXPANDED MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 z-50 bg-black/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col gap-5 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-2 mb-1">Navigation Menu</span>
              {menuItems.map((item) => {
                const hasSubItems = item.subItems.length > 0;
                const isExpanded = mobileExpandedItem === item.title;
                const isActive = activeItem === item.title;

                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => {
                        if (hasSubItems) {
                          setMobileExpandedItem(isExpanded ? null : item.title);
                        } else {
                          setActiveItem(item.title);
                          if (item.title === "Blogs") {
                            setActiveBlogPost(null);
                          }
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasSubItems && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-400" : "text-slate-400"}`} />
                      )}
                    </button>
                    
                    {hasSubItems && isExpanded && (
                      <div className="pl-3 mt-1 mb-2 flex flex-col gap-1 border-l border-white/15 ml-4 py-1">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setActiveItem(item.title);
                              setActiveSubItem(sub);
                              if (item.title === "Blogs") {
                                setActiveBlogPost(null);
                              }
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsApplyModalOpen(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-center text-sm shadow-lg shadow-blue-500/20"
              >
                Apply Online Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN HERO CONTENT OVERLAY */}
      {activeItem === "Home" && (
        <motion.main 
          style={{ y: textY, opacity: textOpacity, translateZ: 0 }}
          className="relative z-10 h-screen w-full flex items-center px-4 md:px-8 will-change-[transform,opacity]"
        >
          <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Box (From reference code & reference design block) */}
            <div className="lg:col-span-8 max-w-[750px] space-y-4 md:space-y-6">
              
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mt-16 sm:mt-20 lg:mt-24"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                Admissions Open for 2026/2027
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05]"
              >
                Your Gateway to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
                  Global Education
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-200 font-light text-sm sm:text-base md:text-lg max-w-[650px] leading-relaxed text-balance"
              >
                Welcome to EIC INTERNATIO AL, where we help you succeed in gaining admission to top-notch universities. Our mission is simple yet profound: to help ambitious students like you realize their academic and career aspirations.
              </motion.p>

              {/* Micro-interactive triggers with smaller, elegant capsule-shaped buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3.5 pt-2"
              >
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5.5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] flex items-center gap-1.5 group hover:scale-[1.03] active:scale-95"
                >
                  Get Free Assessment
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button
                  onClick={() => {
                    const el = document.getElementById("features-preview");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold px-5.5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-300 border border-white/15 backdrop-blur-sm flex items-center gap-1.5"
                >
                  Explore Destinations
                </button>
              </motion.div>

              {/* Inline Quick Statistics for a complete consulting design presence */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-[500px] text-xs font-sans text-slate-300"
              >
                <div>
                  <span className="block text-xl font-bold text-white font-sans">98%</span>
                  Visa Success
                </div>
                <div>
                  <span className="block text-xl font-bold text-white font-sans">350+</span>
                  Partner Unis
                </div>
                <div>
                  <span className="block text-xl font-bold text-white font-sans">14+ Yrs</span>
                  Global Trust
                </div>
              </motion.div>

            </div>

            {/* Right Column (Placeholder to shift layout visually matching the screen) */}
            <div className="hidden lg:block lg:col-span-4" />

          </div>
        </motion.main>
      )}

      {/* FLOATING RIGHT SOCIAL ICONS BAR (Sticky on whole homepage) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end">
        <div className="bg-white/95 backdrop-blur-md rounded-l-2xl py-6 px-3.5 flex flex-col items-center gap-5.5 shadow-2xl border border-white/20 select-none">
          
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 hover:scale-120 transition-all duration-300"
            title="Facebook"
            id="social-fb"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-pink-600 hover:scale-120 transition-all duration-300"
            title="Instagram"
            id="social-ig"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-sky-600 hover:scale-120 transition-all duration-300"
            title="LinkedIn"
            id="social-li"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-red-600 hover:scale-120 transition-all duration-300"
            title="YouTube"
            id="social-yt"
          >
            <Youtube className="w-5 h-5" />
          </a>

        </div>
      </div>

      {/* BOTTOM CENTER ANIMATED BOUNCE ARROW */}
      {activeItem === "Home" && (
        <a
          href="#services-section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer animate-bounce group"
          aria-label="Scroll Down"
          id="scroll-trigger"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm flex items-center justify-center transition-all">
            <ChevronDown className="w-6 h-6 text-white/90 group-hover:text-white" />
          </div>
        </a>
      )}

      {/* DYNAMIC SUB-PAGE HERO SECTIONS */}
      {activeItem !== "Home" && activeItem !== "Contact" && (
        <section className="relative w-full h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image Container */}
          <motion.div 
            style={{ y: contactBgY, translateZ: 0 }}
            className="absolute inset-0 w-full h-full z-0 will-change-transform"
          >
            <Image
              src={
                activeItem === "Services"
                  ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
                  : activeItem === "Destinations"
                  ? "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop"
                  : activeItem === "Courses"
                  ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
                  : activeItem === "About"
                  ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                  : activeItem === "Blogs"
                  ? "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
                  : "https://framerusercontent.com/images/DavOSRpuxbuR1A0IkEQnbkK9pzA.jpg"
              }
              alt={`${activeItem} Page Hero`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
          </motion.div>

          {/* Container for title/content */}
          <motion.div 
            style={{ y: contactTextY, opacity: contactTextOpacity, translateZ: 0 }}
            className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 mt-12 will-change-[transform,opacity]"
          >
            {activeItem === "Services" ? (
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display leading-tight"
                  id="services-page-title"
                >
                  Our Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light leading-relaxed"
                >
                  From admissions and scholarship assistance to visa guidance, our experts pave your way to international success.
                </motion.p>
              </div>
            ) : (
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display"
                >
                  {activeItem === "Destinations"
                    ? "Study Destinations"
                    : activeItem === "Courses"
                    ? "Courses & Test Prep"
                    : activeItem === "About"
                    ? "About Us"
                    : activeItem === "Blogs"
                    ? "Blogs & Insights"
                    : activeItem}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light leading-relaxed"
                >
                  {activeItem === "Destinations" && "Discover prestigious universities, dynamic student cultures, and seamless pathways across the world's elite destinations."}
                  {activeItem === "Courses" && "Unlock your target scores in IELTS, SAT, TOEFL, and PTE with Faisalabad's most certified and result-oriented instructors."}
                  {activeItem === "About" && "A trusted name in student recruitment and visa consultancy, dedicated to transforming your educational dreams into reality."}
                  {activeItem === "Blogs" && "Get the latest university intake news, visa guidance checklist, test prep strategies, and stories from our successful students."}
                </motion.p>
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* GLOBAL DESTINATIONS TICKER SECTION */}
      {(activeItem === "Home" || activeItem === "Destinations") && (
        <section className="relative z-10 border-y border-slate-200/60 py-6 overflow-hidden" style={{ backgroundColor: "#F2F2F2" }} id="destinations-ticker">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            
            {/* Left Heading */}
            <div className="flex-shrink-0 flex items-center gap-2 border-slate-300 pr-0 md:pr-6 md:border-r">
              <Globe className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="font-bold text-slate-800 tracking-tight whitespace-nowrap text-sm md:text-base uppercase font-display">
                Global Destinations:
              </span>
            </div>

            {/* Right Slider Container */}
            <div className="relative flex-1 overflow-hidden select-none py-1.5 w-full">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
              
              {/* Ticker Track running Left to Right (LTR) */}
              <div className="flex gap-4 w-max animate-marquee-ltr">
                {[...countriesList, ...countriesList, ...countriesList, ...countriesList].map((country, index) => {
                  const LandmarkIcon = country.Icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0 group/card"
                    >
                      {/* Country Name */}
                      <span className="font-bold text-slate-800 text-xs sm:text-sm tracking-tight">{country.name}</span>

                      {/* Minimalist Modern Landmark Icon - No background wrapper */}
                      <LandmarkIcon className="w-5 h-5 text-slate-700 group-hover/card:text-blue-600 transition-colors duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee-ltr {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0%);
              }
            }
            .animate-marquee-ltr {
              animation: marquee-ltr 75s linear infinite;
            }
            .animate-marquee-ltr:hover {
              animation-play-state: paused;
            }
          `}} />
        </section>
      )}

      {/* SERVICES SECTION (CORE CONSULTANCY PATHWAYS) */}
      {activeItem === "Home" && (
        <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-24 px-4 md:px-8 border-t border-slate-200" id="services-home-pathways">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="inline-block bg-white text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm animate-none">
                Our Pillars
              </span>
              <h3 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight font-display" id="home-pillars-title">
                Core Consultancy Pathways
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
                Every step of your international academic journey is fully covered by our specialized, results-driven consulting divisions.
              </p>
            </div>

            {/* Clean Paragraphs with Titles (No Cards) */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
              {/* 1. Admission Consulting */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">Admission Consulting</h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                  Complete profile auditing, customized university matching, and professional essay and SOP coaching to optimize your eligibility for elite global schools.
                </p>
              </div>

              {/* 2. Visa Assistance */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">Visa Assistance</h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                  Comprehensive file assembling, financial documentation review, and structured mock interviews with visa officers to secure maximum embassy approvals.
                </p>
              </div>

              {/* 3. Scholarship Guidance */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">Scholarship Guidance</h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                  Direct mapping for fully-funded fellowships and institutional merit grants. We assist with critical research proposal reviews and supervisor outreach.
                </p>
              </div>

              {/* 4. Profile Assessment */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Compass className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">Profile Assessment</h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                  Deep diagnostic evaluations of your academic logs, extracurricular activities, and budget goals to outline a secure, customized study abroad strategy.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OUR SERVICES SECTION */}
      {activeItem === "Home" && (
        <section className="relative z-10 bg-white text-slate-900 py-24 px-4 md:px-8 border-t border-slate-100" id="services-section">
        <div className="max-w-6xl mx-auto">
          {/* Header Grid */}
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-blue-600" />
                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">About</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] font-display">
                Why Choose Us!
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-slate-500 text-sm leading-relaxed max-w-md md:ml-auto">
                By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.
              </p>
            </div>
          </div>

          {/* Grid Layout of Services */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            
            {/* Left Column - Large Vertical Card (Turning Study Abroad Dreams into Reality) */}
            <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-slate-100 h-[500px] cursor-pointer">
              <Image
                src="https://framerusercontent.com/images/Ks478GmT2s9Ewl2BhCGGJWDqdKo.jpg"
                alt="Turning Study Abroad Dreams into Reality"
                fill
                className="object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-xl transition-all duration-700 ease-in-out group-hover:from-black/95 group-hover:via-black/50" />
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight max-w-[80%]">Turning Study Abroad Dreams into Reality</h3>
                  <div className="w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/25 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:scale-110 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-slate-200/95 text-xs sm:text-sm leading-relaxed overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  Unlock global academic paths with our experienced personal advisors guiding your choice, visa process, and application success at elite schools.
                </p>
              </div>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="flex flex-col gap-6">
              
              {/* Top Horizontal Card (Expert Training for IELTS, PTE & LanguageCert) */}
              <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-slate-100 h-[238px] cursor-pointer">
                <Image
                  src="https://framerusercontent.com/images/wnUzv0z9hQsQucujSeLpZ5hwOY.jpg"
                  alt="Expert Training for IELTS, PTE & LanguageCert"
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-xl transition-all duration-700 ease-in-out group-hover:from-black/95 group-hover:via-black/50" />
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">Expert Training for IELTS, PTE & LanguageCert</h3>
                    <div className="w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/25 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:scale-110 flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-slate-200/95 text-xs sm:text-sm leading-relaxed overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    We map out your future, aligning personal career goals with top-tier university courses and profile-building strategies.
                  </p>
                </div>
              </div>

              {/* Bottom Horizontal Card (Study Abroad Student Recruitment) */}
              <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-slate-100 h-[238px] cursor-pointer">
                <Image
                  src="https://framerusercontent.com/images/zTN763RqqgJAjH4qtwjuKBx3jt8.jpg"
                  alt="Study Abroad Student Recruitment"
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-xl transition-all duration-700 ease-in-out group-hover:from-black/95 group-hover:via-black/50" />
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">Study Abroad Student Recruitment</h3>
                    <div className="w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/25 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:scale-110 flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-slate-200/95 text-xs sm:text-sm leading-relaxed overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    Navigate scholarships, sponsorships, and visa-compliant funding requirements with clear, transparent advice.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      )}

      {/* OUR PROCESS SECTION */}
      {activeItem === "Home" && (
        <section className="relative z-10 bg-[#0c59be] text-white py-24 px-4 md:px-8 border-t border-blue-700/50" id="our-process-section">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white font-display">
              Our process
            </h2>
            <p className="text-slate-100/90 text-sm md:text-base leading-relaxed max-w-md">
              We have developed a comprehensive, step-by-step roadmap designed to guide you seamlessly from profile assessment to university enrollment and visa approval.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-block px-8 py-3 rounded-full border border-white/50 hover:border-white hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Card 1: 01 Admission Consulting */}
            <div className="group rounded-xl bg-white/10 border border-white/10 p-7 shadow-lg transition-all duration-700 ease-in-out hover:bg-[#FFFFFF] cursor-pointer hover:border-white">
              <span className="block text-4xl font-extrabold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out font-display mb-4">
                01.
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out mb-2">
                Admission Consulting
              </h3>
              <p className="text-slate-200 group-hover:text-[#000000] text-xs sm:text-sm leading-relaxed transition-colors duration-700 ease-in-out">
                Personalized profile evaluation and strategic application support to secure admission at top-tier global universities.
              </p>
            </div>

            {/* Card 2: 02 Visa Assistance */}
            <div className="group rounded-xl bg-white/10 border border-white/10 p-7 shadow-lg transition-all duration-700 ease-in-out hover:bg-[#FFFFFF] cursor-pointer hover:border-white">
              <span className="block text-4xl font-extrabold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out font-display mb-4">
                02.
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out mb-2">
                Visa Assistance
              </h3>
              <p className="text-slate-200 group-hover:text-[#000000] text-xs sm:text-sm leading-relaxed transition-colors duration-700 ease-in-out">
                Comprehensive support for your student visa application with high approval rates and thorough interview preparation.
              </p>
            </div>

            {/* Card 3: 03 Scholarship Guidance */}
            <div className="group rounded-xl bg-white/10 border border-white/10 p-7 shadow-lg transition-all duration-700 ease-in-out hover:bg-[#FFFFFF] cursor-pointer hover:border-white">
              <span className="block text-4xl font-extrabold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out font-display mb-4">
                03.
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out mb-2">
                Scholarship Guidance
              </h3>
              <p className="text-slate-200 group-hover:text-[#000000] text-xs sm:text-sm leading-relaxed transition-colors duration-700 ease-in-out">
                Strategic navigation of prestigious global scholarship programs, institutional grants, and fully funded pathways.
              </p>
            </div>

            {/* Card 4: 04 Profile Assessment */}
            <div className="group rounded-xl bg-white/10 border border-white/10 p-7 shadow-lg transition-all duration-700 ease-in-out hover:bg-[#FFFFFF] cursor-pointer hover:border-white">
              <span className="block text-4xl font-extrabold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out font-display mb-4">
                04.
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#000000] transition-colors duration-700 ease-in-out mb-2">
                Profile Assessment
              </h3>
              <p className="text-slate-200 group-hover:text-[#000000] text-xs sm:text-sm leading-relaxed transition-colors duration-700 ease-in-out">
                In-depth analysis of academic records, credentials, and test scores to build a custom study abroad roadmap.
              </p>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* SERVICES PAGE VIEW (ONLY ACTIVE WHEN activeItem === "Services") */}
      {activeItem === "Services" && (
        <div className="bg-[#FAF9F5] py-12">
          {/* Section 1: Intro + Feature Block (Navy Card, Immersive Image, Stat levels) */}
          <section className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto mb-24" id="services-intro">
            {/* Split Header */}
            <div className="grid md:grid-cols-12 gap-8 items-start mb-16">
              <div className="md:col-span-4">
                <span className="inline-block bg-white text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm mb-3">
                  Our Scope
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight font-display" id="services-page-subtitle-header">
                  Services
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans">
                  Explore our full range of counseling, preparation, and visa consultancy pathways. From raw transcript assessment to successful visa stamping — we&apos;ve got the perfect support mechanism for you.
                </p>
              </div>
            </div>

            {/* Three Cards Layout (Inspired by reference image) */}
            <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
              {/* Card 1 (Admission Consulting - White Background, Black Text) */}
              <div className="group rounded-2xl bg-white text-slate-900 p-8 flex flex-col justify-start shadow-xl border border-slate-200/80 relative overflow-hidden min-h-[380px] hover:shadow-2xl transition-all duration-300">
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-700" />
                <div>
                  <GraduationCap className="w-8 h-8 text-blue-600 mb-8" />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-tight text-slate-900">
                    Admission Consulting
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    Direct placement with <strong className="text-slate-900 font-semibold">top-tier global institutions</strong> & high-level statement of purpose editing — optimize your academic profile for the <strong className="text-slate-900 font-semibold">best global universities</strong> in any intake.
                  </p>
                </div>
              </div>

              {/* Card 2 (Immersive Student Image with Curved Border & Overlays) */}
              <div className="relative group rounded-2xl overflow-hidden shadow-xl min-h-[380px] bg-[#0c59be] flex items-center justify-center p-4">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Student Collaboration"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90 brightness-95"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-white text-base md:text-lg font-bold leading-snug">
                    Securing your academic pathways at prestigious institutes in the UK, USA, Australia, and Europe.
                  </p>
                </div>
              </div>

              {/* Card 3 (Stats/Level Card with customized dots indicator) */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-8 shadow-xl flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold tracking-tight text-slate-900">120+</span>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Universities</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">EIC Official Partner List</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    Our certified education strategists are prepared to maximize your admission potential and secure grants across major study destinations.
                  </p>
                </div>

                {/* Customized dot meters matching the style of the tennis level indicators in reference image */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="w-24">Bachelors</span>
                    <div className="flex gap-1.5">
                      {[...Array(10)].map((_, i) => (
                        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < 9 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                    <span className="w-10 text-right text-slate-500 font-mono">90%</span>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="w-24">Masters / MBA</span>
                    <div className="flex gap-1.5">
                      {[...Array(10)].map((_, i) => (
                        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < 10 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                    <span className="w-10 text-right text-slate-500 font-mono">100%</span>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="w-24">PhD / Doctoral</span>
                    <div className="flex gap-1.5">
                      {[...Array(10)].map((_, i) => (
                        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < 7 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                    <span className="w-10 text-right text-slate-500 font-mono">70%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Numeric Stats Row (A few more facts about us in numbers) */}
            <div className="text-center pt-8 border-t border-slate-200 pb-6">
              <span className="block text-slate-500 font-semibold uppercase tracking-widest text-xs mb-8">
                A few more facts about us in numbers
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-1">
                  <span className="block text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={10000} suffix="+" hasComma={true} />
                  </span>
                  <span className="block text-xs md:text-sm text-slate-500 font-medium">Hours of counseling</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={98.2} suffix="%" decimals={1} />
                  </span>
                  <span className="block text-xs md:text-sm text-slate-500 font-medium">Visa success rate</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={1500} suffix="+" hasComma={true} />
                  </span>
                  <span className="block text-xs md:text-sm text-slate-500 font-medium">Successful admissions</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={120} prefix="PKR " suffix="M+" />
                  </span>
                  <span className="block text-xs md:text-sm text-slate-500 font-medium">Scholarships secured</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Split columns - Services Detail (Matching lower Services section of reference image) */}
          <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-20 px-4 md:px-8 border-t border-slate-200" id="services-grid">
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
              {/* Left Column (Left content of split) */}
              <div className="md:col-span-5 space-y-6">
                <span className="inline-block bg-white text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  Services
                </span>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                  Explore our full range of counseling, preparation, and visa consultancy pathways. From raw transcript assessment to successful visa stamping — we&apos;ve got the perfect support mechanism for you.
                </p>
                <div>
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="inline-flex items-center justify-between gap-3 pl-6 pr-1 py-1 bg-[#0040fa] hover:bg-[#1a54ff] text-white rounded-full transition-all duration-300 shadow-md cursor-pointer group"
                  >
                    <span className="text-[14px] font-semibold tracking-wider">Explore More</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column - Grid of two overlays (Visa & Profile) */}
              <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
                {/* Service Card 1: Visa Assistance */}
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-[340px] cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop"
                    alt="Visa Assistance"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 rounded-2xl transition-all duration-700" />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      Visa Assistance
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1">
                    <p className="text-white text-xs font-semibold uppercase tracking-widest text-blue-400">Embassy Prep</p>
                    <p className="text-slate-100 text-sm leading-relaxed font-light">
                      Step into a space built for future global scholars — meticulously prepared for visa success, finance compliance, and flawless interviews.
                    </p>
                  </div>
                </div>

                {/* Service Card 2: Profile Assessment */}
                <div className="relative group overflow-hidden rounded-2xl shadow-xl h-[340px] cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
                    alt="Profile Assessment"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 rounded-2xl transition-all duration-700" />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      Profile Assessment
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1">
                    <p className="text-white text-xs font-semibold uppercase tracking-widest text-blue-400">Credential Audit</p>
                    <p className="text-slate-100 text-sm leading-relaxed font-light">
                      Complete diagnostic overview of your academic grades and score logs to match you with matching funding and top-tier global programs.
                    </p>
                  </div>
                  {/* Subtle slider controls mockup just like the tennis screen to look authentic */}
                  <div className="absolute bottom-4 right-4 z-30 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white text-[10px]">←</div>
                    <div className="w-6 h-6 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white text-[10px]">→</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2.5: Comprehensive Services (Admission Consulting, Visa Assistance, Scholarship Guidance, Profile Assessment) */}
          <section className="relative z-10 bg-white py-24 px-4 md:px-8 border-t border-slate-200" id="services-detailed-comprehensive">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Header */}
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="inline-block bg-slate-100 text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm animate-none">
                  Our Pillars
                </span>
                <h3 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight font-display">
                  Core Consultancy Pathways
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Every step of your international academic journey is fully covered by our specialized, results-driven consulting divisions.
                </p>
              </div>

              {/* Clean Paragraphs with Titles (No Cards) */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
                {/* 1. Admission Consulting */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Admission Consulting</h4>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                    Complete profile auditing, customized university matching, and professional essay and SOP coaching to optimize your eligibility for elite global schools.
                  </p>
                </div>

                {/* 2. Visa Assistance */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Visa Assistance</h4>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                    Comprehensive file assembling, financial documentation review, and structured mock interviews with visa officers to secure maximum embassy approvals.
                  </p>
                </div>

                {/* 3. Scholarship Guidance */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Scholarship Guidance</h4>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                    Direct mapping for fully-funded fellowships and institutional merit grants. We assist with critical research proposal reviews and supervisor outreach.
                  </p>
                </div>

                {/* 4. Profile Assessment */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Compass className="w-6 h-6 text-blue-600 flex-shrink-0 animate-none" />
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Profile Assessment</h4>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed pl-9">
                    Deep diagnostic evaluations of your academic logs, extracurricular activities, and budget goals to outline a secure, customized study abroad strategy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Relatable FAQ's (Replaces Consultancy Packages, placed above footer) */}
          <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-24 px-4 md:px-8 border-t border-slate-200" id="services-faq">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center max-w-2xl mx-auto">
                <span className="inline-block bg-white text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  FAQ&apos;s
                </span>
                <h3 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight font-display">
                  Relatable Questions & Answers
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Have questions about admissions, visas, or scholarships? Find answers to the most common queries from students in Faisalabad.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-4 pt-6">
                {[
                  {
                    q: "What services does EIC International offer for students?",
                    a: "We offer complete end-to-end guidance including Admission Consulting (profile assessment & university selection), Visa Assistance (documentation preparation & interview prep), Scholarship Guidance, and personalized Profile Assessment."
                  },
                  {
                    q: "How long does the entire admission and visa process usually take?",
                    a: "The timeline varies by destination. Generally, university applications take 4-8 weeks, while visa processing takes an additional 3-12 weeks. We recommend starting your journey 6 to 9 months before your desired intake."
                  },
                  {
                    q: "Are there fully funded scholarships available for Pakistani students?",
                    a: "Yes! There are numerous prestigious scholarships like Erasmus Mundus, Chevening, Commonwealth, and Fulbright, alongside 20%-50% university-specific merit scholarships. EIC International provides tailored scholarship planning to optimize your profile."
                  },
                  {
                    q: "Does EIC International assist with IELTS, PTE, or LanguageCert prep?",
                    a: "Absolutely! We have a highly dedicated coaching department with certified, result-oriented instructors to help you achieve your desired bands in IELTS Academic, PTE Academic, or LanguageCert exams."
                  },
                  {
                    q: "What is the visa success rate of EIC International clients?",
                    a: "We pride ourselves on maintaining an exceptional visa approval rate exceeding 95% across major study destinations (UK, USA, Australia, and Canada) due to our stringent document audits and thorough mock interviews."
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-slate-50/50"
                      >
                        <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4">
                          {faq.q}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 group-hover:bg-slate-200 transition-colors">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-blue-600 animate-none" />
                          ) : (
                            <Plus className="w-4 h-4 text-slate-600 animate-none" />
                          )}
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* SUBSECTION PREVIEW (To satisfy the arrow target cleanly & offer minimalist details) */}
      {(activeItem === "Home" || activeItem === "Destinations") && (
        <>
          <section id="features-preview" className="relative z-10 bg-[#FAF9F5] text-slate-900 py-20 px-4 md:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-600 font-bold font-sans uppercase tracking-widest text-xs">Our Global Footprint</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight font-display">Study in Elite Destinations</h2>
            <p className="text-slate-500 text-sm">We provide customized admissions pathways to premium world-class institutions across key dynamic regions.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalFootprintCountries.map((country) => {
              const LandmarkIcon = country.Icon;
              return (
                <a
                  key={country.shortName}
                  href={country.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
                  id={`country-card-${country.shortName.toLowerCase()}`}
                >
                  {/* Subtle decorative background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
                      <LandmarkIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                      {country.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                      Intake: {country.intake}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                      View Brochure
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* Quick interactive guide banner (Full width, touches the edges of screen with no side padding/margins) */}
      <div className="relative z-10 w-full bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl rounded-none">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-bold text-xl md:text-2xl font-display">Need custom profile assessment?</h3>
            <p className="text-slate-300 text-sm">Unlock tailored matching based on your grades and budget requirements.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-xs shadow-md transition-all shrink-0"
            >
              Start Free Assessment
            </button>
          </div>
        </div>
      </div>
        </>
      )}

      {/* WHO WE ARE CUSTOM PAGE (SK1LLEX INSPIRED DESIGN) */}
      {activeItem === "About" && activeSubItem === "Who We Are" && (
        <div className="bg-[#FAF9F5] text-slate-900 pb-0 overflow-hidden">
          
          {/* Component 1: Watch. Learn. Grow. Style Hero Block */}
          <section className="relative px-4 md:px-8 pt-16 pb-24 max-w-6xl mx-auto" id="who-we-are-hero">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Big Display Headline */}
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block bg-white text-slate-800 border border-slate-200 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                  About EIC International
                </span>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 font-display leading-[1.05] mb-2">
                  Guide.<br />
                  Dream.<br />
                  <span className="text-blue-600">Achieve.</span>
                </h1>
                
                <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-md">
                  Since 2012, EIC has served as Faisalabad&apos;s premier portal to world-class higher education. We actively sculpt global futures, guiding ambitious students through each milestone of their academic transition.
                </p>
              </div>

              {/* Right Column: Interactive Expandable Vertical Panels */}
              <div className="lg:col-span-7">
                <div className="flex gap-4 h-[420px] md:h-[480px] w-full">
                  {[
                    {
                      id: 0,
                      title: "Academic Consultancy & Audit",
                      shortTitle: "Admissions Consulting",
                      subtitle: "100+ Course Choices",
                      desc: "Complete academic profile evaluations matching your grades with direct pathways.",
                      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop"
                    },
                    {
                      id: 1,
                      title: "Certified Language Academy",
                      shortTitle: "IELTS & SAT Academy",
                      subtitle: "98% Success Rate",
                      desc: "Qualified lectures and rigorous computer-based mock exams to secure target bands.",
                      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                    },
                    {
                      id: 2,
                      title: "Global Visa stamping mastery",
                      shortTitle: "Visa Filing Mastery",
                      subtitle: "14+ Years Legacy",
                      desc: "Unmatched document review and rigorous interview simulator sessions with visa experts.",
                      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                    }
                  ].map((panel) => {
                    const isHovered = whoWeAreHoveredPanel === panel.id;
                    return (
                      <div
                        key={panel.id}
                        onMouseEnter={() => setWhoWeAreHoveredPanel(panel.id)}
                        className={`relative rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-out flex flex-col justify-end p-6 border border-slate-200/50 ${
                          isHovered ? "flex-[4]" : "flex-[1]"
                        }`}
                      >
                        {/* Panel Image */}
                        <Image
                          src={panel.image}
                          alt={panel.title}
                          fill
                          className={`object-cover transition-all duration-700 ease-out ${
                            isHovered ? "scale-105 filter brightness-[0.4]" : "scale-100 filter brightness-[0.25] saturate-[0.6]"
                          }`}
                          referrerPolicy="no-referrer"
                          sizes="(max-width: 1024px) 100vw, 400px"
                        />

                        {/* Collapsed view text (Vertically Rotated) */}
                        {!isHovered && (
                          <div className="absolute inset-0 flex items-center justify-center p-3 select-none pointer-events-none">
                            <span className="text-white font-bold text-xs uppercase tracking-[0.25em] whitespace-nowrap rotate-90 origin-center text-center">
                              {panel.shortTitle}
                            </span>
                          </div>
                        )}

                        {/* Expanded view details (Fades in) */}
                        <div
                          className={`relative z-10 space-y-3 transition-all duration-500 delay-100 ${
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                          }`}
                        >
                          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {panel.subtitle}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight">
                            {panel.title}
                          </h3>
                          <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                            {panel.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>

          {/* Component 2: Partners & Categories Tabs Section */}
          <section className="bg-white py-24 px-4 md:px-8 border-t border-b border-slate-100" id="who-we-are-partners">
            <div className="max-w-6xl mx-auto space-y-12">
              
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="text-blue-600 font-extrabold uppercase tracking-widest text-[11px] font-sans">
                  Partner Placements
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight font-display">
                  Unlimited access to 500+ global universities.
                </h2>
                <p className="text-slate-500 text-sm font-light">
                  Explore custom course streams mapped across premium institutions. Simply select your targeted region to filter the programs.
                </p>
              </div>

              {/* Regional selection tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
                {["All Regions", "United Kingdom", "United States", "Canada", "Australia"].map((tab) => {
                  const isActive = whoWeAreRegionTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setWhoWeAreRegionTab(tab)}
                      className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all uppercase cursor-pointer ${
                        isActive 
                          ? "bg-slate-900 text-white shadow-md scale-[1.02]" 
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Placements Card Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    region: "United Kingdom",
                    title: "Russell Group Admissions",
                    tag: "UK Universities",
                    duration: "1 Year Masters",
                    bg: "bg-[#FFFDF4] border-[#FCEEBC]",
                    accent: "text-amber-800 bg-amber-100/50",
                    desc: "Direct access to top-tier UK research institutes with personalized guidance on statement write-ups."
                  },
                  {
                    region: "United States",
                    title: "Ivy League & STEM Pathways",
                    tag: "US Colleges",
                    duration: "4 Year Bachelors",
                    bg: "bg-[#F3FAF5] border-[#D1F2DD]",
                    accent: "text-green-800 bg-green-100/50",
                    desc: "Maximize funding and Teaching Assistantships with holistic profile design and test waiver strategies."
                  },
                  {
                    region: "Canada",
                    title: "PGWP Co-Op Placements",
                    tag: "Canada Colleges",
                    duration: "2 Year Diploma",
                    bg: "bg-[#F6F6F6] border-[#E5E5E5]",
                    accent: "text-slate-800 bg-slate-200/50",
                    desc: "Apply to elite colleges offering dynamic study-work terms and seamless pathways to permanent residency."
                  },
                  {
                    region: "Australia",
                    title: "Group of Eight Research",
                    tag: "Australia Universities",
                    duration: "2 Year Research Masters",
                    bg: "bg-[#FFF4F4] border-[#FCD6D6]",
                    accent: "text-rose-800 bg-rose-100/50",
                    desc: "Align directly with prominent Australian faculty members for thesis approval and research scholarships."
                  }
                ].filter(card => whoWeAreRegionTab === "All Regions" || card.region === whoWeAreRegionTab).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-6 rounded-3xl border ${card.bg} space-y-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${card.accent}`}>
                          {card.tag}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {card.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 group-hover:underline">
                        Apply Pathway
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 hover:bg-slate-50 shadow-sm transition-colors cursor-pointer">
                        <ArrowUpRight className="w-4 h-4 text-slate-700" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* CTA Banner section at bottom (Full screen width, zero margins, seamless with footer) */}
          <section className="relative w-full text-center" id="who-we-are-cta">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-12 md:p-20 shadow-none space-y-6 relative overflow-hidden w-full m-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-semibold font-display tracking-tight leading-tight max-w-4xl mx-auto">
                Ready to Sculpt Your Global Career?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
                Schedule a premium, confidential profile audit with EIC International&apos;s principal consultants today. Turn your study dreams into a reality.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 max-w-md mx-auto">
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
                >
                  Apply Online Now
                </button>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </section>

        </div>
      )}
      {activeItem === "About" && activeSubItem === "Our Team" && (
        <div className="bg-white text-slate-900 pb-0 overflow-hidden">
          
          {/* Component 1: Our Mission / Why We Built EIC */}
          <section className="relative px-4 md:px-8 pt-16 pb-12 max-w-6xl mx-auto" id="team-header">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10">
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  Our Mission
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight font-display leading-tight">
                  Why We Built EIC
                </h1>
              </div>
              <p className="text-slate-500 font-light text-sm sm:text-base max-w-lg leading-relaxed">
                We built EIC to simplify how international study consulting operates — to remove repetitive steps, eliminate confusing visa requirements, and surface real-time solutions that actually help students succeed.
              </p>
            </div>

            {/* Immersive landscape image below header with rounded corners */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-[2px] overflow-hidden shadow-lg mt-4">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="EIC International leadership team"
                fill
                priority
                className="object-cover object-center"
                referrerPolicy="no-referrer"
                sizes="100vw"
              />
            </div>
          </section>

          {/* Three Core Values: Simplify, Scale, Humanize */}
          <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto border-t border-slate-100" id="team-values">
            <div className="space-y-8 divide-y divide-slate-100">
              {/* Simplify */}
              <div className="flex flex-col md:flex-row justify-between items-start pt-8 first:pt-0 gap-4 md:gap-12">
                <h3 className="text-2xl font-bold font-display text-slate-900 md:w-1/3">
                  Simplify
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed md:w-2/3">
                  To eliminate repetitive manual steps and paperwork in admissions through intelligent digital portal matching — giving students clarity, speed, and absolute focus to secure their spots effortlessly.
                </p>
              </div>

              {/* Scale */}
              <div className="flex flex-col md:flex-row justify-between items-start pt-8 gap-4 md:gap-12">
                <h3 className="text-2xl font-bold font-display text-slate-900 md:w-1/3">
                  Scale
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed md:w-2/3">
                  To empower students to reach world-class universities without complex procedures. EIC bridges every gap between admissions, document drafting, and visa filing, so applicants can step forward smarter and faster.
                </p>
              </div>

              {/* Humanize */}
              <div className="flex flex-col md:flex-row justify-between items-start pt-8 gap-4 md:gap-12">
                <h3 className="text-2xl font-bold font-display text-slate-900 md:w-1/3">
                  Humanize
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed md:w-2/3">
                  To deliver professional counseling that amplifies student potential. We design personalized pathways that look ahead, manage the complex paperwork, and let you focus on your academic dreams and future career.
                </p>
              </div>
            </div>
          </section>

          {/* Grid Header & Grid of 4 Team Members */}
          <section className="bg-slate-50/50 py-24 px-4 md:px-8 border-t border-slate-100" id="team-grid-section">
            <div className="max-w-6xl mx-auto space-y-16">
              
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-blue-600 font-extrabold uppercase tracking-widest text-[11px] font-sans block">
                  Meet Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-display">
                  Builders. Operators. Dreamers.
                </h2>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  EIC is built by a team that believes in smarter work — not harder work. We come from diverse backgrounds in global admissions, visa filing, and language preparation, united by one goal: to make international transition simple, transparent, and human.
                </p>
              </div>

              {/* Grid of 4 Team Member cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Alice Johnson",
                    role: "Founder",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
                    linkedin: "https://linkedin.com",
                    facebook: "https://facebook.com"
                  },
                  {
                    name: "Carter Botosh",
                    role: "Co-Founder",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
                    linkedin: "https://linkedin.com",
                    facebook: "https://facebook.com"
                  },
                  {
                    name: "Sophia Chen",
                    role: "VP of Admissions",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
                    linkedin: "https://linkedin.com",
                    facebook: "https://facebook.com"
                  },
                  {
                    name: "Abram Culhane",
                    role: "VP of Visa Operations",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
                    linkedin: "https://linkedin.com",
                    facebook: "https://facebook.com"
                  }
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F6F5F2] rounded-none border border-slate-200/50 overflow-hidden flex flex-col justify-between pt-6 group shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Top Name and Role info */}
                    <div className="px-6 pb-6 space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                        {member.name}
                      </h3>
                      <p className="text-xs font-light text-slate-500 italic font-mono uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    {/* Image area with social badge bottom right */}
                    <div className="relative aspect-[4/5] w-full mt-auto overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                        referrerPolicy="no-referrer"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      
                      {/* Social Badge in bottom-right corner */}
                      <div className="absolute bottom-4 right-4 bg-black text-white rounded-full py-1 px-3 flex items-center gap-2.5 shadow-lg opacity-90 backdrop-blur-sm">
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <span className="w-[1px] h-3.5 bg-white/20" />
                        <a 
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-400 transition-colors"
                          title="Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Full-width CTA Banner at bottom, zero margins */}
          <section className="relative w-full text-center" id="team-cta">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-12 md:p-20 shadow-none space-y-6 relative overflow-hidden w-full m-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-semibold font-display tracking-tight leading-tight max-w-4xl mx-auto">
                Ready to Sculpt Your Global Career?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
                Schedule a premium, confidential profile audit with EIC International&apos;s principal consultants today. Turn your study dreams into a reality.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 max-w-md mx-auto">
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
                >
                  Apply Online Now
                </button>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* TESTIMONIALS SECTION */}
      {(activeItem === "Home" || (activeItem === "About" && activeSubItem === "Success Stories")) && (
        <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-24 px-4 md:px-8 border-t border-slate-100" id="testimonials-section">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header row with line, title and paragraph side-by-side */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-blue-600" />
                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] font-display">
                Trusted by 10k+ customers
              </h2>
            </div>
            <div>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                Whether you&apos;re an ambitious student seeking premier global universities or a professional chasing international career milestones, let us be your trusted advisor on the path to success.
              </p>
            </div>
          </div>

          {/* Testimonial Cards Carousel Track with Fade Masks */}
          <div className="relative w-full overflow-hidden">
            {/* Left and right fade gradient mask */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10 pointer-events-none" />

            {/* Horizontal Scrollable Container (Infinite Marquee) */}
            <div className="flex gap-6 overflow-hidden py-6">
              <motion.div
                className="flex gap-6 shrink-0"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 40, // Elegant slow speed
                  repeat: Infinity,
                }}
              >
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <a
                    key={idx}
                    href="https://www.google.com/search?q=EIC+International+(Private)+Limited+-+Study+Abroad+Consultants&rlz=1C1ONGR_en-GBPK1221PK1221&oq=eic&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYOTIICAIQRRgnGDsyBwgDEAAYgAQyEggEEC4YFBivARjHARiHAhiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDI3MDZqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x3922425d978cf6ef:0xbc4e8b8495a6ec27,1,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`testimonial-card-${idx}`}
                    className="flex-shrink-0 w-[290px] sm:w-[340px] min-h-[310px] sm:min-h-[338px] rounded-2xl p-8 bg-white border border-slate-100 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.06)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-5">
                      {/* Stars & Google Review badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#FFC966]">
                          {Array.from({ length: 5 }).map((_, sIdx) => (
                            <Star
                              key={sIdx}
                              className="w-4 h-4 fill-current"
                              style={{ opacity: sIdx < t.stars ? 1 : 0.2 }}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 group-hover:bg-blue-50 px-2 py-1 rounded-md transition-colors duration-300">
                          <svg className="w-3.5 h-3.5 text-[#4285F4] fill-current" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">Google Review</span>
                        </div>
                      </div>

                      {/* Feedback text */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal group-hover:text-slate-800 transition-colors duration-300">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>

                    {/* Author & Arrow Up-Right */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50 flex items-center justify-center font-bold text-sm shrink-0 font-display group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                          {t.name.charAt(0)}
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-slate-900 text-sm tracking-tight font-display group-hover:text-blue-600 transition-colors duration-300">
                            {t.name}
                          </h4>
                          <p className="text-slate-400 text-[11px] font-medium leading-none">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* COURSES VIEW */}
      {activeItem === "Courses" && (
        <section className="relative z-10 bg-white text-slate-900 py-24 px-4 md:px-8 animate-fadeIn" id="courses-page-section">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-blue-600 font-bold font-sans uppercase tracking-widest text-xs">Certified Preparation Programs</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-display">Achieve Your Target Scores</h2>
              <p className="text-slate-500 text-sm">Our high-scoring certified faculty, customized diagnostic tests, and interactive computerized prep labs ensure your success.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: IELTS */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">IELTS Preparation</h3>
                    <p className="text-slate-500 text-xs mt-1">Academic & General Training Streams</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Personalized coaching from expert, certified British Council and IDP trained facilitators. Includes interactive feedback sessions and comprehensive diagnostic evaluations.
                  </p>
                  
                  <div className="border-t border-slate-200/80 pt-6 space-y-3.5">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span><strong>Duration:</strong> 8 Weeks Regular / 4 Weeks Crash Course</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span><strong>Target Score:</strong> Band 7.5+ Guaranteed Path</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span><strong>Mock Tests:</strong> 12 Full-length Mock Evaluations</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, targetCountry: "IELTS Prep" }));
                      setIsApplyModalOpen(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Register for IELTS Class
                  </button>
                </div>
              </div>

              {/* Card 2: SAT */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Top Tier</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Digital SAT Coaching</h3>
                    <p className="text-slate-500 text-xs mt-1">Adaptive Mock Testing Platform</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Master shortcuts for math modules, critical reading comprehension strategies, and digital platform pacing on the live adaptive framework.
                  </p>
                  
                  <div className="border-t border-slate-200/80 pt-6 space-y-3.5">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span><strong>Duration:</strong> 10 Weeks Standard Cohort</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span><strong>Target Score:</strong> 1450+ Score Enhancement</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span><strong>Resources:</strong> Official Bluebook Prep and Live Drills</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, targetCountry: "SAT Prep" }));
                      setIsApplyModalOpen(true);
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Register for SAT Class
                  </button>
                </div>
              </div>

              {/* Card 3: PTE / TOEFL */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Fast Track</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">PTE & TOEFL Academic</h3>
                    <p className="text-slate-500 text-xs mt-1">Computerized AI Mock Assessments</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Intensive coaching on speaking algorithms, structured template-based writing strategies, and reading techniques with exact computer laboratory feedback.
                  </p>
                  
                  <div className="border-t border-slate-200/80 pt-6 space-y-3.5">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span><strong>Duration:</strong> 4-6 Weeks Fast-Track Sessions</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span><strong>Target Score:</strong> PTE 79+ / TOEFL 105+ Pathways</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span><strong>Practice:</strong> Daily AI-scored speaking templates</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, targetCountry: "PTE Prep" }));
                      setIsApplyModalOpen(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Register for PTE Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOGS VIEW */}
      {activeItem === "Blogs" && (
        <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-24 px-4 md:px-8 animate-fadeIn animate-duration-500" id="blogs-page-section">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* HELPER FOR RENDERING BOLD TEXTS */}
            {(() => {
              // We define the formatBoldText inline helper
              const formatBoldText = (text: string) => {
                if (!text) return "";
                return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              };

              if (activeBlogPost) {
                // RENDER DETAILED BLOG PAGE LIKE REFERENCE IMAGE
                const recentBlogs = BLOGS_DATA.filter(b => b.id !== activeBlogPost.id);

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {/* Breadcrumbs Back Button */}
                    <button
                      onClick={() => {
                        setActiveBlogPost(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors group cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Back to Articles
                    </button>

                    {/* Featured Image and Title Banner */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[480px] rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={activeBlogPost.image}
                        alt={activeBlogPost.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                      
                      {/* Category Badge Top Left */}
                      <span className="absolute top-6 left-6 bg-sky-100 text-sky-800 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm">
                        {activeBlogPost.category}
                      </span>

                      {/* Title Overlay Bottom Left */}
                      <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-2">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight leading-tight max-w-4xl font-display text-white">
                          {activeBlogPost.title}
                        </h1>
                        <p className="text-slate-300 text-xs font-mono">
                          {activeBlogPost.date}
                        </p>
                      </div>
                    </div>

                    {/* Social Share Bar */}
                    <div className="flex justify-end items-center gap-4 py-2 border-b border-slate-200/60">
                      <span className="text-xs text-slate-400 font-medium font-sans">Share this:</span>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer" title="Share on Facebook">
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer" title="Share on Pinterest">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer" title="Share on Twitter / X">
                          <span className="font-sans font-bold text-sm">𝕏</span>
                        </button>
                        <button className="p-2 text-slate-500 hover:text-blue-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer" title="Share on LinkedIn">
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Main Two-Column Grid */}
                    <div className="grid lg:grid-cols-10 gap-12 pt-4">
                      {/* Left Column: Rich Content */}
                      <div className="lg:col-span-7 space-y-8">
                        {/* Introduction */}
                        <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                          {activeBlogPost.introduction.map((para: string, idx: number) => (
                            <p key={idx} dangerouslySetInnerHTML={{ __html: formatBoldText(para) }} />
                          ))}
                        </div>

                        {/* Top links if any */}
                        {activeBlogPost.links && activeBlogPost.links.map((link: any, idx: number) => (
                          <div key={idx} className="my-6 p-5 bg-sky-50 border-l-4 border-sky-500 rounded-r-lg">
                            <a href={link.href} className="text-sky-800 hover:text-sky-950 font-bold underline text-sm block">
                              {link.text}
                            </a>
                          </div>
                        ))}

                        {/* Rich Content Sections */}
                        <div className="space-y-10">
                          {activeBlogPost.sections.map((section: any, idx: number) => (
                            <div key={idx} className="space-y-4">
                              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 border-b border-slate-100 pb-2">
                                {section.title}
                              </h2>
                              
                              {section.image && (
                                <div className="relative w-full h-[220px] sm:h-[320px] rounded-lg overflow-hidden my-4 shadow-sm">
                                  <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              )}
                              
                              {section.paragraphs && section.paragraphs.map((p: string, pIdx: number) => (
                                <p key={pIdx} className="text-slate-600 leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: formatBoldText(p) }} />
                              ))}

                              {/* Subsections */}
                              {section.subsections && (
                                <div className="space-y-6 mt-4 pl-4 border-l-2 border-slate-200">
                                  {section.subsections.map((sub: any, subIdx: number) => (
                                    <div key={subIdx} className="space-y-2">
                                      <h3 className="text-lg font-bold text-slate-800 font-sans">
                                        {sub.title}
                                      </h3>
                                      <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formatBoldText(sub.content) }} />
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* List Items */}
                              {section.listItems && (
                                <ol className="space-y-3 pl-6 list-decimal text-slate-600 text-sm md:text-base">
                                  {section.listItems.map((item: string, itemIdx: number) => (
                                    <li key={itemIdx} className="pl-1" dangerouslySetInnerHTML={{ __html: formatBoldText(item) }} />
                                  ))}
                                </ol>
                              )}

                              {/* Additional Text */}
                              {section.additionalText && (
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-4" dangerouslySetInnerHTML={{ __html: formatBoldText(section.additionalText) }} />
                              )}

                              {/* Section Link */}
                              {section.link && (
                                <div className="my-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                  <a href={section.link.href} className="text-blue-800 hover:text-blue-950 font-bold underline text-sm block">
                                    {section.link.text}
                                  </a>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* FAQs Segment */}
                        {activeBlogPost.faqs && (
                          <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
                            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                              FAQs
                            </h3>
                            <div className="space-y-4">
                              {activeBlogPost.faqs.map((faq: any, faqIdx: number) => (
                                <div key={faqIdx} className="bg-slate-50 border border-slate-200/60 p-5 rounded-lg">
                                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                                    {faq.q}
                                  </h4>
                                  <p className="text-slate-600 text-sm leading-relaxed">
                                    {faq.a}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Author Signature Box */}
                        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-5 bg-slate-50 p-6 rounded-lg border border-slate-200/60">
                          {activeBlogPost.author.name !== "Rizwan.S" && (
                            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                              <Image
                                src={activeBlogPost.author.avatar}
                                alt={activeBlogPost.author.name}
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          <div className="text-center sm:text-left space-y-1">
                            <h4 className="font-bold text-slate-900 text-base">
                              {activeBlogPost.author.name}
                            </h4>
                            <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">
                              {activeBlogPost.author.title}
                            </p>
                            <p className="text-slate-500 text-xs">
                              Providing verified academic pathways, visa assistance, and golden visa strategies for students and global investors.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Recent Blogs Sidebar */}
                      <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-6 lg:sticky lg:top-28">
                          {/* Recent Blogs */}
                          <div className="space-y-5 bg-white p-6 rounded-lg border border-slate-200/60 shadow-sm">
                            <h3 className="text-sm font-bold font-sans uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
                              Recent Blogs
                            </h3>
                            <div className="space-y-4">
                              {recentBlogs.map((blog: any) => (
                                <div
                                  key={blog.id}
                                  onClick={() => {
                                    setActiveBlogPost(blog);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }}
                                  className="flex gap-3 group cursor-pointer"
                                >
                                  <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 border border-slate-200/60 bg-slate-50">
                                    <Image
                                      src={blog.image}
                                      alt={blog.title}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                  <div className="space-y-1 flex-1">
                                    <h4 className="text-[11px] font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                                      {blog.title}
                                    </h4>
                                    <span className="text-[9px] text-slate-400 block font-mono">
                                      {blog.date}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Sidebar Widget */}
                          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-lg p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                            <div className="relative space-y-4">
                              <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest block w-max">
                                EIC Assistance
                              </span>
                              <h3 className="text-base font-bold font-display leading-tight">
                                Ready to Start Your Journey?
                              </h3>
                              <p className="text-slate-300 text-xs leading-relaxed">
                                Speak directly with {activeBlogPost.author.name} or one of our certified visa experts to evaluate your eligibility today.
                              </p>
                              <button
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, targetCountry: activeBlogPost.category }));
                                  setIsApplyModalOpen(true);
                                }}
                                className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold py-3 px-4 rounded-lg text-xs transition-colors shadow-md text-center block cursor-pointer"
                              >
                                Apply Online Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // RENDER STANDARD BLOG CARDS GRID
              return (
                <div className="space-y-16">
                  <div className="text-center max-w-2xl mx-auto space-y-4">
                    <span className="text-blue-600 font-bold font-sans uppercase tracking-widest text-xs">EIC International Blog</span>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-display">Guides & Immigration News</h2>
                    <p className="text-slate-500 text-sm">Stay ahead with real-time updates on visa rules, educational guidelines, and target score strategies written by our counselors.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {BLOGS_DATA.map((blog) => (
                      <div
                        key={blog.id}
                        onClick={() => {
                          setActiveBlogPost(blog);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-white rounded-lg overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                              {blog.category}
                            </div>
                          </div>
                          <div className="p-6 space-y-3">
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                              <span>{blog.date}</span>
                              <span>•</span>
                              <span>{blog.readTime}</span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {blog.title}
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                              {blog.summary}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveBlogPost(blog);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="w-full bg-black hover:bg-neutral-900 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-colors text-center shadow-sm cursor-pointer"
                          >
                            Read Full Article
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

          </div>
        </section>
      )}

      {/* CONTACT VIEW */}
      {activeItem === "Contact" && (
        <>
          {/* CONTACT HERO SECTION */}
          <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <motion.div 
              style={{ y: contactBgY, translateZ: 0 }}
              className="absolute inset-0 w-full h-full z-0 will-change-transform"
            >
              <Image
                src="https://framerusercontent.com/images/DavOSRpuxbuR1A0IkEQnbkK9pzA.jpg"
                alt="Business meeting"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
            </motion.div>

            {/* Container for title */}
            <motion.div 
              style={{ y: contactTextY, opacity: contactTextOpacity, translateZ: 0 }}
              className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center mt-12 will-change-[transform,opacity]"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display"
              >
                Contact
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-slate-300 text-sm sm:text-base mt-4 max-w-lg mx-auto font-light"
              >
                We are here to guide you. Reach out to our expert team at EIC International.
              </motion.p>
            </motion.div>
          </section>

          {/* CONTACT CONTENT SECTION */}
          <section className="relative z-10 bg-[#FAF9F5] text-slate-900 py-20 px-4 md:px-8 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                
                {/* Left Column - Contact Details */}
                <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="text-blue-600 font-bold font-sans uppercase tracking-widest text-xs">Get in Touch</span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                        We&apos;d love to hear from you
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Have questions about study destinations, admissions, or visa applications? Contact us or visit our head office. Our certified advisors are ready to help.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      {/* Phone */}
                      <a 
                        href="tel:03165554535" 
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Call Us</h4>
                          <p className="text-slate-800 text-sm sm:text-base font-bold mt-1">0316 5554535</p>
                        </div>
                      </a>

                      {/* Email */}
                      <a 
                        href="mailto:info@eicintl.com" 
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Email Us</h4>
                          <p className="text-slate-800 text-sm sm:text-base font-bold mt-1">info@eicintl.com</p>
                        </div>
                      </a>

                      {/* Address */}
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <MapPinned className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Our Office</h4>
                          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mt-1">
                            1st Floor, Unique Plaza, Jaranwala Rd, next to Executive Passport Office, Kohinoor City Faisalabad, 38000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elegant working hours card */}
                  <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-2xl space-y-4 shadow-xl">
                    <h4 className="font-bold tracking-wide font-display text-base">Office Hours</h4>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Monday - Friday</span>
                        <span className="font-semibold text-white">09:00 AM - 06:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">10:00 AM - 04:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-rose-400 font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Beautiful Form Container */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl flex flex-col justify-between">
                  {contactSubmitted ? (
                    <div className="py-20 text-center space-y-4 my-auto">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-slate-900">Message Received!</h3>
                      <p className="text-slate-500 text-sm max-w-sm mx-auto">
                        Thank you for contacting EIC International. An expert admissions consultant will review your query and respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display">Send us a Message</h3>
                        <p className="text-slate-500 text-xs sm:text-sm">We usually respond within 2-3 hours during office hours.</p>
                      </div>

                      <div className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={contactFormData.fullName}
                            onChange={handleContactInputChange}
                            placeholder="Zainab Malik"
                            className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 transition-colors"
                          />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={contactFormData.email}
                              onChange={handleContactInputChange}
                              placeholder="zainab@example.com"
                              className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={contactFormData.phone}
                              onChange={handleContactInputChange}
                              placeholder="0316 5554535"
                              className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Subject / Destination */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Intended Destination</label>
                          <select
                            name="subject"
                            value={contactFormData.subject}
                            onChange={handleContactInputChange}
                            className="w-full text-sm px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 transition-colors"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="United Kingdom">Study in United Kingdom</option>
                            <option value="Australia">Study in Australia</option>
                            <option value="Canada">Study in Canada</option>
                            <option value="United States">Study in United States</option>
                            <option value="Germany">Study in Germany / Europe</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Your Message</label>
                          <textarea
                            name="message"
                            required
                            rows={4}
                            value={contactFormData.message}
                            onChange={handleContactInputChange}
                            placeholder="Type your question or query here..."
                            className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 resize-none transition-colors"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-center text-sm shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all cursor-pointer"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </section>

          {/* GOOGLE MAP SECTION */}
          <section className="relative z-10 bg-[#FAF9F5] pb-24 px-4 md:px-8 border-b border-slate-100">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-blue-600 font-bold font-sans uppercase tracking-widest text-xs">Our Location</span>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-display">Find Our Head Office</h2>
                  <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
                    We are centrally located in Kohinoor City, Faisalabad, right next to the Executive Passport Office. Visit us for an in-person free assessment and consultation.
                  </p>
                </div>
                
                {/* Interactive Map Frame Wrapper */}
                <div className="relative w-full h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200/50">
                  <iframe
                    src="https://maps.google.com/maps?q=EIC%20International,%20Unique%20Plaza,%20Jaranwala%20Rd,%20Kohinoor%20City,%20Faisalabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EIC International Location Map"
                  />
                  
                  {/* Embedded requested element from EIC spec */}
                  <iframe 
                    aria-hidden="true" 
                    frameBorder="0" 
                    tabIndex={-1} 
                    style={{ zIndex: -1, position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", borderStyle: "none", opacity: 0 }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-[#000000] text-white py-16 px-4 md:px-8 relative z-10 font-sans">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Call to Action Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/20">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-display text-white max-w-xl leading-tight">
              Ready to yield your true academic potential?
            </h2>
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="self-start md:self-auto px-8 py-3.5 border border-white/40 hover:bg-white hover:text-black text-white rounded-full text-sm font-semibold transition-all duration-300 active:scale-95"
            >
              Get started
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white/90">
            
            {/* Column 1: Logo & Socials */}
            <div className="space-y-5">
              <div className="relative h-10 w-36 filter brightness-0 invert opacity-95">
                <Image
                  src="https://lh3.googleusercontent.com/d/18OXfwSEf1g4NAFLcr7ZuIvzA0UA5CkYD"
                  alt="EIC Logo"
                  fill
                  className="object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-sans">
                Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href="https://www.facebook.com/eicintl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-[#0c59be] hover:border-white transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.instagram.com/eicintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-[#0c59be] hover:border-white transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/eicinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-[#0c59be] hover:border-white transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.youtube.com/@eicintl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-[#0c59be] hover:border-white transition-all duration-300"
                  title="YouTube"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Links */}
            <div className="space-y-4 md:pl-10">
              <h4 className="font-semibold text-white tracking-wider text-base font-display">Links</h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a href="#blog-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Blogs</a>
                </li>
                <li>
                  <a href="#courses-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Courses</a>
                </li>
                <li>
                  <a href="#services-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#partners-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Partners</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="space-y-4 md:pl-10">
              <h4 className="font-semibold text-white tracking-wider text-base font-display">Explore</h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a href="#news-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">News & Events</a>
                </li>
                <li>
                  <a href="#team-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Teams</a>
                </li>
                <li>
                  <a href="#about-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">About us</a>
                </li>
                <li>
                  <a href="#contact-section" className="hover:text-white hover:underline decoration-white/30 transition-colors">Contact us</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wider text-base font-display">Information</h4>
              <ul className="space-y-3.5 text-sm text-white/80">
                <li>
                  <a href="tel:03165554535" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <PhoneCall className="w-4 h-4 text-white/80" />
                    <span>0316 5554535</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@eicintl.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-white/80" />
                    <span>info@eicintl.com</span>
                  </a>
                </li>
                <li className="flex gap-2.5 items-start">
                  <MapPinned className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">1st Floor, Unique Plaza, Jaranwala Rd, next to Executive Passport Office, Kohinoor City Faisalabad, 38000</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© 2026 EIC International. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

      {/* POPUP ADMISSIONS APPLICATION DRAWER / MODAL */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />
            
            {/* Dialog Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 text-slate-900 shadow-2xl border border-slate-100 z-10 overflow-hidden"
            >
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                     <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">Application Lodged!</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Thank you for trusting EIC INTERNATIO AL. A certified career counselor is assigning to evaluate your profile right now.
                  </p>
                  <div className="text-[10px] text-slate-400 font-mono">Reference Code: {refCode}</div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded">FAST PROCESS</span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-display mt-2">
                      EIC INTERNATIO AL Application Portal
                    </h3>
                    <p className="text-slate-500 text-xs">Fill out the quick questionnaire to lock your admission evaluation spot.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Zainab Malik"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="zainab@example.com"
                          className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 1234567"
                          className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Target Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Target Destination</label>
                        <select
                          name="targetCountry"
                          value={formData.targetCountry}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50"
                        >
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="United States">United States</option>
                          <option value="Germany">Germany / Europe</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Highest Qualification</label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50"
                        >
                          <option value="High School">High School (A-Levels / FSc)</option>
                          <option value="Bachelors">Bachelors (16 Years)</option>
                          <option value="Masters">Masters (Completed)</option>
                        </select>
                      </div>
                    </div>

                    {/* Short Message */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Brief Background (Optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mention your target program or CGPA / IELTS score..."
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 bg-slate-50/50 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-center text-sm shadow-xl shadow-blue-500/20 active:scale-98 transition-all"
                  >
                    Lock Placement Spot
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
