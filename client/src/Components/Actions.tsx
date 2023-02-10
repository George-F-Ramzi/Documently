export function HeadingOne(): HTMLElement {
  const h1: HTMLElement = document.createElement("h1");
  h1.innerText = "Heading 1";
  h1.className = "selctable font-bold text-2xl leading-normal	";
  return h1;
}

export function HeadingTwo(): HTMLElement {
  const h2: HTMLElement = document.createElement("h4");
  h2.innerText = "Heading 2";
  h2.className = " selctable font-bold text-xl leading-normal	";
  return h2;
}

export function HeadingThree(): HTMLElement {
  const h3: HTMLElement = document.createElement("h6");
  h3.innerText = "Heading 3";
  h3.className = " selctable font-bold text-base	 leading-normal	";
  return h3;
}

export function NewPage(): HTMLElement {
  const mainDiv: HTMLElement = document.createElement("div");
  const contentDiv: HTMLElement = document.createElement("div");
  mainDiv.className =
    "p-12 rounded-sm shadow-md	bg-white h-[1200px] mt-12 w-[900px] m-auto mb-10";
  mainDiv.id = "main-dev-2";
  contentDiv.className = "outline-none w-full h-full";
  contentDiv.id = "content-2";
  contentDiv.setAttribute("contentEditable", "true");
  contentDiv.setAttribute("onInput", "");
  mainDiv.appendChild(contentDiv);
  return mainDiv;
}
