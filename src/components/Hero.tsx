// type heroLink = {
//     label:string,
//     href:string
// }

export default function Hero() {
  return (
    <div className="animate-fade-up overflow-hidden font-sans pt-0  md:h-106.5">
      <div className="flex flex-col items-center md:items-start m-5  md:pt-[63.19px]  gap-6">
        <div className="">
          <h1 className=" font-semibold tracking-[-3.36px] text-5xl md:text-left text-center sm:text-6xl h-auto">
                <span className="inline md:block">Making digital</span>
                <span className="block">experiences </span>
                <span className="block">sound human</span>
          </h1> 
          </div>
        <div className="flex items-center gap-4 md:pt-12 justify-center">
          <a href="/signup" className="inline-flex items-center justify-center  bg-black text-sm text-white font-medium p-3 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 md:px-6 h-9 rounded-[10px]">Sign up</a>
          <a href="contact" className="inline-flex items-center justify-center bg-white  text-sm text-black font-medium p-2 tracking-normal border rounded-[10px] border-[#747878] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 md:px-3 h-9">Contact sales</a>
        </div> 
      </div>
    </div>
  );
}