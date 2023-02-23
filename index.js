const tbldiv = document.getElementById("tablediv")

const createTableHead = ()=>{
    let table = document.getElementById("table");

    let tableheadrow = document.createElement("tr");
    
    let fname = document.createElement("th");
    fname.innerHTML = "First Name"

    let lname = document.createElement("th");
    lname.innerHTML = "Last Name"

    let address = document.createElement("th");
    address.innerHTML = "Address"

    let pincode = document.createElement("th");
    pincode.innerHTML = "Pincode"

    let gender = document.createElement("th");
    gender.innerHTML = "Gender"

    let food = document.createElement("th");
    food.innerHTML = "Food"

    let state = document.createElement("th");
    state.innerHTML = "State"

    let country = document.createElement("th");
    country.innerHTML = "Country"


    tableheadrow.append(fname, lname, address, pincode, gender, food, state, country)
    table.append(tableheadrow)

}

const createRow = (obj)=>{
    console.log(obj);
    let table = document.getElementById("table");
    let row = document.createElement("tr")
    
    let rowdata1 = document.createElement("td")
    rowdata1.innerHTML = obj.firstName;

    let rowdata2 = document.createElement("td")
    rowdata2.innerHTML = obj.lastName;

    let rowdata3 = document.createElement("td")
    rowdata3.innerHTML = obj.address;

    let rowdata4 = document.createElement("td")
    rowdata4.innerHTML = obj.pincode;

    let rowdata5 = document.createElement("td")
    rowdata5.innerHTML = obj.selected_gender;

    let rowdata6 = document.createElement("td")
    rowdata6.innerHTML = obj.selected_food;

    let rowdata7 = document.createElement("td")
    rowdata7.innerHTML = obj.state;

    let rowdata8 = document.createElement("td")
    rowdata8.innerHTML = obj.country;

    

    row.append(rowdata1, rowdata2, rowdata3, rowdata4, rowdata5, rowdata6, rowdata7, rowdata8);
    table.append(row)


}


document.getElementById("submitbtn").addEventListener("click", (e)=>{
    e.preventDefault()
    let firstName = document.getElementById("fname").value
    let lastName = document.getElementById("lname").value
    let address = document.getElementById("address").value
    let pincode = document.getElementById("pincode").value
    console.log(pincode);
    let selected_gender = null;
    let selected_food = [];
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value

    
    //getting the gender value
    let gender = document.getElementsByName("gender")
    for(elem of gender){
        if(elem.checked){
            selected_gender = elem.value
        }
    }
    
    // getting the food values 
    let food = document.getElementsByName("food")

    for(elem of food){
        if(elem.checked){
            selected_food.push(elem.value)
        }
    }

    
    let obj = {
        firstName, lastName, address, pincode, selected_gender, selected_food, state, country
    }
    console.log(obj);
    
    if(selected_food.length < 2){
        alert("select atleast 2 food")
    }else{

        createTableHead();
        createRow(obj)  
        document.getElementById("form").reset()
    }
  
    
})




