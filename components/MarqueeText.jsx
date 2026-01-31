import Star from "./Star";

export default function MarqueeText() {
  return (
    <div
    className="bg-[#31F900] h-12 md:h-[59px] relative z-10 overflow-x-hidden flex items-center whitespace-nowrap">
      <div className="flex gap-10 flex-nowrap animate-scroll">
        <div className="flex items-center gap-10 font-bold text-xl md:text-2xl flex-shrink-0">
          <h3>HTML5</h3>
          <Star />
          <h3>CSS3</h3>
          <Star />
          <h3>Tailwind CSS</h3>
          <Star />
          <h3>JavaScript (ES6+)</h3>
          <Star />
          <h3>React.js</h3>
          <Star />
          <h3>Redux Toolkit</h3>
          <Star />
          <h3>TypeScript</h3>
          <Star />
          <h3>Next.js</h3>
          <Star />
          <h3>GIT & GITHUB</h3>
          <Star />
          <h3>GSAP</h3>
          <Star />
          <h3>Framer Motion</h3>
          <Star />
          <h3>shadcn/ui</h3>
          <Star />
          <h3>Material UI</h3>
          <Star />
          <h3>Node.js</h3>
          <Star />
          <h3>Express.js</h3>
          <Star />
          <h3>MongoDB</h3>
          <Star />
          <h3>Mongoose</h3>
          <Star />
          <h3>RESTful APIs</h3>
          <Star />
          <h3>JWT Authentication</h3>
          <Star />
          <h3>bcrypt</h3>
          <Star />
          <h3>Cookies & Sessions</h3>
          <Star />
          <h3>CORS</h3>
          <Star />
          <h3>Postman</h3>
          <Star />
          <h3>Multer</h3>
          <Star />
          <h3>Cloudinary</h3>
          <Star />
        </div>

        {/* Duplicate content for seamless looping */}
        <div className="flex items-center gap-10 font-bold text-xl md:text-2xl flex-shrink-0">
          <h3>HTML5</h3>
          <Star />
          <h3>CSS3</h3>
          <Star />
          <h3>Tailwind CSS</h3>
          <Star />
          <h3>JavaScript (ES6+)</h3>
          <Star />
          <h3>React.js</h3>
          <Star />
          <h3>Redux Toolkit</h3>
          <Star />
          <h3>TypeScript</h3>
          <Star />
          <h3>Next.js</h3>
          <Star />
          <h3>GIT & GITHUB</h3>
          <Star />
          <h3>GSAP</h3>
          <Star />
          <h3>Framer Motion</h3>
          <Star />
          <h3>shadcn/ui</h3>
          <Star />
          <h3>Material UI</h3>
          <Star />
          <h3>Node.js</h3>
          <Star />
          <h3>Express.js</h3>
          <Star />
          <h3>MongoDB</h3>
          <Star />
          <h3>Mongoose</h3>
          <Star />
          <h3>RESTful APIs</h3>
          <Star />
          <h3>JWT Authentication</h3>
          <Star />
          <h3>bcrypt</h3>
          <Star />
          <h3>Cookies & Sessions</h3>
          <Star />
          <h3>CORS</h3>
          <Star />
          <h3>Postman</h3>
          <Star />
          <h3>Multer</h3>
          <Star />
          <h3>Cloudinary</h3>
          <Star />
        </div>
      </div>
    </div>
  );
}
