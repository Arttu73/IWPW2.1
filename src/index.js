import "./styles.css";

const submitButton = document.getElementById("submit-data");
const table = document.getElementById("table1").getElementsByTagName("tbody")[0];
const emptyButton = document.getElementById("empty-table");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-address").value;
    const address = document.getElementById("input-address").value;
    const admin = document.getElementById("input-admin").checked;
    
    const newRow = table.insertRow();
    
    const usernameCell = newRow.insertCell();
    usernameCell.textContent = username;
    
    const emailCell = newRow.insertCell();
    emailCell.textContent = email;
    
    const addressCell = newRow.insertCell();
    addressCell.textContent = address;
    
    const adminCell = newRow.insertCell();
    adminCell.textContent = admin ? "X" : '-';

    
});

emptyButton.addEventListener("click", function(event) {
    event.preventDefault();
    
});