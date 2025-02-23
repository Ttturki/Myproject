// Dropdown options
const options = {
    names: ["Ahmed", "Abdullah", "Saad"],
    files: ["F001", "F002", "F003"],
    procedures: ["Colonoscopy", "EGD", "Endoscopy", "ERCP"],
    physicians: ["Dr Shakir", "Dr Ibrahim", "Dr Thamer"],
    nurses: ["Fatima", "Muneerah", "Nany"],
    locations: ["receiving area", "procedure room", "post procedure area", "discharge"]
};

// Sample patient data
const patients = [
    {
        name: "Ahmed",
        file: "F001",
        arrivalTime: "2025-02-20T08:30",
        procedure: "Colonoscopy",
        physician: "Dr Shakir",
        labDate: "2025-02-18",
        nurse: "Fatima",
        location: "receiving area"
    },
    {
        name: "Abdullah",
        file: "F002",
        arrivalTime: "2025-02-20T09:15",
        procedure: "EGD",
        physician: "Dr Ibrahim",
        labDate: "2025-02-19",
        nurse: "Muneerah",
        location: "procedure room"
    },
    {
        name: "Saad",
        file: "F003",
        arrivalTime: "2025-02-20T10:00",
        procedure: "Endoscopy",
        physician: "Dr Thamer",
        labDate: "2025-02-17",
        nurse: "Nany",
        location: "post procedure area"
    }
];

function createPatientRow(patient, index) {
    const row = document.createElement("tr");
    row.className = `status-${patient.location.replace(" ", "-")}`;

    row.innerHTML = `
        <td>
            <select onchange="updateField(${index}, 'name', this.value)">
                ${options.names
                    .map(
                        (name) =>
                            `<option value="${name}" ${
                                name === patient.name ? "selected" : ""
                            }>${name}</option>`
                    )
                    .join("")}
            </select>
        </td>
        <td>
            <select onchange="updateField(${index}, 'file', this.value)">
                ${options.files
                    .map(
                        (file) =>
                            `<option value="${file}" ${
                                file === patient.file ? "selected" : ""
                            }>${file}</option>`
                    )
                    .join("")}
            </select>
        </td>
        <td>
            <input type="datetime-local" 
                   value="${patient.arrivalTime}"
                   onchange="updateField(${index}, 'arrivalTime', this.value)">
        </td>
        <td>
            <select onchange="updateField(${index}, 'procedure', this.value)">
                ${options.procedures
                    .map(
                        (proc) =>
                            `<option value="${proc}" ${
                                proc === patient.procedure ? "selected" : ""
                            }>${proc}</option>`
                    )
                    .join("")}
            </select>
        </td>
        <td>
            <select onchange="updateField(${index}, 'physician', this.value)">
                ${options.physicians
                    .map(
                        (doc) =>
                            `<option value="${doc}" ${
                                doc === patient.physician ? "selected" : ""
                            }>${doc}</option>`
                    )
                    .join("")}
            </select>
        </td>
        <td>
            <select onchange="updateField(${index}, 'nurse', this.value)">
                ${options.nurses
                    .map(
                        (nurse) =>
                            `<option value="${nurse}" ${
                                nurse === patient.nurse ? "selected" : ""
                            }>${nurse}</option>`
                    )
                    .join("")}
            </select>
        </td>
        <td>
            <input type="date" 
                   value="${patient.labDate}"
                   onchange="updateField(${index}, 'labDate', this.value)">
        </td>
        <td>
            <select onchange="updateField(${index}, 'location', this.value)">
                ${options.locations
                    .map(
                        (loc) =>
                            `<option value="${loc}" ${
                                loc === patient.location ? "selected" : ""
                            }>${
                                loc.charAt(0).toUpperCase() + loc.slice(1)
                            }</option>`
                    )
                    .join("")}
            </select>
        </td>
    `;

    return row;
}

function updateField(index, field, value) {
    patients[index][field] = value;
    refreshDashboard();
}

function refreshDashboard() {
    const tbody = document.getElementById("patientBody");
    tbody.innerHTML = "";
    patients.forEach((patient, index) => {
        tbody.appendChild(createPatientRow(patient, index));
    });
}

// Initial render
refreshDashboard();