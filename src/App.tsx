import Counter from "@/components/Counter";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  return (
    <>
      <section className="flex flex-1 flex-col place-content-center place-items-center gap-6.25 max-lg:gap-4.5 max-lg:px-5 max-lg:pt-8 max-lg:pb-6">
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-42.5"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-8.5 z-10 mx-auto h-7 transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-26.75 z-0 mx-auto h-6.5 w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-8 text-[56px] leading-none font-(--heading) tracking-[-1.68px] text-(--text-h) max-lg:my-5 max-lg:text-4xl">
            Get started
          </h1>
        </div>
        <Counter />
      </section>
    </>
  );
}

export default App;
