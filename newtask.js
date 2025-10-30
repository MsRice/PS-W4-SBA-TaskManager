import {category_db} from './task_db.js'
const perscholas_backdrop = '../images/PSLogo.png'
const form = document.getElementById('new-task');
const cateogory_dropdown = document.getElementById('cateogory_dropdown');

const cateogory_dropdownHTML = category_db.categories.map((el) => {
    return `<option value="${el.category_name}">${el.category_name}</option>`
}).join("");
cateogory_dropdown.innerHTML = cateogory_dropdownHTML

const task_db_string = localStorage.getItem("task_db")
const task_db = JSON.parse(task_db_string)


form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const title = document.getElementById('title').value; 
    let due_date = document.getElementById('due-date').value; 
    const due_time = document.getElementById('due-time').value; 
    const description = document.getElementById('description').value; 
    let cateogory = document.getElementById('cateogory_dropdown').value; 
    let category_backdrop = perscholas_backdrop
    let status = "ip"
    for(let i = 0 ; i < category_db.categories.length ; i++){
        if(category_db.categories[i].category_name == cateogory){
            category_backdrop = category_db.categories[i].category_img_url
        }
        
    }
    const now = new Date();
    due_date = new Date(due_date)
    if(now > due_date){
        status = "od"
    }
  
    task_db.push({
        "id" : task_db.length + 1,
        "title" : title,
        "description": description,
        "due_date" : due_date,
        "status" : status,
        "category": {
            "category_name": cateogory,
            "category_img_url": category_backdrop
        }
    })
    localStorage.setItem( 'task_db' , JSON.stringify(task_db))
    
    console.log("22" , localStorage.getItem("task_db"))
   
    
   

});

