import { NewPage } from "../Components/Actions";
import NavBar from "../Components/NavBar";

function Book() {
  const Overflow = () => {};

  return (
    <div className=" h-screen flex flex-col ">
      <NavBar />
      <div
        id="content-area"
        className="grow overflow-y-scroll bg-slate-200 w-full flex-col"
      >
        <div
          id="main-dev-1"
          className="  p-12 rounded-sm shadow-md	bg-white h-[1200px] mt-12 w-[900px] m-auto mb-10"
        >
          <div
            contentEditable={true}
            onInput={() => console.log("sad")}
            id="content-1"
            className="outline-none w-full bg-slate-400"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
