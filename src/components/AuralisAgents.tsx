import robotIcon from "../assets/bot-icon.svg";
import profileIcon from "../assets/profile-icon.svg";

import {
  Card,
  CardContent,
  CardTitle,
  //   CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function AuralisAgent() {
  return (
    <section className="pt-35 flex flex-col gap-6 p-8 h-194.5 font-sans">
      <div>
        {/* agent badge */}
        <span className=" font-semibold text-xs tracking-[1.2px] rounded-4xl p-1 bg-[#E5E2E1]">
          {" "}
          Auralis Agents{" "}
        </span>
      </div>
      <div className="leading-12 font-normal text-4xl">
        <span className="block"> Build agents that </span>
        <span className="block"> Listen , respond, & act</span>
      </div>
      <div className="flex gap-8">
        <Card className="w-149 h-112.5">
          <CardHeader>
            <CardTitle className="bg-[#FDF8F8] rounded-2xl w-42.5  border-2 p-2 pl-2">
              <div className=" text-sm text-[#111111 flex flex-row gap-6 rounded-2xl">
                <div>Omnichannel agents</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <div className="flex justify-center -space-x-14">
  <div className="bg-blue-500 mix-blend-multiply"></div>
  <div className="bg-pink-500 mix-blend-multiply"></div>
</div>
          </CardContent>
          <div className="p-8">
            <CardFooter className="border-t relative top-2 text-black gap-2 flex-col items-start bg-white/30 backdrop-blur-none h-full shadow-xl/20 pb-5">
            {/* robo-chat */}
              <div className="flex flex-col">
                <div className="w-xl">
                  <span className="flex-row flex gap-4 items-center ">
                    <img src={robotIcon} alt="robot-icon" />
                    <p className="p-2 rounded-3xl bg-white/30 backdrop-blur-2xl ">
                      Hello! How can I assist you today?
                    </p>
                  </span>
                </div>
                {/* user chat */}
                <div className="flex flex-col relative right-29">
                  <span className="flex-row-reverse flex gap-4 items-center">
                    <img src={profileIcon} alt="profile-icon" />
                    <p className="p-2 rounded-3xl  bg-black font-light text-white">
                      I need help checking my deployment status.
                    </p>
                  </span>
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
        {/* Analytics badge */}
        <Card className="w-149 h-112.5 bg-white">
            <CardHeader>
            <CardTitle className="bg-[#FDF8F8] rounded-2xl w-21  border-2 p-2 pl-2">
              <div className=" text-sm text-[#111111 flex flex-row gap-6 rounded-2xl">
                <div>Analytics</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full"></CardContent>
          <CardFooter className="gap-2 flex-col items-start shadow-xl p-8 m-5 bg-linear-to-r from-white via-gray-300 to-white">
            <span className="text-lg tracking-normal font-medium">
              {" "}
              Deep Insights{" "}
            </span>
            <span className="font-light text-[#71717A]">
              {" "}
              Insights based on important analysis on intricate shiii
            </span>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
