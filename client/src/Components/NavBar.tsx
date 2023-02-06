import {
  RiArrowLeftLine,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiLinkM,
} from "react-icons/ri";

function NavBar() {
  return (
    <div className="h-48 bg-white px-8 pt-8 w-full">
      <div className="flex justify-between mb-4">
        <RiArrowLeftLine className="hover:cursor-pointer" size={"24px"} />
        <h5 className="text-xl font-bold pl-36">Hello World</h5>
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
      <div className="flex justify-center mt-6 mb-4  ">
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">
          Heading 1
        </h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">
          Heading 2
        </h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">
          Heading 3
        </h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">
          Text
        </h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">B</h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">U</h6>
        <h6 className=" text-base font-meduim hover:cursor-pointer mr-4">I</h6>
        <input className="w-6 mr-4" type="color" />
        <RiLinkM className="hover:cursor-pointer mr-4" size={"24px"} />
        <RiAlignLeft className="hover:cursor-pointer mr-4" size={"24px"} />
        <RiAlignCenter className="hover:cursor-pointer mr-4" size={"24px"} />
        <RiAlignRight className="hover:cursor-pointer " size={"24px"} />
      </div>
    </div>
  );
}

export default NavBar;
