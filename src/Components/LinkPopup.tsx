import { useState } from "react";
interface Prop {
  set: Function;
  id: string;
}

function LinkPopup({ set, id }: Prop) {
  const [value, setValue] = useState<string>("");

  const SetAtt = () => {
    let el = document.getElementById(id);
    el?.setAttribute("href", value);
  };

  return (
    <div
      onMouseDown={(e) => e.preventDefault}
      className="absolute h-full w-full bg-opacity-40 bg-black z-40 flex items-center justify-center"
    >
      <div className="p-8 h-[260px] w-[500px] bg-white rounded shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SetAtt();
            set(false);
          }}
        >
          <input
            type="text"
            className="w-full h-[64px] text-xl p-6 border-black border rounded placeholder-slate-600"
            placeholder="Enter Url Here"
            required
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="mt-[56px] w-full h-[64px] bg-black text-white text-xl rounded">
            Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default LinkPopup;
