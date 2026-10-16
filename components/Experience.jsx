import ExperienceBox from "./ExperienceBox";
import Title from "./Title";
import codewise from "../public/codewise.png"
import ideoversity from "../public/Ideoversity.png"

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 relative z-10">
        <div className="max-width">
            <Title text="Work Experience" />
            <h2 className="title">My <span className="text-[#31F900] font-bold">Professional</span> Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] gap-6 mt-6 md:mt-10">
              <ExperienceBox img={codewise} duration="Oct 2023 - Jan 2024" title="Junior Wordpress Developer" companyName="Code Wise" description="Joined as a beginner and worked on live projects using Elementor to build multiple responsive websites. Collaborated with the WordPress and graphic teams, which sparked a strong interest in coding and led to self-learning front-end web development." />
              <ExperienceBox img={ideoversity} duration="Mar 2026 - May 2026" title="Full Stack Developer" companyName="IDEOVERSITY" description="Completed a 3-month MERN stack web development training program at Ideoversity, under NAVTTC. Gained hands-on experience in frontend and backend development, built practical projects, and won a training program competition, earning a Chromebook as a prize." />
            </div>
        </div>
    </section>
  )
}
