function calculate() {
    const grades = { A: 4, B: 3, C: 2, D: 1, E: 0 };
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const selectedGrade = document.getElementById("grade").value;
    let table = document.getElementsByTagName('table')[0];
    let newRow = table.insertRow(table.rows.length);

    let col1 = newRow.insertCell(0);
    let col2 = newRow.insertCell(1);
    let col3 = newRow.insertCell(2);
    let col4 = newRow.insertCell(3);

    if (selectedGrade in grades) {
        const grade = grades[selectedGrade];

        col1.innerHTML = name;
        col2.innerHTML = course;
        col3.innerHTML = selectedGrade;
        col4.innerHTML = grade.toFixed(2);
    }
}
