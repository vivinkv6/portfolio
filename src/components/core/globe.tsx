'use client';
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import OrbitingCircles from '../ui/orbiting-circles';
import { skills } from '@/lib/data';
interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}
const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    let phi = 0;

    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        // longitude latitude
      ],
      onRender: (state: Record<string, any>) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.\
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  function getRandomOrbitConfig() {
    const isMobile: boolean =
      typeof window !== "undefined" && window.innerWidth < 640;
    return {
      radius:
        Math.floor(isMobile ? Math.random() * 200 : Math.random() * 800) + 200, // Random radius between 200 and 1000
      duration: Math.floor(Math.random() * 50) + 20, // Random duration between 20s and 70s
      delay: Math.floor(Math.random() * 30), // Random delay between 0s and 30s
      reverse: Math.random() > 0.5, // Randomly choose direction
    };
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center z-[-1] w-full max-w-[350px] mx-auto',
        className
      )}
    >
       {skills.map((skill, index) => {
          const { radius, duration, delay, reverse } = getRandomOrbitConfig();
         
          return (
            <OrbitingCircles
              key={index}
              className="size-[30px] border-none bg-transparent z-[-5] brightness-50"
              radius={radius}
              duration={duration}
              delay={delay}
              reverse={reverse}
              path={false}
            >
              <Image
                src={skill.logo ?? ""}
                height={250}
                width={250}
                alt={skill.name}
                // unoptimized
              />
            </OrbitingCircles>
          );
        })}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};

export default Earth;