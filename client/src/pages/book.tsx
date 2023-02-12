import { useEffect, FormEvent, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import NavBar from "../Components/NavBar";

function Book() {
  const [scale, setScale] = useState<string>("scale-x-100");

  let pages: number = 1;
  const Overflow = (e: FormEvent<HTMLDivElement>) => {
    GetPagesNumber();
    let currentPageNum: number = Number(e.target.id.toString().slice(5));
    console.log(currentPageNum);
  };

  useEffect(() => {
    GetPagesNumber();
  }, []);

  function GetPagesNumber() {
    pages = document.getElementById("content-area")
      ?.childElementCount as number;
  }

  return (
    <div className="h-screen flex flex-col relative">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col">
        <div
          onInput={(e) => Overflow(e)}
          id="content-area"
          className={`mt-10 ${scale} `}
        >
          <div
            id="page-1"
            contentEditable={true}
            className="outline-none p-12 rounded-sm shadow-md	bg-white h-[1200px]  w-[800px] m-auto mb-10"
          ></div>
        </div>
      </div>
      <div className="shadow-lg fixed bottom-8 right-12 bg-white w-[140px] h-[40px] rounded">
        <select
          onChange={(e) => {
            setScale(e.target.value);
          }}
          className="opacity-0 h-full w-full z-20"
          defaultValue={"75"}
        >
          <option value="scale-x-50">50%</option>
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
      <div></div>
    </div>
  );
}

export default Book;
