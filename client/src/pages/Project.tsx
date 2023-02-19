import { useEffect, FormEvent, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import NavBar from "../Components/NavBar";
import { HexColorPicker } from "react-colorful";
import { ColorCommand, NewPage } from "../Components/Actions";
import detectElementOverflow from "detect-element-overflow";

export let selectObj: object;

function Project() {
  const [scale, setScale] = useState<string>("scale-100");
  const [picker, setPicker] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<object>();
  const [scaleMargin, setScaleMargin] = useState<string>("mt-[44px]");

  useEffect(() => {
    document.getElementById(`content-1`)!.focus();
  }, []);

  useEffect(() => {
    selectObj = selectedText!;
  }, [selectedText]);

  useEffect(() => {
    let value: string = scale.slice(6);
    let childern: number = document.getElementById("content-area")
      ?.childElementCount as number;

    if (value === "100") {
      setScaleMargin("mt-[44px]");
    } else if (value === "125") {
      if (childern > 1) {
        setScaleMargin("mt-[300px]");
      } else setScaleMargin("mt-[170px]");
    } else if (value === "150") {
      if (childern > 1) {
        setScaleMargin("mt-[580px]");
      } else setScaleMargin("mt-[300px]");
    } else if (value === "90") {
      if (childern > 1) {
        setScaleMargin("mt-[-75px]");
      } else setScaleMargin("mt-[-20px]");
    } else if (value === "75") {
      if (childern > 1) {
        setScaleMargin("mt-[-240px]");
      } else setScaleMargin("mt-[-100px]");
    }
  }, [scale]);

  interface So {
    type?: string;
    length?: number;
  }

  const SelectedTextObserver = () => {
    let obj: So = window.getSelection() as object;

    if (obj.toString().length > 0 && obj.type === "Range") {
      setSelectedText(obj);
      setPicker(true);
    } else setPicker(false);
  };

  const Overflow = (e: FormEvent<HTMLDivElement>) => {
    let page = e.target as HTMLElement;
    let parentElement = e.target.parentElement as HTMLElement;
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
      }
    } else page.style.height = "auto";
  };

  return (
    <div className="h-screen flex flex-col relative">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col pb-[600px]">
        <div
          onMouseUp={() => SelectedTextObserver()}
          onInput={(e) => {
            Overflow(e);
          }}
          onKeyUp={(e) => {
            if (e.ctrlKey && e.key === "a") {
              SelectedTextObserver();
            }
          }}
          id="content-area"
          className={`${scaleMargin} ${scale}  `}
        >
          <div
            id="page-1"
            className="p-[1in] rounded-sm shadow-md	bg-white h-[11in] w-[8in] m-auto mb-10"
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
          className="opacity-0 h-full w-full z-20"
          defaultValue={scale}
        >
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
