import { useEffect, FormEvent, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import NavBar from "../Components/NavBar";
import { HexColorPicker } from "react-colorful";
import {
  ColorCommand,
  NewPage,
  SelectedTextObserver,
} from "../Components/Actions";
import detectElementOverflow from "detect-element-overflow";

function Project() {
  const [scale, setScale] = useState<string>("scale-100");
  const [padding, setPadding] = useState<string>();
  const [picker, setPicker] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById(`content-1`)!.focus();
    let pad = localStorage.getItem("padding");
    if (pad !== "undefined") {
      setPadding(pad!);
    } else {
      setPadding("50px");
    }
    SetingPadding();
  }, []);

  useEffect(() => {
    SetingPadding();
  }, [padding]);

  const SetingPadding = () => {
    localStorage.setItem("padding", padding!);
    let contentArea = document.getElementById("content-area");
    contentArea?.childNodes.forEach((p) => {
      let p2 = p as HTMLElement;
      p2.style.paddingInline = padding!;
    });
  };

  const Overflow = (e: FormEvent<HTMLDivElement>) => {
    let page = e.target as HTMLElement;
    let parentId: string = page.id.slice(8);
    let parentElement = document.getElementById(
      `page-${parentId}`
    ) as HTMLElement;
    let contentArea = document.getElementById("content-area") as HTMLElement;
    let pagesNumber = contentArea?.childElementCount as number;
    let currentPageNumber: number = Number(parentElement.id.slice(5));
    let collisions = detectElementOverflow(page, parentElement);
    if (collisions.overflowBottom >= -96) {
      page.style.height = "100%";
      if (pagesNumber === currentPageNumber) {
        page.blur();
        contentArea.appendChild(NewPage((pagesNumber = pagesNumber + 1)));
        document.getElementById(`content-${pagesNumber++}`)?.focus();
        SetingPadding();
      }
    } else page.style.height = "auto";
  };

  return (
    <div className="h-screen flex flex-col relative">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col ">
        <div
          onMouseUp={() => setPicker(SelectedTextObserver())}
          onInput={(e) => {
            Overflow(e);
          }}
          onKeyUp={(e) => {
            if (e.ctrlKey && e.key === "a") {
              setPicker(SelectedTextObserver());
            }
          }}
          id="content-area"
          className={`mt-[40px] mb-[40px] ${scale}`}
        >
          <div
            id="page-1"
            className="py-[1in] rounded-sm shadow-md	bg-white h-[11in] w-[8in] m-auto mb-10"
          >
            <div
              id="content-1"
              contentEditable={true}
              className="outline-none overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
      <div className="shadow-lg fixed bottom-8 right-12 bg-white w-[140px] h-[40px] rounded">
        <select
          onChange={(e) => {
            setScale(e.target.value);
          }}
          className="opacity-0 h-full w-full z-20 "
          defaultValue={scale}
        >
          <option value="scale-50">50%</option>
          <option value="scale-75">75%</option>
          <option value="scale-90">90%</option>
          <option value="scale-100">100%</option>
          <option value="scale-125">125%</option>
          <option value="scale-150">150%</option>
        </select>
        <p className="absolute left-3 top-2 -z-10">{scale.slice(6)}</p>
        <RiArrowDropDownFill
          size={"40px"}
          className="absolute right-2 top-[2px] -z-10"
        />
      </div>
      <div className="shadow-lg fixed bottom-12 left-12 bg-white w-[140px] h-[40px] rounded">
        <select
          onChange={(e) => {
            setPadding(e.target.value);
          }}
          className="opacity-0 h-full w-full z-20 "
          defaultValue={scale}
        >
          <option value="50px">50px</option>
          <option value="100px">100px</option>
          <option value="150px">150px</option>
          <option value="200px">200px</option>
        </select>
        <p className="absolute left-3 top-2 -z-10">{padding}</p>
        <RiArrowDropDownFill
          size={"40px"}
          className="absolute right-2 top-[2px] -z-10"
        />
      </div>

      {picker ? (
        <div className="absolute right-[32px] bottom-[100px] shadow-md ">
          <HexColorPicker
            onChange={(e) => {
              ColorCommand(e);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Project;
