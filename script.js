const containerEl = document.getElementById("container");


for (let index = 0; index < 50; index++) {
  const CreatEl = document.createElement("div");
  CreatEl.classList.add("colorContainer");
  containerEl.appendChild(CreatEl);
}

const colorContainerEl = document.querySelectorAll(".colorContainer");
colorgenerator();

function colorgenerator() {
  colorContainerEl.forEach((colorContainerEl) => {
    const funcRandomcolor = RandomColor();
    colorContainerEl.style.backgroundColor = "#" + funcRandomcolor;
    colorContainerEl.innerHTML="#" + funcRandomcolor;
  });
}

function RandomColor() {
  const chars = "0123456789abcdef";
  let colorCode = "";
  for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}



