/*
    Constants used for the pizza creation process.
*/
const SIZE_OPTIONS = ['Small', 'Medium', 'Large', 'X-Large'];
const TOPPING_OPTIONS = ['Pepperoni', 'Mushrooms', 'Spinach', 'Peppers', 'Olives', 'Brussel'];
const CRUST_OPTIONS = ['Thin', 'Thick', 'Full', 'Stuffed'];
const DAY_OPTIONS = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const CUT_OPTIONS = ['Square', 'Circle', 'Triangle'];

function addOptions(options, id) {
    const selectElement = document.getElementById(id);

    /*
        Loop each one we want to add
    */
    options.forEach(option => {
        const elem = document.createElement('option');
        elem.value = option;
        elem.textContent = option;
        selectElement.appendChild(elem);
    });
}

/*
    Add
*/
addOptions(SIZE_OPTIONS, 'size');
addOptions(CRUST_OPTIONS, 'crust');
addOptions(DAY_OPTIONS, 'day');
addOptions(CUT_OPTIONS, 'cut');

const toppings = document.getElementById('toppings');
TOPPING_OPTIONS.forEach(topping => {
    /*
        Option selection
    */
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = topping;
    checkbox.value = topping;
    checkbox.name = 'toppings';

    /*
        Option label
    */
    const label = document.createElement('label');
    label.htmlFor = topping;
    label.textContent = topping;

    /*
        Append to page, also line break for easier reading
    */
    toppings.appendChild(checkbox);
    toppings.appendChild(label);
    toppings.appendChild(document.createElement('br'));
});

/*
    Pizza class
*/
class Pizza {
    constructor(size, crust, toppings, quantity, cut, day, chefInstructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
        this.cut = cut;
        this.day = day;
        this.chefInstructions = chefInstructions;
    }

    get() {
        return `Cut: ${this.cut}, Day: ${this.day}, Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(', ')}, Quantity: ${this.quantity}, Chef Instructions: ${this.chefInstructions}`;
    }
}

/*
    Event for when is submitted
*/
document.getElementById('pizza-form').addEventListener('submit', function(event) {
    event.preventDefault();

    /*
        Add student ID
    */
    document.getElementById('student').innerText = 'ID: 1227490, Name: Matthew Contaldi';

    /*
        Make sure all filled out
    */
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const quantity = document.getElementById('quantity').value;
    const cut = document.getElementById('cut').value;
    const day = document.getElementById('day').value;
    const chefInstructions = document.getElementById('chef-instructions').value;

    if (!size || !crust || !quantity || !cut || !day) {
        alert('Not filled out!');
        return;
    }

    const chosenTops = [];
    const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
    checkboxes.forEach(checkbox => {
        chosenTops.push(checkbox.value);
    });

    /*
        Create and push (more than6 vars!)
    */
    const pizza = new Pizza(size, crust, chosenTops, quantity, cut, day, chefInstructions);
    document.getElementById('pizza').innerText = pizza.get();
});