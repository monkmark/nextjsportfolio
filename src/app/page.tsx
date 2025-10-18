export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-x-scroll hide-scrollbar"> 
      <header className="p-1 flex w-screen h-auto justify-around relative text-base ">
        <section className="banner w-1/2 h-auto">
          <h3 className="relative top-1 left-1/64">Marcus Parchman</h3>
        </section>
        <ul className="relative flex w-1/2 h-auto justify-around top-1 font-Geist, font-Geist-Mono">
          <li className="no-underline"><a className="text-black" href="https://github.com/monkmark" target="_blank">Github</a></li>
          <li className="no-underline"><a className="text-black" href="https://www.linkedin.com/in/parchmanmarcus/" target="_blank">LinkedIn</a></li>
          <li className="no-underline"><a className="text-black" href="resume.pdf" target="_blank">Resume</a></li>
          <li className="no-underline"><a className="text-black" href="#footer">Contact</a></li>
        </ul>
      </header>
      <main className="w-screen h-screen flex">
        <section className="leftbx relative w-[50vw] h-screen">
          <div className="relative w-[50vw] h-auto p-2">
            <p className="text-3xl relative">Hi, I'm Marcus!</p>
            <p className="text-2xl relative">I'm a Software Engineer major at Western Governors University</p>
          </div>
          <div className="relative w-[50vw] h-auto p-2">
            <p>I Specialize in Design & Developing software products. Anywhere from fullstack web platforms to object-oriented applications. Feel free to check out my work alongside!</p>
          </div>
          <div className="relative w-[50vw] h-auto p-2" >
            <h3 className="text-xl">Technologies</h3>
            <div className="grid"></div>
          </div>
          <div className=" relative w-[50vw] h-auto p-2">
            <h3 className="text-xl">Skills</h3>
            <div className="grid"></div>
          </div>
          <div className="relative w-[50vw] h-auto p-2">
            <p>
              Feel interested? Don't be shy! Drop a message below:
            </p>
          </div>
        </section>
        <section className="rightbx relative w-[50vw] h-screen top-1/56">
          <div className="relative w-[50vw] h-auto">
            <h2 className="relative text-center bottom-1.5">Projects</h2>
          </div>
          <section className="relative firstrow flex w-[50vw] h-[23vh] justify-around">
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
          </section>
          <section className="relative secondrow flex w-[50vw] h-[23vh] justify-around ">
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
          </section>
          <section className="relative thirdrow flex w-[50vw] h-[23vh] justify-around">
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
          </section>
          <section className="relative fourthrow flex w-[50vw] h-[23vh] justify-around">
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
              <div className="w-[22vw] h-[20vh] border-1 border-black rounded-2xl"></div>
          </section>
        </section>
      </main>
      <footer className=" relative w-screen h-screen">
        <form className="p-3 email-card relative w-[50vw] h-auto top-1/4 left-1/4 border-1 border-black rounded-2xl grid">
          <label className="relative left-1/16 p-2">Name:</label>
          <input className="relative w-1/4 left-1/8 border-1" type="text" name="name" required></input>
          <label className="relative left-1/16 p-2">E-mail:</label>
          <input className="relative w-1/4 left-1/8 border-1" type="email" name="email" required></input>
          <label className="relative left-1/16 p-2">Subject:</label>
          <input className="relative w-1/4 left-1/8 border-1" type="text" name="subject" required></input>
          <label className="relative left-1/16 p-2">Message:</label>
          <textarea className=" relative left-1/8 bottom-1/16 w-[37.5vw] resize-none border-1" name="message" ></textarea>
          <button type="submit" className="relative w-1/3 border-1 top-1/6 left-1/3 p-1">
            <label className=" ">Submit</label>    
          </button>
        </form>
      </footer>
    </div>
  );
}