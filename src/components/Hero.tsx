// type heroLink = {
//     label:string,
//     href:string
// }

export default function Hero() {
  return (
    <div className="animate-fade-up font-sans pt-9 h-106.5">
      <div className="flex flex-col max-w-4xl gap-32 m-5 md:mx-auto-flex  pt-[63.19px] w-174">
        <div className="">
          <h1 className="text-6xl font-semibold h-2 tracking-[-3.36px]">
                <span className="inline md:block">Making digital</span>
                <span className="block">experiences </span>
                <span className="block">sound human</span>
          </h1> 
          </div>
        <div className="flex items-center gap-4 pt-16">
          <a href="/signup" className="inline-flex items-center justify-center  bg-black text-sm text-white font-medium px-6 h-9 rounded-full transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">Sign up</a>
          <a href="contact" className="inline-flex items-center justify-center bg-white text-sm text-black  font-bold px-3 h-9 rounded-full tracking-normal border border-[#747878] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">Contact sales</a>
        </div> 
      </div>
    </div>
  );
}