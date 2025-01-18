'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { projects } from '@/lib/data';

const project = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd',
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#8f89ff',
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#13006c',
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e',
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
];

export default function DesktopProject(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <section className='text-white h-[70vh] w-full bg-slate-950 grid place-content-center'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
            Personal Projects & <br /> Experiments
          </h1>
        </section>

        <section className='text-white w-full bg-slate-950'>
          {projects?.projects?.slice(0, 4)?.map((project, i) => {
            const targetScale = 1 - (projects.projects.length - i) * 0.05;
            if (!project.public_link || !project.github_link || !project.name || !project.description) return null;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.banner}
                src={project.github_link}
                title={project.name}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string | StaticImageData;
  color?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
    ref={container}
    className="h-auto sm:h-screen flex items-center justify-center sticky top-0"
  >
    <motion.div
      style={{
        backgroundColor: color,
        scale,
        top: `calc(-5vh + ${i * 25}px)`,
      }}
      className={`flex flex-col relative h-auto sm:h-[450px] w-[90%] sm:w-[70%] rounded-md p-6 sm:p-10 origin-top bg-gray-900`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      <div className={`flex flex-col sm:flex-row h-full mt-5 gap-6 sm:gap-10`}>
        {/* Description Section */}
        <div className={`w-full sm:w-[40%]`}>
          <p className="text-sm sm:text-base">{description}</p>
          <span className="flex items-center gap-2 pt-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer text-blue-400"
            >
              Source Code
            </a>
          </span>
        </div>
  
        {/* Image Section */}
        <div
          className={`relative w-full sm:w-[60%] h-[250px] sm:h-full rounded-lg overflow-hidden`}
        >
          <motion.div
            className={`w-full h-full`}
            style={{ scale: imageScale }}
          >
            <Image
              fill
              src={url}
              alt="Project image"
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
  
  );
};
