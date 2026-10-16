import ProjectBox from "./ProjectBox";
import Title from "./Title";
import expensesTracker from "../public/expenses-tracker-app.png"
import taskflow from '../public/taskflow-kanban-board.png'
import imageEditor from '../public/image-editor.png'
import promptQuiz from "../public/promptQuiz.png"
import componentGenerator from "../public/ai-component-generator.png"
import codeReviewer from "../public/ai-code-reviewer.png"

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 relative z-10">
        <div className="max-width">
            <Title text="My Projects" />
            <h2 className="title">Let's <span className="hidden md:inline">Have a Look at</span> <span className="inline md:hidden">Explore</span> <span className="text-[#31F900] font-bold">My Portfolio</span></h2>
            <div className="mt-6 md:mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                <ProjectBox img={promptQuiz} skills={["NEXT JS", "TYPESCRIPT", "TAILWIND CSS", "EXPRESS JS", "MONGODB", "GEMINI API"]} title="AI QUIZ GENERATOR" url="https://prompt-quiz-taupe.vercel.app/" description="An AI-powered quiz generator built with the MERN stack and Gemini API. Users can create personalized quizzes by specifying a topic, question count, difficulty, format, and timer. The app includes authentication, interactive quizzes, a dashboard to track quiz history, replay completed quizzes, and monitor performance through completion counts and average accuracy." />
                <ProjectBox img={componentGenerator} skills={["REACT JS", "TAILWIND CSS", "MONACO EDITOR", "GEMINI API"]} title="AI COMPONENT GENERATOR" url="https://ai-component-generator-topaz.vercel.app/" description="An AI-powered web application built with React and Tailwind CSS that allows users to instantly generate fully functional components across multiple frameworks using the Google Gemini API. Features a fully integrated Monaco code editor for real-time code editing, a sandboxed live preview system with client-side Babel compilation, theme toggling, and instant copy/export capabilities." />
                <ProjectBox img={codeReviewer} skills={["REACT JS", "TAILWIND CSS", "MONACO EDITOR", "GEMINI API"]} title="AI CODE REVIEWER" url="https://code-reviewer-liart-three.vercel.app/" description="An intelligent, client-side code analysis application featuring an interactive Monaco Code Editor supporting multiple languages and frameworks. Powered directly by the Gemini API, it performs deep code diagnostics and instantly returns structured verdicts, detailed mistake breakdowns, and clean optimized solutions, rendered seamlessly via Markdown and syntax-highlighted code blocks." />
                <ProjectBox img={expensesTracker} skills={["REACT JS", "TAILWIND CSS"]} title="Expenses Tracker" url="https://expenses-tracker-app-by-constcoderr.netlify.app/" description="A React-based expense tracker with a clean, two-panel layout for adding, viewing, editing, and deleting expenses. Displays total expenses and supports sorting by title and price, with styling built using vanilla CSS." />
                <ProjectBox img={imageEditor} skills={["REACT JS", "TAILWIND CSS"]} title="Image Editor App" url="https://image-editor-k3u88awu2-muhammad-zohaibs-projects-06b04037.vercel.app/" description="A browser-based image editor built with React and Tailwind CSS, using HTML5 Canvas for image processing. Users can upload images, apply live filters, use presets, reset adjustments, and download their edited images." />
                <ProjectBox img={taskflow} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Kanban Board" url="https://task-flow-bay-zeta.vercel.app/" description="A Kanban task management board featuring three columns: To Do, In Progress, and Done. Users can create, edit, and delete tasks, as well as drag and drop them between columns to track progress easily." />
            </div>
        </div>
    </section>
  )
}
