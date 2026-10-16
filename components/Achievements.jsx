import AchievementBox from "./AchievementBox"
import Title from "./Title"

const Achievements = () => {
  return (
    <section id="achievements" className="py-10 md:py-20 relative z-10">
      <div className="max-width">
        <Title text="My Achievements" />
        <h2 className="title">Moments of <span className="text-[#31F900] font-bold">Pride</span></h2>  
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-6 mt-6 md:mt-10">
          <AchievementBox />
        </div>
      </div>
    </section>
  )
}

export default Achievements