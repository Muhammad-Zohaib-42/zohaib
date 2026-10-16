import Image from "next/image"
import Skill from "./Skill"

export default function ProjectBox({img, skills, title, url, description}) {
  return (
    <a href={url} target="_blank">
        <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg">
            <div className="h-[242px] w-full relative">
                <Image src={img} alt={title} fill className="rounded-md" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {skills.map((skill, index) => <Skill key={index} skillUsed={skill} />)}
            </div>
            <h2 className="text-2xl md:text-3xl truncate">{title}</h2>
            <p className="text-xs md:text-sm text-slate-400 pt-1 text-pretty font-light">{description}</p>
        </div>
    </a>
  )
}
