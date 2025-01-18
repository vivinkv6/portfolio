'use client'
import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowBigDown, ArrowRight, ChevronRight, Heart } from 'lucide-react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { projects } from '@/lib/data';

export default function MobileProject(): JSX.Element {
    const container = useRef(null);
  
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
                  url={project.banner}
                  src={project.github_link}
                  title={project.name}
                  description={project.description}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  }

type CardProps={
    title: string,
    description: string,
    src: string,
    url: string | StaticImageData,
}

function Card({description,src,title,url}:CardProps) {
  return (
    <>
      <div className='w-[90%] mb-10 h-[480px] group mx-auto bg-slate-900 p-2  border-0  overflow-hidden rounded-md text-white '>
        <figure className='w-full h-80 group-hover:h-72 transition-all duration-300 bg-[#0a121a]  p-2 rounded-md relative overflow-hidden'>
          <div
            style={{
              background:
                'linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)',
            }}
            className='absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300'
          ></div>
          <Image
            src={url}
            alt='shoes'
            width={600}
            height={600}
            unoptimized
            className='absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300'
          />
        </figure>
        <article className='text-white  p-4 space-y-2'>
          
          <h1 className='text-xl font-semibold capitalize'>
           {title}
          </h1>
          <p className='text-base leading-[120%]'>
            {description?.slice(0,100)}...
          </p>
          <a
            href={src}
            className=' text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  '
          >
            Source Code
            <span>
              <ChevronRight />
            </span>
          </a>
        </article>
      </div>
    </>
  );
}


