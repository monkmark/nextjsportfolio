export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-x-scroll hide-scrollbar"> 
      <header className="flex w-screen h-auto justify-around relative text-base ">
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
        <section className="rightbx relative w-[50vw] h-screen">
          <div className="relative w-full h-auto">
            <p className="text-3xl relative top-1/32 left-1/64">Hi, I'm Marcus!</p>
            <p className="text-2xl relative top-1/32 left-1/64">I'm a Software Engineer major at Western Governors University</p>
          </div>
          <div className="relative w-full h-auto" >
            <h3 className="text-xl">Technologies</h3>
            <div className="grid"></div>
          </div>
          <div className="w-full h-auto">
            <h3 className="text-xl">Skills</h3>
            <div className="grid"></div>
          </div>
        </section>
        <section className="leftbx relative w-[50vw] h-screen top-1/56">
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
      <footer className=" relative w-screen h-screen border-1 border-black">
        <div className="email-card relative w-[50vw] h-[50vh] left-1/4 top-1/4 border-1 border-black">
        </div>
      </footer>
    </div>
  );
}