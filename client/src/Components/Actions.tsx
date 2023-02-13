export function boldCommand(selected: object) {
  if (selected.toString().length > 0 && selected.type === "Range") {
    const strongElement = document.createElement("strong") as HTMLElement;
    const selectedTextRange = selected?.getRangeAt(0);
    selectedTextRange?.surroundContents(strongElement);
  }
}

export function UnderlineCommand(selected: object) {
  if (selected.toString().length > 0 && selected.type === "Range") {
    const spanElement = document.createElement("span") as HTMLElement;
    spanElement.style.textDecoration = "underline";
    const selectedTextRange = selected?.getRangeAt(0);
    selectedTextRange?.surroundContents(spanElement);
  }
}
