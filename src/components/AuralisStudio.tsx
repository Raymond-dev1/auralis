import musicIcon from "../assets/music-Icon.svg"
import sfxIcon from "../assets/sfx-Icon.svg"
import voicesIcon from "../assets/voices-Icon.svg"
import imgvidIcon from "../assets/img&vid-Icon.svg"

import {
  Card,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const icons =[
  {name: "Music",  src : musicIcon },
  {name: "SFX",  src : sfxIcon  },
  {name: "Voices",  src : voicesIcon},
  {name: "Image & Video",  src : imgvidIcon },
]

export default function AuralisStudio(){
  return(
    <section className="flex flex-col gap-6 pt-35 p-8 h-194.5 font-sans md:justify-center">
      <div>
        <span className=" font-semibold text-xs tracking-[1.2px] rounded-4xl p-1 bg-[#E5E2E1]"> Auralis Studio</span>
      </div>
      <div className="leading-12 font-normal text-4xl md:text-left">
        <span className="block"> Create, refine, & scale</span>
        <span className="block">audio in one place</span>
      </div>
      <div className="flex flex-col gap-6  md:flex-row md:gap-8 ">
        <Card className=" w-full md:h-75 md:w-149 bg-linear-to-r from-orange-500 via-red-600 to-white-100  to-violet-300">
          <CardContent className="h-full"></CardContent>
          <div className="justify-end text-orange-500">.
          <CardFooter className="md:py-2 border-t  relative top-2 text-[#FFFFFF] gap-2 flex-col items-start bg-white/30 backdrop-blur-none h-full ">
            <span className="text-sm md:text-lg  tracking-normal font-light">
              {" "}
              Soft Editor UI{" "}
            </span>
            <span className="font-light text-sm">
              {" "}
              This edits hard images to soft copies
            </span>
          </CardFooter>
          </div>
        </Card>
        <Card className="w-full md:h-75 md:w-149 bg-white">
          <CardContent className="h-full"></CardContent>
          <CardFooter className="gap-2 flex-col items-start">
            <span className="text-lg tracking-normal font-medium">
              {" "}
              Transcript Panel{" "}
            </span>
            <span className="font-light text-[#71717A]">
              {" "}
              This edits hard images to soft copies
            </span>
          </CardFooter>
        </Card>
      </div>
      {/* icons*/}
      <div className="grid grid-cols-2 gap-3 md:flex flex-row md:gap-6">
        {icons.map((icon ,i)=>(
          <Card className=" flex bg-[#F3F2EF] gap-3 w-full p-5 md:w-71.5 md:h-22.5">
            <CardHeader >
              <span key ={i} className="">
            <img src={icon.src} />
          </span>
            </CardHeader>
          <CardFooter>
            <span key={i} className="font-medium">
              {icon.name}
            </span>
          </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}