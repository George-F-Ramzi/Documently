import { useEffect, FormEvent, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { NewPage } from "../Components/Elements";
import NavBar from "../Components/NavBar";

function Book() {
  const [scale, setScale] = useState<string>("scale-x-100");
  const [pages, setPages] = useState<number>(1);

  const Overflow = (e: FormEvent<HTMLDivElement>) => {
    GetPagesNumber();
    let id: string = e.target.id;
    let pageNum = Number(id.slice(5));
    let page = document.getElementById(id) as HTMLElement;
    let hegiht: number = page.getBoundingClientRect().height;
    if (hegiht >= 1080) {
      page.style.height = "1080px";
    } else {
      page.style.height = "auto";
    }
  };

  useEffect(() => {
    GetPagesNumber();
  }, []);

  function GetPagesNumber() {
    let num = document.getElementById("content-area")
      ?.childElementCount as number;
    setPages(num);
  }

  return (
    <div className="h-screen flex flex-col relative">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col">
        <div
          onInput={(e) => {
            Overflow(e);
          }}
          id="content-area"
          className={`mt-10 ${scale} `}
        >
          <div className="p-12 rounded-sm shadow-md	bg-white h-[1200px] w-[800px] m-auto mb-10">
            <p
              id="page-1"
              contentEditable={true}
              className="outline-none overflow-hidden"
            ></p>
          </div>
        </div>
      </div>
      <div className="shadow-lg fixed bottom-8 right-12 bg-white w-[140px] h-[40px] rounded">
        <select
          onChange={(e) => {
            setScale(e.target.value);
          }}
          className="opacity-0 h-full w-full z-20"
          defaultValue={scale}
        >
          <option value="scale-x-75">75%</option>
          <option value="scale-x-90">90%</option>
          <option value="scale-x-100">100%</option>
          <option value="scale-x-125">125%</option>
          <option value="scale-x-150">150%</option>
        </select>
        <p className="absolute left-3 top-2 -z-10">{scale.slice(8)}</p>
        <RiArrowDropDownFill
          size={"40px"}
          className="absolute right-2 top-[2px] -z-10"
        />
      </div>
    </div>
  );
}

export default Book;
