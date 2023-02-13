let contentArea: HTMLElement;

export function NewPage(num: number) {
  contentArea = document.getElementById("content-area") as HTMLElement;
  let mainDiv = document.createElement("div");
  mainDiv.className =
    "p-12 rounded-sm shadow-md	bg-white h-[1200px] w-[800px] m-auto mb-10";
  let contentDiv = document.createElement("div");
  contentDiv.className = "outline-none overflow-hidden";
  contentDiv.id = `page-${(num = num + 1)}`;
  contentDiv.setAttribute("contentEditable", "true");
  mainDiv.appendChild(contentDiv);
  contentArea.appendChild(mainDiv);
}
