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
  RiFontColor,
  RiImageLine,
  RiListCheck,
  RiListOrdered,
  RiSubtractLine,
  RiTable2,
  RiAlignJustify,
} from "react-icons/ri";

function NavBar() {
  const [font, setFont] = useState<string>("Roboto");
  const [size, setSize] = useState<number>(12);
  const [color, setColor] = useState<string>("red");
  return (
    <div className="h-48 bg-white px-8 pt-8 w-full shadow-md z-10 p-10	">
      <div className="flex h-fit items-center  mb-4">
        <h5 className="text-xl grow font-bold  ">Hello World</h5>
        <div className="header__btns">
          <button className="bg-yellow-400  hover:bg-yellow-200 font-bold py-2 px-4 rounded ">
            Save
          </button>
          <button className="bg-blue-700 text-white hover:bg-blue-800 font-bold py-2 px-4 rounded ml-2">
            Save To PDF
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="flex items-center  mt-6 mb-4 ">
        <div className="h-[48px] w-[180px] border border-black relative">
          <select
            onChange={(e) => setFont(e.target.value)}
            className="opacity-0 h-full w-full z-20"
            defaultValue={"Roboto"}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <p className="absolute left-3 top-3  -z-10">{font}</p>
          <RiArrowDropDownFill
            size={"40px"}
            className="absolute right-2 top-1 -z-10"
          />
        </div>
        <div className="h-[48px] w-[180px] border border-black relative ml-[24px]">
          <select
            onChange={(e) => setSize(Number(e.target.value))}
            className="opacity-0 h-full w-full z-20"
            defaultValue={"8"}
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
          <RiBold size={"24px"} className="cursor-pointer" />
          <RiUnderline size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiItalic size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiFontColor
            size={"24px"}
            className="ml-[24px] cursor-pointer"
            color={color}
          />
          <RiImageLine size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiLinkM size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiListCheck size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiListOrdered size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiSubtractLine size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiTable2 size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiAlignLeft size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiAlignCenter size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiAlignRight size={"24px"} className="ml-[24px] cursor-pointer" />
          <RiAlignJustify size={"24px"} className="ml-[24px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
