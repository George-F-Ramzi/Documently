import { useEffect, FormEvent } from "react";
import NavBar from "../Components/NavBar";

function Book() {
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
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col">
        <div onInput={(e) => Overflow(e)} id="content-area" className="mt-10">
          <div
            id="page-1"
            contentEditable={true}
            className="outline-none p-12 rounded-sm shadow-md	bg-white h-[1200px]  w-[800px] m-auto mb-10"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
