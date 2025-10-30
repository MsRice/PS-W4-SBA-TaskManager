import {task_db} from './task_db.js'
let localStorage_task_db = task_db.task 
const task_wrapper = document.querySelector('.tasks__tasks-section--wrapper')
let task_dbJSON = ''

if (localStorage.getItem('task_db') == null) {
    localStorage.setItem( 'task_db' , JSON.stringify(localStorage_task_db ))
    
    
    const task_dber  = localStorage.getItem("task_db")
    console.log(JSON.parse(task_dber))
    task_dbJSON = JSON.parse(task_dber)
    
}else{
    const task_dber  = localStorage.getItem("task_db")
    task_dbJSON = JSON.parse(task_dber)
    console.log(localStorage.getItem('task_db') )
}

const taskHTML = task_dbJSON.map((ele) => {
    return `
        <div class="task__section--wrapper">
            <div class="task__main--wrapper">    
                <div class="task__main--bg" style="background-image: url('${ele.category.category_img_url}')";>
                    <div class="task__title--card">
                        <h3 class="task__title">${ele.title}</h3>
                        <h4>Due: ${ele.due_date}</h4>
                    </div>
                </div>
            </div>
            <div class="task-status--wrapper">${ele.status}</div>
        </div>
`
})


task_wrapper.innerHTML = taskHTML