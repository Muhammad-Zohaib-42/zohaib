import Image from "next/image";

export default function ExperienceBox({img, duration, title, companyName, description}) {
  return (
    <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg relative">
        <div className="absolute -left-2 top-4 w-[7px] h-16 bg-[#32F900] rounded-tl-lg rounded-bl-lg hidden md:block"></div>
        <div className="flex gap-2 md:gap-4">
            <div className="bg-white h-15 w-15 lg:h-20 lg:w-20 rounded-md pt-3">
                <Image src={img} alt="Code Wise Logo" />
            </div>
            <div>
                <h3 className="text-sm md:text-base">{duration}</h3>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#32F900]">{title}</h3>
                <h3 className="text-sm md:text-base">{companyName}</h3>
            </div>
        </div>
        <p className="mt-2 md:mt-4 text-sm tracking-wider text-[rgba(255,255,255,0.8)] font-extralight">{description}</p>
    </div>
  )
}
