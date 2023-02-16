import { useEffect, FormEvent, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import NavBar from "../Components/NavBar";
import { HexColorPicker } from "react-colorful";
import { ColorCommand, NewPage } from "../Components/Actions";
import detectElementOverflow from "detect-element-overflow";

export let selectObj: object;

function Book() {
  const [scale, setScale] = useState<string>("scale-x-100");
  const [picker, setPicker] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<object>();

  const SelectedTextObsover = () => {
    interface So {
      type?: string;
      length?: number;
    }

    let obj: So = window.getSelection() as object;

    if (obj.toString().length > 0 && obj.type === "Range") {
      setSelectedText(obj);
      setPicker(true);
    } else setPicker(false);
  };

  useEffect(() => {
    selectObj = selectedText!;
  }, [selectedText]);

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
      <div className="grow overflow-y-scroll bg-slate-200 w-full flex-col">
        <div
          onMouseUp={() => SelectedTextObsover()}
          onInput={(e) => {
            Overflow(e);
          }}
          id="content-area"
          className={`mt-10 ${scale} `}
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

export default Book;
