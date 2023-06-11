function table(params) {
  return "<table border=1> " + params + " </table>";
}

function tr(params) {
  return "<tr> " + params + " </tr>";
}

function td(params) {
  return "<td> " + params + " </td>";
}

function generateTable(array) {
  const SIZE = array.length;

  var rows = "";
  for (let i = 0; i < SIZE; i++) {
    var datas = "";
    for (let j = 0; j < SIZE; j++) {
      datas += td(array[i][j]);
    }
    rows += tr(datas);
  }
  return table(rows);
}

module.exports = {
  table: table,
  tr: tr,
  td: td,
  generateTable: generateTable,
};
