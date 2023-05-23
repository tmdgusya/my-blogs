
export default function Home() {
  return <>
    <div className="h-full bg-gradient-to-b from-teal-300 font-lora font-serif">
      <div className="flex flex-nowrap pl-4 pt-1 items-center">
        <h1 className="w-30 h-20 text-7xl">Roach</h1>
        <h1 className="w-30 ml-56 text-xl pt-8">Intro</h1>
        <h1 className="w-30 ml-20 text-xl pt-8">Posts</h1>
      </div>
      <div>
        <div>
          <img className="rounded-full" src="https://avatars.githubusercontent.com/u/57784077?v=4" width="260" height="260"/>
          <div>
            {/*Description In here*/}
            <p>
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
