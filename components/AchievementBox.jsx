import Image from "next/image";
import webdevAchievement from "../public/achievement-webdev.png"

const AchievementBox = () => {
  return (
    <div>
      <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg">
        <div className="h-[242px] w-full relative">
          <Image src={webdevAchievement} alt="receiving a chromebook" fill className="rounded-md" />
        </div>
        <h2 className="text-2xl truncate mt-3" title="Web Development Competition Winner">Web Development Competition</h2>
        <p className="text-xs md:text-sm text-slate-400 pt-1 text-pretty font-light">Won a competition during a three-month MERN stack web development training program and received a Chromebook as a prize.</p>
      </div>
    </div>
  );
}

export default AchievementBox