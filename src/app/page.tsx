import Image from 'next/image';


export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-x-scroll hide-scrollbar bg-orange-100"> 
      <header className="flex w-screen h-auto justify-around relative text-base border-b-2 border-black animate-load-border">
        <section className="banner w-1/2 h-auto">
          <h3 className="relative top-1 p-1 left-2">Marcus Parchman</h3>
        </section>
        <ul className="relative flex w-1/2 h-auto justify-around font-Geist fadeInanimate">
          <li className="no-underline p-1.5 animate-bounce"><a className="text-black font-Geist-Mono hover:text-lg transition-all duration-200 ease-in-out" href="https://github.com/monkmark" target="_blank">Github</a></li>
          <li className="no-underline p-1.5 animate-bounce2"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/parchmanmarcus/" target="_blank">LinkedIn</a></li>
          <li className="no-underline p-1.5 animate-bounce3"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="resume.pdf" target="_blank">Resume</a></li>
          <li className="no-underline p-1.5 animate-bounce4"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="#footer">Contact</a></li>
        </ul>
      </header>
      <main className="w-screen h-screen flex">
        <section className="leftbx relative w-[50vw] h-screen">
          <section className='container1 relative w-[50vw] h-[12vh] left-2'>
              <p className="mquerytext text-3xl relative">Hi, I'm Marcus!</p>
              <p className="mquerytext2 text-2xl relative">I'm a Software Engineer major at Western Governors University</p>
              <p className='mquerytext2 relative'>I Specialize in Design & Developing software systems & products. Anywhere from fullstack web platforms to object-oriented applications. Feel free to check out my work alongside!</p>
          </section>
          <section className="container2 relative w-[50vw] h-[60vh] top-2 grid">
            <section className='relative w-[50vw] h-auto top-20'>
              <h3 className="mquerytext relative right-1 text-xl text-center">Main Technologies</h3>
              <div className="flex relative justify-around text-center border-blue-700 border-1 rounded-xl w-[48vw] h-[15vh] bg-white left-2">
                <Image src="/techicons/mongodb.svg" alt="desc" width={100} height={0} className='relative techimgquery'/>
                <Image src="/techicons/node.png" alt="desc" width={50} height={0} className='relative techimgquery2'/>
                <Image src="/techicons/next.png" alt="desc" width={100} height={0} className='relative techimgquery'/>
                <Image src="/techicons/cplus.png" alt="desc" width={100} height={0} className='relative techimgquery3'/>
                <Image src="/techicons/WebGL.png" alt="desc" width={100} height={0} className='relative techimgquery4'/>
              </div>
            </section>
            <section className='relative w-[50vw] h-auto top-10'>
              <h3 className="mquerytext text-xl relative right-1 text-center">Primary Skills</h3>
              <div className="flex relative justify-center text-center border-blue-700 border-1 rounded-xl w-[48vw] h-[15vh] bg-white left-2">
                <label className='mquerytext4'>Fullstack Development</label>
                <label className='mquerytext4'>Object-Oriented Programming</label>
                <label className='mquerytext4'>Signal Processing</label>
                <label className='mquerytext4'>Database Management</label>
                <label className='mquerytext4'>Responsive Design</label>
                <label className='mquerytext4'>Customer Service</label>
              </div>
            </section>
          </section>
          <section className="container3 relative w-[50vw] h-[20vh]">
            <p className='mquerytext2 relative top-10 left-2'>Feel interested? Don't be shy! Drop a message below:</p>
          </section>
        </section>
        <section className="rightbx relative w-[50vw] h-screen">
          <div className="relative w-[50vw] h-auto">
            <p className="mquerytext relative text-center">Projects</p>
          </div>
          <section className="relative firstrow flex w-[50vw] h-[23vh] justify-around">
              <div className="relative text-center card w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative flex justify-center w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/synth.png" alt="Kong" width={100} height={0} className='imgquery relative top-1/12'/>
                </div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Kong1 Synth</a>
              </div>
              <div className="relative text-center card w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative flex justify-center w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/input.png" alt="user-entry" width={65} height={0} className='imgquery2 relative h-[10vh] top-1/6'/>
                </div>
                <a className='mquerytext4 relative' href='#' target='_blank'>User-Input Client</a>
              </div>
          </section>
          <section className="relative secondrow flex w-[50vw] h-[23vh] justify-around ">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative flex justify-center thumbnail w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/arrow.jpg" alt="STEPPER" width={55} height={0} className='imgquery3 relative top-1/4 h-[8vh]'/>
                </div> 
                <a className='mquerytext4 relative' href='#' target='_blank'>Stepper Mobile</a>
              </div>
              <div className=" card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Invest.py</a>
              </div>
          </section>
          <section className="relative thirdrow flex w-[50vw] h-[23vh] justify-around">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Invest.py</a>
              </div>
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Invest.py</a>
              </div>
          </section>
          <section className="relative fourthrow flex w-[50vw] h-[23vh] justify-around">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Invest.py</a>
              </div>
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank'>Invest.py</a>
              </div>
          </section>
        </section>
      </main>
      <footer id='footer' className="relative w-screen h-screen">
        <form className="email p-3 email-card relative w-[50vw] h-auto top-1/4 left-1/4 border-10 border-gray-2xl grid border-inset bg-white">
          <label className="relative left-1/16 p-2">Name:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="text" name="name" required></input>
          <label className="relative left-1/16 p-2">E-mail:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="email" name="email" required></input>
          <label className="relative left-1/16 p-2">Subject:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="text" name="subject" required></input>
          <label className="relative left-1/16 p-2">Message:</label>
          <textarea className="userinput_1 relative left-1/8 bottom-1/16 w-[37.5vw] resize-none border-5" name="message" ></textarea>
          <button type="submit" className=" userinput relative w-1/3 border-6 border-silver top-1/6 left-1/3 p-1">
            <label className=" ">Submit</label>    
          </button>
        </form>
      </footer>
    </div>
  );
}