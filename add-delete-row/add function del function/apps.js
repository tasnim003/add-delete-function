function addFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "<input type='text'>";
  cell2.innerHTML = "<input type='text'>";
  cell3.innerHTML = "<input type='text'>";
  cell4.innerHTML = "<input type='text'>";
  cell5.innerHTML = "<input type='text'>";
  cell6.innerHTML = '<button type="button" onclick="addFunction()">Add</button><button type="button" onclick="delFunction()">Delete</button>';
}
function delFunction() {
  document.getElementById("myTable").deleteRow(2);
}