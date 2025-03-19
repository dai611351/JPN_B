const employees = [
    { id: 1, name: 'Example 1', age: 18, address: 'District' },
    { id: 2, name: 'Example 1', age: 18, address: 'District' }
];

const tableBody = document.getElementById("employeeTableBody");

employees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `;
    tableBody.appendChild(row);
});