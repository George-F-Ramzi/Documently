import { useState } from "react";
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiLinkM,
  RiBold,
  RiArrowDropDownFill,
  RiUnderline,
  RiItalic,
  RiListOrdered,
  RiPrinterFill,
} from "react-icons/ri";
import {
  boldCommand,
  CenterAlignCommand,
  ItalicCommand,
  LeftAlignCommand,
  LinkCommand,
  OrderdListCommand,
  Print,
  RightAlignCommand,
  SizeCommand,
  UnderlineCommand,
} from "./Actions";
import LinkPopup from "./LinkPopup";

function NavBar() {
  const [size, setSize] = useState<number>(12);
  const [sizeTiltes, setSizeTiltes] = useState<number>(11);
  const [linking, setLinking] = useState<boolean>(false);
  const [linkId, setLinkId] = useState<string>("");

  return (
    <>
      {linking ? <LinkPopup set={setLinking} id={linkId} /> : ""}
      <div className="h-32 bg-white px-8 pt-8 w-full shadow-md z-10 p-10	">
        <div className="flex items-center  justify-center ">
          <div className="h-[48px] min-w-[180px] border border-black relative ml-[24px] ">
            <select
              onChange={(e) => {
                setSizeTiltes(Number(e.target.value));
                SizeCommand(Number(e.target.value));
              }}
              className="opacity-0 h-full w-full z-20"
              defaultValue={sizeTiltes}
            >
              <option value="11">Normal Text</option>
              <option value="26">Title</option>
              <option value="15">Subtitle</option>
              <option value="20">Heading 1</option>
              <option value="16">Heading 2</option>
              <option value="14">Heading 3</option>
            </select>
            <p className="absolute left-3 top-3  -z-10">
              {sizeTiltes == 11
                ? "Normal Text"
                : sizeTiltes == 26
                ? "Title"
                : sizeTiltes == 15
                ? "Subtitle"
                : sizeTiltes == 20
                ? "Heading 1"
                : sizeTiltes == 16
                ? "Heading 2"
                : sizeTiltes == 14
                ? "Heading 3"
                : ""}
            </p>
            <RiArrowDropDownFill
              size={"40px"}
              className="absolute right-2 top-1 -z-10"
            />
          </div>
          <div className="h-[48px] min-w-[180px] border border-black relative ml-[24px]">
            <select
              onChange={(e) => {
                setSize(Number(e.target.value));
                SizeCommand(Number(e.target.value));
              }}
              className="opacity-0 h-full w-full z-20"
              defaultValue={size}
            >
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="18">18</option>
              <option value="24">24</option>
              <option value="30">30</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
              <option value="72">72</option>
              <option value="96">96</option>
            </select>
            <p className="absolute left-3 top-3 -z-10">{size}</p>
            <RiArrowDropDownFill
              size={"40px"}
              className="absolute right-2 top-1  -z-10"
            />
          </div>
          <div className="flex ml-[24px] items-center ">
            <RiBold
              size={"24px"}
              className="cursor-pointer"
              onMouseDown={() => {
                boldCommand();
              }}
            />
            <RiUnderline
              size={"24px"}
              className="ml-[24px] cursor-pointer"
              onMouseDown={() => {
                UnderlineCommand();
              }}
            />
            <RiItalic
              size={"24px"}
              className="ml-[24px] cursor-pointer"
              onMouseDown={() => {
                ItalicCommand();
              }}
            />
            <RiLinkM
              size={"24px"}
              className="ml-[24px] cursor-pointer"
              onMouseDown={() => {
                let id: string = LinkCommand()!;
                setLinkId(id);
                setLinking(true);
              }}
            />
            <RiListOrdered
              onMouseDown={() => {
                OrderdListCommand();
              }}
              size={"24px"}
              className="ml-[24px] cursor-pointer"
            />
            <RiAlignLeft
              onMouseDown={() => {
                LeftAlignCommand();
              }}
              size={"24px"}
              className="ml-[24px] cursor-pointer"
            />
            <RiAlignCenter
              onMouseDown={() => {
                CenterAlignCommand();
              }}
              size={"24px"}
              className="ml-[24px] cursor-pointer"
            />
            <RiAlignRight
              onMouseDown={() => {
                RightAlignCommand();
              }}
              size={"24px"}
              className="ml-[24px] cursor-pointer"
            />
            <RiPrinterFill
              onMouseDown={() => {
                Print();
              }}
              size={"24px"}
              className="ml-[24px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
