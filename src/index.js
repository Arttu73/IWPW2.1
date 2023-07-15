import "./styles.css";

if(document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        initializeCode();
    })
}


function initializeCode() {
    const submitButton = document.getElementById("submit-data");
    const tableBody = document.querySelector('#table1 tbody');
    const emptyButton = document.getElementById("empty-table");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("input-username").value;
        const email = document.getElementById("input-email").value;
        const address = document.getElementById("input-address").value;
        const admin = document.getElementById("input-admin").checked;
        const file = document.getElementById("input-image").files[0];

        let imgSrc = "";
        if (file) {
            imgSrc = URL.createObjectURL(file);
        }
        const img = document.createElement("img");
        img.src = imgSrc;
        img.height = 64;
        img.width = 64;

        let existingUsername = false;
        let existingRow;

        for (let row of tableBody.rows) {
            if (row.cells[0].textContent === username) {
                existingUsername = true;
                existingRow = row;
                break;
            }
        }
        
        if (existingUsername) {
            existingRow.cells[1].textContent = email
            existingRow.cells[2].textContent = address;
            existingRow.cells[3].textContent = admin ? "X" : '-';
            existingRow.cells[4].innerHTML = "";
            existingRow.cells[4].apppendChild(img);
        } else {
        const newRow = tableBody.insertRow();
        
        const usernameCell = newRow.insertCell();
        usernameCell.textContent = username;
        
        const emailCell = newRow.insertCell();
        emailCell.textContent = email;
        
        const addressCell = newRow.insertCell();
        addressCell.textContent = address;
        
        const adminCell = newRow.insertCell();
        adminCell.textContent = admin ? "X" : '-';

        const imgCell = newRow.insertCell();
        imgCell.apppendChild(img);
        }
        
    });

    emptyButton.addEventListener("click", function(event) {
        event.preventDefault();
        while (tableBody.firstChild) {
            tableBody.firstChild.remove();
        }
        
    });


};