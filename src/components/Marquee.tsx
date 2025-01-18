import React from 'react';
import ScrollBaseAnimation from '../components/core/text-marquee';

function Marquee() {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <ScrollBaseAnimation
          delay={700}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] max-sm:text-4xl'
        >
          Dive into My Journey and Unlock Your Web Experience.🚀
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={700}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] max-sm:text-4xl'
        >
          Dive into My Journey and Unlock Your Web Experience.🚀
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default Marquee;
