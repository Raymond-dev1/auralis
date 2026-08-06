
const socialLinks =["Twitter", "Github", "Terms", "Privacy"]

export default function Footer() {
  return (
    <section className="font-sans overflow-hidden">
      <div className="w-full flex flex-col gap-8 items-center pb-47 mt-10">
        <span className="pt-185 sm:pt-25 md:pt-25">
          <h2 className="text-[20px] md:text-4xl tracking-normal">
            {" "}
            The Future of voice starts here
          </h2>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="/signup"
            className="inline-flex items-center justify-center  bg-black text-sm text-white font-medium px-6 h-9 rounded-full transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 "
          >
            Get started
          </a>
          <a
            href="contact"
            className="inline-flex items-center justify-center bg-white text-sm text-black  font-bold px-3 h-9 rounded-full tracking-normal border border-[#747878] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 "
          >
            Talk to sales
          </a>
        </div>
      </div>
      {/* Footer */}
      <div className="md:px-12 md:py-12 p-8 w-full">
        <div className="flex items-center justify-between  w-full ">
        <div className="flex flex-row gap-8 items-center p-3">
          <div className="font-extrabold text-[10px]  sm:text-lg tracking-[-0.9px] text-[#18181B]">
            Auralis 
          </div>
          </div>
        <div className="">
          <ul className="md:flex-row flex gap-4 md:gap-8 ">
            {socialLinks.map((link, i) => (
                <li key={i} className="text-[#6B6B6B]  text-[10px] sm:text-sm md:font-normal">
                  {link}
              </li>
        ))} 
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}
