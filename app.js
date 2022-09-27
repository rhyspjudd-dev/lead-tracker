
let myLeads = []
console.log(localStorage.getItem("myLeads"))

const button = document.querySelector('#input-btn')
const input = document.querySelector('#input-el')
const ul = document.querySelector('#ul-el')

// Saves input value to empty array
function saveLead() {
    myLeads.push(input.value);
    renderLead()
    clearLead()
    storeLead()
}

// Displays input value in li
function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>
        `
    }
    ul.innerHTML = listItems;
}

// Clears the input
function clearLead() {
    input.value = ""
}

// Store array input
function storeLead() {
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    storedLeads = JSON.parse(localStorage.getItem("myLeads"))
    console.log(localStorage.getItem("myLeads"))
}

button.addEventListener('click', saveLead)