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
      content.forEach((e) => {
        let char: HTMLElement = document.createElement("span");
        char.innerHTML = e;
        char.style.color = color;
        range.insertNode(char);
      });
    }
  }
}
