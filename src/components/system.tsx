import docIcon from "../assets/doc-icon.svg";
import ccIcon from "../assets/cc-icon.svg";
import neuralEngine from "../assets/Background+Border.png"
import {
  Card,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function System() {
  return (
    <section className="p-8 pb-5 font-sans ">
      <div className="flex flex-col items-center pb-12">
        <div>
          <h2 className="font-bold text-5xl tracking-[-1.92px] leading-tight  text-center">
            <span className="block">Two systems, one shared </span>
            <span className="block">intelligence layer</span>
          </h2>
        </div>
        <span className="text-sm pt-4 text-[#71717A] font-light">
          One intelligence layer on your editor loosen up your teams and project
          intending to change lives
        </span>
      </div>
      <div className="flex flex-col gap-8 md:gap-8 md:flex-row md:justify-center">
        <Card className="bg-[#d1c0e1] w-full md:h-74 md:w-148">
          <CardHeader>
            <img src={docIcon} alt="doc-icon" />
          </CardHeader>
          <CardContent className="h-full"></CardContent>
          <CardFooter className="gap-2 flex-col items-start w-135.2">
            <span className="text-lg tracking-normal font-medium">
              {" "}
              Soft Editor UI{" "}
            </span>
            <span className="font-light text-[#71717A]">
              {" "}
              This edits hard images to soft copies
            </span>
          </CardFooter>
        </Card>
        <Card className="bg-green-100 w-full  md:w-148">
          <CardHeader>
            <img src={ccIcon} alt="cc-icon" />
          </CardHeader>
          <CardContent className="h-full"></CardContent>
          <CardFooter className=" gap-2 flex-col items-start w-135.2">
            <span className="text-lg tracking-normal font-medium">
              {" "}
              Transcript Panel{" "}
            </span>
            <span className="font-light text-[#71717A]">
              {" "}
              Transcribe your voices while removing the noisy background noise
              with ease
            </span>
          </CardFooter>
        </Card>
      </div>
      <div className="pt-12">
        <img src={neuralEngine} alt="neural-engine" className="object-contain h-auto w-full"></img>
      </div>
    </section>
  );
}
