 import React, { useState } from "react";

const App = () => {
   const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>setSubmitted(false),3000);//messege vanish after 3 sec
    };


  return (
    <>
      <body className= "w-full h-full bg-gray-900 justify-center items-center ">
        <div className=" bg-gray-900 text-white min-h-screen font-sans">
            {/*Navbar*/}
            <nav className="p-6 flex justify-between items-center bg-gray-800 shadow-lg">
                <h1 className="text-2xl font-bold text-blue-400">My Portfolio</h1>
                <div className="space-x-6">
                    <a href="#about"
                    className="hover:text-blue-500">About</a>
                    <a href="#skills"
                    className="hover:text-blue-500">Skills</a>
                    <a href="#projects"
                    className="hover:text-blue-500">Projects</a>
                    <a href="#contact"
                    className="hover:text-blue-500">Contact</a>
                </div>
            </nav>
            {/*Hero Section*/}
            <section className="flex flex-col justify-center items-center text-center py-20">
                <img
                src="/img.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg"
                />
                <h2 className="text-4xl font-bold mt-6">Hi, I'm Vijay 👋</h2>
                <p className="text-lg text-gray-400 mt-2">
                    MERN STACK DEVELOPER Fresher
                </p>
                <a 
                href="#contact"
                className="mt-6 px-6 py-3 bg-blue-500 rounded-xl shadow:hoverbg-blue-600 transition">
                    Hire Me
                </a>
            </section>
            {/*About*/}
            <section id="about" className="px-10 py-20">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">About Me</h2>
                <p className="text-gary-300 leading-relaxed">
                    I'm a passionate developern who love building modern and responsive web app with React , Typescript , Tailwind , Node.js  and Mongo.Dp , I focus on writing clean,efficient and reusable code.
                </p>
            </section>
            {/*Skills*/}
            <section id="skills" className="px-10 py-20 bg-gray-800">
                <h2 className="text-3xl font-bold text-blue-400">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {["React","Typescript","Tailwind","Node.js","Mongo.dp"].map((skill) => (
                        <div
                        key={skill}
                        className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transition">{skill}</div>
                        
                    ))}
                </div>
            </section>
            {/*project*/}
            <section id="project" className="px-10 py-20">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Project</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                        <p className="text-gray-400">Description about project 1</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                        <p className="text-gray-400">Description about 2</p>
                    </div>
                </div>
            </section>
            {/*contact*/}
            <section id="contact" className="px-10n py-20 bg-gray-800">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact</h2>
                {/*contact link*/}
                <div className="flex flex-col justify-center items-center space-y-3 mb-8">
                 <a 
                 href="mailto:v.l.vijay3608@gamil.com"
                 className="text-gary-300 hover:text-blue-400 transition">📧 v.l.vijay3608@gmail.com</a>
                
                 <a href="https://www.instagram.com/phoenix_.rider_?igsh=Nnd2d3ljeTNmZnlt"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-pink-400 transition">📸 Instagram: @phoenix_.rider_</a>
                
                 <a href="https://www.linkedin.com/in/vijay-v-l-7196512b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-300  hover:text-blue-500 transition">💼 LinkedIn: Vijay V.L</a>
                </div>
                {/*Form*/}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                   <input
                   type="text"
                   placeholder="Your Name"
                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"required/>
                   <input
                   type="Email"
                   placeholder="Your Email"
                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"required/>
                   <textarea
                   placeholder="Your Message"
                   maxLength={30}
                   rows={5}
                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                   required
                   />
                  <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 rounded-xl shadow hover:bg-blue-600 transition">send</button>
                  {/*Success Messege*/}
                  {submitted && (
                    <p className="text-green-400 text-center mt-4">
                        ✅Thanks for contacting me! I'll get back to soon.
                    </p>
                  )}
                </form> 
            </section>
            {/*Footer*/}
            <footer className="text-center p-5 bg-gray-900 text-gray-500">
                © {new Date().getFullYear()} Vijay. All rights reserved.
            </footer>
        </div>
      </body>
    </>
  )
};

export default App; 
