
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import HeroSection from "./components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
     <HeroSection/>
    </div>
  );
};

export default HomePage;
