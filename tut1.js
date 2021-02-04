console.log("This is tut 1 js");
class Details {
    constructor(name, number, major, city) {
        this.name = name;
        this.number = number;
        this.major = major;
        this.city = city;
    }
}
class Display {
    add(details) {
        console.log("adding to ui");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
        <tr>
        <th scope="row">${details.number}</th>
        <td>${details.name}</td>
        <td>${details.major}</td>
        <td>${details.city}</td>
        </tr>`
        tableBody.innerHTML += uiString;

    }
    clear() {
        let databaseForm = document.getElementById('databaseForm');
        databaseForm.reset();

    }


}


let databaseForm = document.getElementById('databaseForm');
databaseForm.addEventListener('submit', databaseFormSubmit);

function databaseFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;

    let major;
    let ai = document.getElementById('ai');
    let iot = document.getElementById('iot');
    let ds = document.getElementById('ds');

    if (ai.checked) {
        major = ai.value;
    }
    else if (iot.checked) {
        major = iot.value;
    }
    else if (ds.checked) {
        major = ds.value;
    }
    let city = document.getElementById('city').value;

    let details = new Details(name, number, major, city);
    console.log(details);

    let display = new Display();
    display.add(details);
    display.clear();

    // if (display.validate(book)) {

    //     
    //     display.show('success', 'Your book has been successfully added')
    // }
    // else {
    //     // Show error to the user
    //     display.show('danger', 'Sorry you cannot add this book');
    // }
    e.preventDefault();


}