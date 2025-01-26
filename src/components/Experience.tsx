// Thanks to  https://lunarui.dev/components/react/feature-blocks/sparkles
import React, { Suspense } from "react";

import { experience } from "@/lib/data";
import Image from "next/image";
//company
import spiderworks from "/public/company/spiderworks.png";
import tinkerhub from "/public/company/tinkerhub.png";
import trebuchet from "/public/company/trebuchet.png";
import dynamic from "next/dynamic";

const Sparkles =dynamic(
  () => import("./core/sparkles").then((mod) => mod.Sparkles),
  { ssr: false }
);
function Experience() {
  return (
    <>
<div className="h-screen w-screen overflow-hidden bg-black text-white">
  <span
    className="mt-10 flex justify-center items-center text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35] text-white text-center"
    aria-label="Experience section"
  >
    Experience 💼
  </span>
  <br />
  <div className="mx-auto w-screen max-w-2xl">
    <div
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="text-center text-4xl max-sm:text-3xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter"
      aria-labelledby="experience-heading"
    >
      <span className="text-indigo-200">Shaping the future with</span>
      <br />
      <span>Industry leaders.</span>
    </div>

    <div className="mt-14 flex justify-center items-center flex-wrap gap-4" role="list" aria-labelledby="company-logos">
      <figure role="listitem">
        <Image
          title="Spiderworks Technologies"
          src={spiderworks}
          width={300}
          height={300}
          alt="Logo of Spiderworks Technologies"
          aria-label="Spiderworks Technologies"
        />
        {/* <figcaption>Spiderworks Technologies</figcaption> */}
      </figure>
      <figure role="listitem">
        <Image
          title="Tinkerhub GCT"
          src={tinkerhub}
          width={300}
          height={300}
          alt="Logo of Tinkerhub GCT"
          aria-label="Tinkerhub GCT"
        />
        {/* <figcaption>Tinkerhub GCT</figcaption> */}
      </figure>
      <figure role="listitem">
        <Image
          title="Trebuchet Systems"
          src={trebuchet}
          width={70}
          height={70}
          alt="Logo of Trebuchet Systems"
          aria-label="Trebuchet Systems"
        />
        {/* <figcaption>Trebuchet Systems</figcaption> */}
      </figure>
    </div>
  </div>

  <div
    className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900"
    aria-hidden="true"
  >
    <Suspense fallback={<div aria-label="Loading decorative sparkles...">Loading...</div>}>
      <Sparkles
        density={800}
        speed={1}
        size={1.1}
        color="#FFFFFF"
        className="absolute max-sm:hidden inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        aria-hidden="true"
      />
    </Suspense>
  </div>
</div>


    </>
  );
}

export default Experience;
