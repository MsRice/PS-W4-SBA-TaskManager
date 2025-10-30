import {category_db} from './task_db.js'
const perscholas_backdrop = '../images/PSLogo.png'
const form = document.getElementById('new-task');
const cateogory_dropdown = document.getElementById('cateogory_dropdown');

const cateogory_dropdownHTML = category_db.categories.map((el) => {
    return `<option value="${el.category_name}">${el.category_name}</option>`
})
console.log( category_db)
cateogory_dropdown.innerHTML = cateogory_dropdownHTML

const task_db_string = localStorage.getItem("task_db")
const task_db = JSON.parse(task_db_string)

form.addEventListener('submit', function(event) {
    
    const title = document.getElementById('title').value; 
    const due_date = document.getElementById('due-date').value; 
    const due_time = document.getElementById('due-time').value; 
    const description = document.getElementById('description').value; 
    const cateogory = document.getElementById('cateogory').value; 
    

    task_db.push({
        "title" : title,
        "description": description,
        "due_date" : due_date,
        "status" : "In Progress",
        "category": {
            "category_name": cateogory,
            "category_img_url": perscholas_backdrop
        }
    })
    localStorage.setItem( 'task_db' , JSON.stringify(task_db))
    
    console.log("22" , localStorage.getItem("task_db"))
    event.preventDefault();
    // localStorage_task_db = task_db
    // console.log(localStorage_task_db);
    // localStorage.setItem( 'task_db' , JSON.stringify(localStorage_task_db ))
    // console.log(localStorage.getItem("task_db"));
    
   

});

function newCateogory(){

}