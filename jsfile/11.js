import { getData } from "./humansData.js";

function allData() {
  getData()
    .then((res) => {
      console.log(res);

      const main = document.getElementById("main");

      while (main.firstChild) {
        main.firstChild.removeChild(main.firstChild);
      }

      const p = document.createElement("p");
      p.innerHTML = `<p>${JSON.stringify(res)}</p>`;
      main.appendChild(p);
    })
    .catch((e) => {
      console.log(e);
    });
}

window.allData = allData;
export default { allData };
