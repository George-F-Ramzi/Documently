import * as pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";

interface So {
  type?: string;
  length?: number;
  getRangeAt?: any;
}

let obj: So = window.getSelection() as object;

let canEdit: boolean = false;

export function SelectedTextObserver(): boolean {
  if (obj.toString().length > 0 && obj.type === "Range") {
    canEdit = true;
    return true;
  } else {
    canEdit = false;
    return false;
  }
}

export function boldCommand() {
  if (canEdit) {
    const el = document.createElement("strong") as HTMLElement;
    const range = obj?.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function ItalicCommand() {
  if (canEdit) {
    const el = document.createElement("em") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function UnderlineCommand() {
  if (canEdit) {
    const el = document.createElement("u") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function ColorCommand(color: string) {
  if (canEdit) {
    const el = document.createElement("span") as HTMLElement;
    const range = obj.getRangeAt(0);
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
  if (canEdit) {
    const el = document.createElement("span") as HTMLElement;
    const range = obj.getRangeAt(0);
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

export function LinkCommand() {
  if (canEdit) {
    const el = document.createElement("a") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.appendChild(range.extractContents());
    el.id = `${Math.random()}`;
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
    return el.id as string;
  }
}

export function OrderdListCommand() {
  if (canEdit) {
    const range = obj.getRangeAt(0);
    const el = document.createElement("ol") as HTMLElement;
    const li = document.createElement("li") as HTMLElement;
    el.appendChild(li);
    li.appendChild(range.extractContents());
    el.style.listStyleType = "decimal";
    el.style.listStylePosition = "inside";
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function RightAlignCommand() {
  if (canEdit) {
    const el = document.createElement("div") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.style.textAlign = "right";
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function CenterAlignCommand() {
  if (canEdit) {
    const el = document.createElement("div") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.style.textAlign = "center";
    el.appendChild(range.extractContents());
    if ((el.innerHTML.toString().length as number) != 0) {
      range.insertNode(el);
    }
  }
}

export function LeftAlignCommand() {
  if (canEdit) {
    const el = document.createElement("div") as HTMLElement;
    const range = obj.getRangeAt(0);
    el.style.textAlign = "left";
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
    "py-[1in] rounded-sm shadow-md	bg-white h-[11in] w-[8in] m-auto mb-10";
  let contentDiv = document.createElement("div") as HTMLElement;
  contentDiv.className = "outline-none overflow-hidden";
  contentDiv.id = `content-${id}`;
  contentDiv.setAttribute("contentEditable", "true");
  mainDiv.appendChild(contentDiv);
  return mainDiv;
}

export function Print() {
  let el = document.getElementById("content-area") as HTMLElement;
  let val = htmlToPdfmake(el.innerHTML);
  let content = { content: val };
  pdfMake.createPdf(content, undefined, undefined, pdfMake.vfs).download();
}
