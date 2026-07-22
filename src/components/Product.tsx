import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Product(){
return(
    <section className="m-5">
        <Card className="font-geist max-w-6xl h-129.5  bg-[#F7F3F2]">
        <CardHeader>
        <CardTitle className="bg-[#F7F3F2] rounded-2xl w-91.25  border-2 p-2 pl-2">
            <div className="px-3 text-sm text-[#71717A] flex flex-row gap-6 rounded-2xl">
                <div>Auralis studio</div>
                <div>Auralis Agents</div>
                <div>Auralis API</div>
            </div>
            </CardTitle>
        <CardAction className="bg-[#F7F3F2] rounded-2xl border-2 p-2 ">
          <span className="font-semibold tracking-normal p-2">
            <span className="bg-[#10B981] rounded-4xl">.
                 </span>
                  AI Voice Generator
                  </span>
        </CardAction>
        </CardHeader>   
        <CardContent className="">
            <div className="bg-blue-800">
                <p>Content</p>
        </div>
        </CardContent>
        <CardFooter className="pt-72 font-geist ">
            <div className="bg-[#F7F3F2]  rounded-3xl w-295 border-2 p-2 px-0">
            <div className="px-6 p-2 justify-between text-sm tracking-normal text-[#71717A] flex flex-row gap-6">
                <div className="text-black justify-between tracking-normal">AI Voice generator</div>
                <div>Text to Speech</div>
                <div>Music</div>
                <div>Sound Effects</div>
                <div>Voice Cloning</div>
                <div className="pl-99">
            <a href="/signup" className="inline-flex font-geist items-center bg-black text-sm text-white  px-4 h-7 rounded-full transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">Sign up</a>
            </div>
            </div>
            </div>
        </CardFooter>
        </Card>
    </section>
)
}