function table99() {
    let N = 10
    let table = ["<table><tr><th></th>"]
    for (let h = 1; h <= N; h++) {
        table.push(`<th>${h}</th>`)
    }
    table.push('</tr>')

    for (let i = 1; i <= N; i++) {
        let row = `<tr><th>${i}</th>`
        for (let j = 1; j <= N; j++) {
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
<style>
table {
  width: 500px;
  border-collapse:collapse;
  border:1px solid black;
  padding: 10px;
}

th {
  text-align:left;
  background-color:black;
  color:white;
  padding: 10px;
}

td {
  border:1px solid black;
  padding: 10px;
}

</style>
</head>
<body>
${table99()}
</body>
</html>
`)


