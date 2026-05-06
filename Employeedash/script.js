const API_URL = "https://jsonplaceholder.typicode.com/users";

let editId = null;

async function getEmployees() {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayEmployees(data);
}

function displayEmployees(employees) {
    const table = document.getElementById("employeeTable");

    table.innerHTML = employees.map(emp => `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.company ? emp.company.name : "N/A"}</td>
            <td>
                <button onclick="editEmployee(${emp.id})">Edit</button>
                <button onclick="deleteEmployee(${emp.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}

async function addEmployee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Enter all fields");
        return;
    }

    const empData = { name, email };

    if (editId) {
        await fetch(`${API_URL}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empData)
        });

        alert("Employee updated");
        editId = null;

    } else {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empData)
        });

        alert("Employee added");
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    getEmployees();
}

async function editEmployee(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const emp = await response.json();

    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;

    editId = id;
}

async function deleteEmployee(id) {
    const confirmDelete = confirm("Delete this employee?");

    if (!confirmDelete) return;

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    alert("Employee deleted");
    getEmployees();
}

getEmployees();