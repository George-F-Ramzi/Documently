import { selectObj as selectedText } from "../pages/book";

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
    let range = selectedText.getRangeAt(0);
    let content = range.extractContents().textContent.split("") as string[];
    content.reverse();
    if (content.length > 0) {
      for (let index: number = 0; index < content.length; index++) {
        let char: HTMLElement = document.createElement("span");
        char.innerHTML = content[index];
        char.style.color = color;
        range.insertNode(char);
      }
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

export function SizeCommand(size: number) {
  if (selectedText) {
    let range = selectedText.getRangeAt(0);
    let content = range.extractContents().textContent.split("") as string[];
    content.reverse();
    if (content.length > 0) {
      for (let index: number = 0; index < content.length; index++) {
        let char: HTMLElement = document.createElement("span");
        char.innerHTML = content[index];
        char.style.fontSize = `${size}px`;
        range.insertNode(char);
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
