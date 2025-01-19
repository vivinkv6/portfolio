import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
    id:string;
    img:string;
    title:string
    labels:string[],
      published:string
}

export default function BlogCard({id,img,title,labels,published}:BlogCardProps) {
    return(
        <Link key={id} href={`/blogs/${id}`}
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-gray-950 p-4  sm:p-6">
    <Image src={img} alt={title} width={500} height={500} className="h-56 w-full object-cover"/>
    <time dateTime="2022-10-10" className="block text-xs text-gray-200 my-3">
    {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(published))}
    </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-white">
        {title}
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-x-1 gap-y-3">
        {labels?.slice(0, labels.length > 5 ? 5 : labels.length)?.map((label, index) => {
            return(
                <span
                key={index}
                className="whitespace-nowrap rounded-full bg-gray-800 px-2.5 py-0.5 text-sm text-gray-50"
              >
                {label}
              </span>
            )
        })}
    

    
    </div>
  </div>
</Link>
    )
}



{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

