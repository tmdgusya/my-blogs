import HoverModal from "./components/wiki/HoverModal";
import Bold from "./components/wiki/Bold";
import SecondHeader from "./components/wiki/SecondHeader"
import RootLayout from "./layout";
import Contact from "./components/intro/Contact";
import helenImage from "../../assets/main/helen.png"
import RepoThumbnail from "./components/github/RepoThumbnail";
import kotlinBoilerplateImage from "../../assets/main/kotlin-test-boiler.svg"

export default function Home() {
  return <>
      <div className="flex flex-nowrap flex-col">
        <img className="rounded-full border-2 border-black max-w-xs max-h-xs" src="https://avatars.githubusercontent.com/u/57784077?v=4"/>
        <div className="flex flex-wrap flex-col items-center max-w-xs">
          <p className="font-bold mt-2">
            Software Engineer
          </p>
          <p className="mt-3">
            I have been working as a software engineer for 2 years. 
            I like conversations about software engineering and programming. 
            If you want to talk we me, you can <Bold text="contact me"/> through the links below.
          </p>
          <div className="mt-3 w-full">
            <Contact color="bg-black" href="https://github.com/tmdgusya" site="Github"/>
            <Contact color="bg-rose-600" href="mailto:dev0jsh@gmail.com" site="Email"/>
            <Contact color="bg-sky-900" href="https://www.linkedin.com/in/%EC%8A%B9%ED%98%84-%EC%A0%95-376842221/?locale=en_US" site="Linked-In"/>
            <Contact color="bg-sky-600" href="https://www.facebook.com/profile.php?id=100004833574793" site="Facebook"/>
            <Contact color="bg-cyan-500" href="https://twitter.com/dev_roach" site="Twitter"/>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <p className="text-lg">
          As a working software engineer, I have been trying to learn a lot of something such as <Bold text="Agile, TDD, CleanCode, Refactoring, Architecture, etc"/>. I have been working as software engineer for 2 years. 
          I think writing code for production is like creating rules that explain how the product works. Therefore, we need to understand the rules and make them clear. Lately,
          I have been trying to write code using <Bold text="TDD(Test Development Driven)"/> because I believe it`s the best way to align policies with other developers and teammate.
        </p>
        <SecondHeader title="LLM" />
        <p className="text-lg mt-3">
          Theseday, I have been finding the way to use LLMs<HoverModal tag="[1]" content="Large Language Model"/> for my products. 
          So, I`ve applied LLM`s to my english lecture. That`s called <Bold text="Hellen"/>. If you want to know more about Hellen, you can click the link below.
        </p>
        <RepoThumbnail
          title="Hellen"
          description="Helen is a good english teacher and can help you improve your speaking habits. Helen provide some features that can help during your speaking time."
          href="https://github.com/tmdgusya/helen/tree/main"
          image={helenImage}
        />
        <SecondHeader title="Kotlin" />
        <p className="text-lg mt-3">
          I also love <Bold text="kotlin"/> language. I have been using kotlin for making a product in my company for 2 years.
          I think kotlin is a good language for making a product because it`s easy to use and has a lot of features, especially has nullability. 
          That`s a impotant feature for making a product.
        </p>
        <p className="text-lg mt-3">
          And, I`ve contributed or made some libraries for kotlin. If you want to know more about my libraries, you can click the link below.
        </p>
        <RepoThumbnail
          title="Kotlin Test Boilerplate"
          description="Kotlin Test Boilerplate is a library that can help you write test code easily. It provides some features that can help you write test code easily."
          href="https://github.com/tmdgusya/kotlin-test-boilerplate"
          image={kotlinBoilerplateImage}
        />
      </div>
    </>
}
