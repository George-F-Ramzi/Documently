import { selectObj as selectedText } from "../pages/Project";

export function boldCommand() {
  if (selectedText) {
    const el = document.createElement("strong") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function ItalicCommand() {
  if (selectedText) {
    const el = document.createElement("em") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function UnderlineCommand() {
  if (selectedText) {
    const el = document.createElement("u") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function ColorCommand(color: string) {
  if (selectedText) {
    const el = document.createElement("span") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.style.color = color;
    el.appendChild(range.extractContents());
    let childs = el.getElementsByTagName(
      "span"
    ) as HTMLCollectionOf<HTMLSpanElement>;
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
      for (let index = 0; index < childs.length; index++) {
        childs[index].style.color = color;
      }
    }
  }
}

export function SizeCommand(size: number) {
  if (selectedText) {
    const el = document.createElement("span") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.style.fontSize = `${size}px`;
    el.appendChild(range.extractContents());
    let childs = el.getElementsByTagName(
      "span"
    ) as HTMLCollectionOf<HTMLSpanElement>;
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
      for (let index = 0; index < childs.length; index++) {
        childs[index].style.fontSize = `${size}px`;
      }
    }
  }
}

export function LinkCommand(size: number) {
  if (selectedText) {
    const el = document.createElement("a") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function NewPage(id: number): HTMLElement {
  let mainDiv = document.createElement("div") as HTMLElement;
  mainDiv.id = `page-${id}`;
  mainDiv.className =
    "p-[1in] rounded-sm shadow-md	bg-white h-[11in] w-[8in] m-auto mb-10";
  let contentDiv = document.createElement("div") as HTMLElement;
  contentDiv.className = "outline-none overflow-hidden";
  contentDiv.id = `content-${id}`;
  contentDiv.setAttribute("contentEditable", "true");
  mainDiv.appendChild(contentDiv);
  return mainDiv;
}
