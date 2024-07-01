'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
function HeroSection() {
  return (
    <main className="container mx-auto px-4 pt-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello I'm Vivin
          </motion.h1>
          <motion.h2 className="text-3xl md:text-4xl text-blue-400 mb-8">
            I'm a Full Stack Developer
          </motion.h2>
          <motion.p className="text-xl max-w-2xl mx-auto mb-6">
            Passionate about creating robust and scalable web applications.
            Experienced in both front-end and back-end technologies, with a
            knack for problem-solving and delivering high-quality code.
          </motion.p>
          <div className="flex justify-center space-x-6">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-3xl hover:text-blue-400 transition-colors"
              rel="noopener noreferrer"
            >
              <Link href={"https://github.com/vivinkv6"}>
                <FaGithub />
              </Link>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-3xl hover:text-blue-400 transition-colors"
              rel="noopener noreferrer"
            >
              <Link href={"https://in.linkedin.com/in/vivin-k-v-8816ba291"}>
                <FaLinkedin />
              </Link>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-3xl hover:text-blue-400 transition-colors"
             
            >
              <Link  href="mailto:vivinkv851@gmail.com">
              <FaEnvelope />
              </Link>
            </motion.span>
          </div>
          <button className="mt-5 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded font-semibold">
            <Link href={'https://github.com/user-attachments/files/15969020/Mern.pdf'}>
            My Resume
            </Link>
          </button>
        </motion.section>
      </main>
  )
}

export default HeroSection
