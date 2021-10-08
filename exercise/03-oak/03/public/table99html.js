function table99() {
  let table = ["<table><tr><th></th>"]
  for (let h = 1; h <= 9; h++) {
    table.push(`<th>${h}</th>`)
  }
  table.push('</tr>')

  for (let i = 1; i <= 9; i++) {
    let row = `<tr><th>${i}</th>`
    for (let j = 1; j <= 9; j++) {
      row += `<td>${i * j}</td>`
    }
    row += "</tr>"
    table.push(row)
  }
  return table.join('\n') + "</table>"
}

console.log(`
<html>
<head>
<link rel=stylesheet type="text/css" href="table99html.css">
</head>
<body>
${table99()}
</body>
</html>
`)