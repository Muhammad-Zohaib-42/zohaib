import ProjectBox from "./ProjectBox";
import Title from "./Title";
import notesTaking from "../public/notes-taking-app.png"
import restCountries from "../public/rest-countries-app.png"
import expensesTracker from "../public/expenses-tracker-app.png"
import snakeGame from '../public/snake-game.png'
import taskflow from '../public/taskflow-kanban-board.png'
import imageEditor from '../public/image-editor.png'
// import employeeManagement from "../public/employee-management-app.png"

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 relative z-10">
        <div className="max-width">
            <Title text="My Projects" />
            <h2 className="title">Let's <span className="hidden md:inline">Have a Look at</span> <span className="inline md:hidden">Explore</span> <span className="text-[#31F900] font-bold">My Portfolio</span></h2>
            <div className="mt-6 md:mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                <ProjectBox img={restCountries} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Rest Countries App" url="https://rest-countries-app-by-constcoderr.netlify.app/" />
                <ProjectBox img={expensesTracker} skills={["REACT JS", "TAILWIND CSS"]} title="Expenses Tracker" url="https://expenses-tracker-app-by-constcoderr.netlify.app/" />
                <ProjectBox img={imageEditor} skills={["REACT JS", "TAILWIND CSS"]} title="Image Editor App" url="https://image-editor-k3u88awu2-muhammad-zohaibs-projects-06b04037.vercel.app/" />
                <ProjectBox img={taskflow} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Kanban Board" url="https://task-flow-bay-zeta.vercel.app/" />
                <ProjectBox img={snakeGame} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Snake Game" url="https://snake-game-omega-lac.vercel.app/" />
                <ProjectBox img={notesTaking} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Quick Notes App" url="https://quick-notes-app-by-constcoderr.netlify.app/" />
                {/* <ProjectBox img={employeeManagement} skills={["NEXT JS", "TAILWIND CSS"]} title="Staff Manager App" url="https://employee-management-app-red-alpha.vercel.app/" /> */}
            </div>
        </div>
    </section>
  )
}
