import NavBar from "../Components/NavBar";

function Book() {
  return (
    <div className=" h-screen flex flex-col ">
      <NavBar />
      <div className="grow overflow-y-scroll bg-slate-100 w-full flex-col">
        <div className="bg-white h-[1200px] mt-12 w-[900px] m-auto mb-10"></div>
      </div>
    </div>
  );
}

export default Book;
