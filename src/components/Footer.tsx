
const socialLinks =["Twitter", "Github", "Terms", "Privacy"]

export default function Footer() {
  return (
    <section className="font-sans">
      <div className="w-full flex  flex-col gap-8 items-center pb-47 mt-10">
        <span className="pt-25">
          <h2 className="text-4xl tracking-normal">
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
      <div className="px-12 py-12 w-full">
        <div className="flex items-center gap-120 w-full ">
        <div className="flex flex-row gap-8 items-center p-3">
          <div className="font-extrabold text-lg tracking-[-0.9px] text-[#18181B]">
            Auralis 
          </div>
          <div>
            <p className="text-[#71717A] text-sm font-light">@ 2024 Auralis AI.Engineered for precision.</p>
          </div>
          </div>
        <div>
          <ul className="flex-row flex gap-8 ">
            {socialLinks.map((link, i) => (
                <li key={i} className="text-[#6B6B6B]  font-normal">
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
