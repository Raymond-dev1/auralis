import {
  Card,
  CardAction,
  CardContent,
//   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Product(){
return(
    <section className="m-5">
        <Card className="font-sans justify-center max-w-6xl h-129.5  bg-[#F7F3F2]">
        <CardHeader className="justify-center">
        <CardTitle className="bg-[#F7F3F2] rounded-2xl sm:w-91.25  md:w-91.25 border-2 p-2 pl-2">
            <div className="text-[10px] items-center sm:text-sm md:px-3 md:text-sm  text-[#71717A] flex flex-row gap-6 rounded-2xl ">
                <div>Auralis studio</div>
                <div>Auralis Agents</div>
                <div>Auralis API</div>
            </div>
            </CardTitle>
        <CardAction className="bg-[#F7F3F2] rounded-2xl border-2 p-1 md:p-2">
          <span className="font-semibold tracking-normal p-2 text-[10px] md:text-sm">
            <span className="bg-[#10B981] rounded-4xl">
                 </span>
                  AI Voice Generator
                  </span>
        </CardAction>
        </CardHeader>   
        <CardContent className="">
            <div className="">
                <p>Content</p>
        </div>
        </CardContent>
        <CardFooter className="pt-72">
            <div className="bg-[#ffffff]  shrink rounded-3xl w-full hidden md:w-295 border-2 p-2 px-0 sm:block sm:w-295  md:block">
            <div className="text-[11px] sm:items-center md:px-6 p-2  shrink md:text-sm tracking-normal text-[#6B6B6B] flex flex-row gap-6">
                <div className="text-black font-semibold tracking-normal">AI Voice Generator</div>
                <div>Text to Speech</div>
                <div>Music</div>
                <div>Sound Effects</div>
                <div>Voice Cloning</div>
                <div className="ml-auto">
            <a href="/signup" className="inline-flex items-center shrink bg-black text-[10px] p-2 md:text-sm text-white px-4 h-7 rounded-full transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">Sign up</a>
            </div>
            </div>
            </div>
        </CardFooter>
        </Card>
    </section>
)
}