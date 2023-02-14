import { selectObj as selectedText } from "../pages/book";

const boldCommand = () => {
  if (selectedText) {
    const el = document.createElement("strong") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if (el.innerHTML.toString().length != 0) {
      range.insertNode(el);
    }
  }
};

const ItalicCommand = () => {
  if (selectedText) {
    const el = document.createElement("em") as HTMLElement;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if (el.innerHTML.toString().length != 0) {
      range.insertNode(el);
    }
  }
};

const UnderlineCommand = () => {
  if (selectedText) {
    const el = document.createElement("span") as HTMLElement;
    el.style.textDecoration = "underline";
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if (el.innerHTML.toString().length != 0) {
      range.insertNode(el);
    }
  }
};

const ColorCommand = (color: string) => {
  if (selectedText) {
    const el = document.createElement("span") as HTMLElement;
    el.style.color = color;
    const range = selectedText.getRangeAt(0);
    el.appendChild(range.extractContents());
    if (el.innerHTML.toString().length != 0) {
      range.insertNode(el);
    }
  }
};
