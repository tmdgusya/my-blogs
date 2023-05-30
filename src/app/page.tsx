import HoverModal from "./components/wiki/HoverModal";
import Bold from "./components/wiki/Bold";
import Tap from "./components/wiki/tap";

export default function Home() {
  {/*bg-gradient-to-b from-teal-300 */}
  return <div className="flex flex-col font-lora antialiased font-serif items-center">
    <div className="flex flex-col h-full">
      <div className="flex flex-nowrap pt-1 items-center">
        <h1 className="w-30 h-20 text-7xl">Roach</h1>
        <a className="w-30 ml-40 text-xl pt-8">Intro</a>
        <a className="w-30 ml-20 text-xl pt-8">Posts</a>
        <a className="w-30 ml-20 text-xl pt-8">Series</a>
      </div>
      <div className="flex flex-nowrap bg-red-500 h-0.5 w-full"></div>
      <div className="flex flex-nowrap bg-red-500 mt-1 h-0.5 w-full"></div>
      <div className="flex mt-5 max-w-5xl">
        <div className="flex flex-nowrap flex-col">
          <img className="rounded-full border-2 border-black max-w-xs max-h-xs" src="https://avatars.githubusercontent.com/u/57784077?v=4"/>
          <div className="flex flex-wrap flex-col items-center max-w-xs">
            {/*Description In here*/}
            <p className="font-bold mt-2">
              Software Engineer
            </p>
            <p className="mt-3">
              I have been working as a software engineer for 2 years. 
              I like conversations about software engineering and programming. 
              If you want to talk we me, you can <Bold text="contact me"/> through the links below.
            </p>
            <div className="mt-3 w-full">
              <button className="bg-black text-white rounded-full mt-2.5 w-full h-10">Github</button>
              <button className="bg-rose-600 text-white rounded-full mt-2.5 w-full h-10">Email</button>
              <button className="bg-sky-900 text-white rounded-full mt-2.5 w-full h-10">Linked-In</button>
              <button className="bg-sky-600 text-white rounded-full mt-2.5 w-full h-10">FaceBook</button>
              <button className="bg-cyan-500 text-white rounded-full mt-2.5 w-full h-10">Twitter</button>
            </div>
          </div>
        </div>
        <div className="ml-10">
          <p className="text-lg">
            As a working software engineer, I have been trying to learn a lot of something such as <Bold text="Agile, TDD, CleanCode, Refactoring, Architecture, etc"/>. I have been working as software engineer for 2 years. 
            I think writing code for production is like creating rules that explain how the product works. Therefore, we need to understand the rules and make them clear. Lately,
            I have been trying to write code using <Bold text="TDD(Test Development Driven)"/> because I believe it's the best way to align policies<HoverModal tag="[1]" content="Writing this content."/> with other developers and teammate.
          </p>
        </div>
      </div>
    </div>
  </div>
}
