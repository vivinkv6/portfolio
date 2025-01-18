// Thanks to  https://lunarui.dev/components/react/feature-blocks/sparkles
import React from "react";
import { Sparkles } from "@/components/core/sparkles";
import { experience } from "@/lib/data";
import Image from "next/image";
//company
import spiderworks from "/public/company/spiderworks.png";
import tinkerhub from "/public/company/tinkerhub.png";
import trebuchet from "/public/company/trebuchet.png";
function Experience() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-black">
        <span className="mt-10 flex justify-center items-center text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35] text-white text-center">
          Experience 💼
        </span>
        <br />
        <div className="mx-auto  w-screen max-w-2xl">
          <div style={{
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
          }} className="text-center text-4xl max-sm:text-3xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            <span className="text-indigo-200">Shaping the future with</span>

            <br />

            <span>Industry leaders.</span>
          </div>
          <div className="mt-14  flex justify-center items-center  flex-wrap">
            <Image
              title="Spiderworks Technologies"
              src={spiderworks}
              width={300}
              height={300}
              alt={"spiderworks technologies"}
              unoptimized
            />
            <Image
              title="Tinkerhub GCT"
              src={tinkerhub}
              width={300}
              height={300}
              alt={"tinkerhub gct"}
              unoptimized
            />
            <Image
              title="Trebuchet Systems"
              src={trebuchet}
              width={70}
              height={70}
              alt={"trebuchet systems"}
              unoptimized
            />
          </div>
        </div>
        <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
          {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div> */}

          <Sparkles
            density={800}
            speed={1}
            size={1.1}
            color="#FFFFFF"
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
