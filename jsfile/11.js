import { getData } from "./humansData.js";

function allData() {
  getData()
    .then((res) => {
      createTable(res);
    })
    .catch((e) => {
      console.log(e);
    });
}

//
const createTable = (data) => {
  const tableId = document.getElementById("main");

  let tableRow = [];
  data.map(({ lastName, name, age, gender, address, telephone }, index) => {
    tableRow.push(`
      <tr id='${index}'>
          <td>${name}</td>
          <td>${lastName}</td>
          <td id="age${index}">${age}</td>
          <td>${gender}</td>
          <td>${address}</td>
          <td>${telephone}</td>
          <td><input type="button" id="deleteButton" class="deleteButton" value="Удалить" onclick="deleteRow(${index})"></td>
      </tr>
  `);
  });

  const tableData = `
    <table id="peopleTable" class="peopleTable">
      <tr>
          <td colspan="7">Человек</td>
      </tr>
          ${tableRow}
      </table>
  `;

  tableId.innerHTML = tableData;
  document.body.appendChild(tableId);
  replaceColor();
};
//

function replaceColor() {
  let row = document.querySelectorAll("tr");
  for (let i = 1; i < row.length; i++) {
    let agePeople = row[i].cells[2].textContent;
    if (agePeople < 18) {
      row[i].style.backgroundColor = "#69ff52";
    } else if (agePeople > 18 && agePeople < 60) {
      row[i].style.backgroundColor = "#fffc52";
    } else {
      row[i].style.backgroundColor = "#f24141";
    }
  }
}

function deleteRow(id) {
  const table = document.getElementById("peopleTable");
  const rows = table.getElementsByTagName("tr");

  const idToDelete = id.toString(); // id записи для удаления
  let rowToDelete = null;

  for (let i = 1; i < rows.length; i++) {
    const id = rows[i].id;

    if (id === idToDelete) {
      rowToDelete = rows[i];
      break;
    }
  }

  if (rowToDelete) {
    rowToDelete.parentNode.removeChild(rowToDelete);
  }
}

window.allData = allData;
window.deleteRow = deleteRow;
export default { allData, deleteRow };
