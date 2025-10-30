import {task_db} from './task_db.js'
let localStorage_task_db = task_db.task 
const task_wrapper = document.querySelector('.tasks__tasks-section--wrapper')
let task_dbJSON = ''

if (localStorage.getItem('task_db') == null) {
    localStorage.setItem( 'task_db' , JSON.stringify(localStorage_task_db ))
    
    
    const task_dber  = localStorage.getItem("task_db")
    
    task_dbJSON = JSON.parse(task_dber)
    
}else{
    const task_dber  = localStorage.getItem("task_db")
    task_dbJSON = JSON.parse(task_dber)

}

const task_stat = document.getElementById('tasks__tasks-section--wrapper');
task_stat.addEventListener('submit', function(event) {
    event.preventDefault()
    const stat = event.submitter.value
    const statList = stat.split('-')
    for (let i = 0; i < task_dbJSON.length; i++) {
        if(task_dbJSON[i].id == statList[0]){
            if(task_dbJSON[i].status !== statList[1] ){

                task_dbJSON[i].status = statList[1] 
                
            }

        }
        
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
            <div class="task-status--wrapper">
                <div class="task-status--wrapper" id="task-status-${ele.id}--wrapper">
                    <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                    <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                </div>
                
            </div>
        </div>
`
})


task_wrapper.innerHTML = taskHTML
})

const filter_task = document.getElementById('filter-task') 
filter_task.addEventListener('change', function(){
    const filter = event.target.value
    if(filter ==='A_TO_Z'){
        task_dbJSON.sort((b,a) => b.title.localeCompare(a.title))
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
            <div class="task-status--wrapper">
                <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                    <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                    <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                </div>
                <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                    <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                    <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                </div>
                
            </div>
        </div>
`
})


task_wrapper.innerHTML = taskHTML
        
    }
    if(filter ==='Z_TO_A'){
        task_dbJSON.sort((a ,b) => b.title.localeCompare(a.title))
        
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
                    <div class="task-status--wrapper">
                        <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        
                    </div>
                </div>
        `
        })


        task_wrapper.innerHTML = taskHTML
    }
    if(filter ==='DATE_DUE'){
        task_dbJSON.sort((b, a) => b.due_date.localeCompare(a.due_date))
        console.log(task_dbJSON)
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
                    <div class="task-status--wrapper">
                        <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        
                    </div>
                </div>
        `
        })
    
    
        task_wrapper.innerHTML = taskHTML
    }
    if(filter ==='COMPLETE'){
        const taskHTMLl = task_dbJSON.filter((st) => st.status === 'c')
           const taskHTML = taskHTMLl.map((ele) => {
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
                    <div class="task-status--wrapper">
                        <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        
                    </div>
                </div>
        `
        })
    
        
        task_wrapper.innerHTML = taskHTML
    }
    if(filter ==='NOT_COMPLETE'){
        const taskHTMLl = task_dbJSON.filter((st) => st.status !== 'c')
           const taskHTML = taskHTMLl.map((ele) => {
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
                    <div class="task-status--wrapper">
                        <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                            <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                            <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                        </div>
                        
                    </div>
                </div>
        `
        })
    
        
        task_wrapper.innerHTML = taskHTML
    }
})

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
            <div class="task-status--wrapper">
                <div class="task-status--wrapper overdue-${ele.status}-hide" id="task-status-${ele.id}--wrapper">
                    <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">Overdue</button>
                    <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                </div>
                <div class="task-status--wrapper overdue-${ele.status}-show" id="task-status-${ele.id}--wrapper">
                    <button class="status-button in-progress-btn-${ele.status}" type="submit" value="${ele.id}-ip">In Progress</button>
                    <button class="status-button completed-btn-${ele.status}" type="submit" value="${ele.id}-c">Completed</button>
                </div>
                
            </div>
        </div>
`
})


task_wrapper.innerHTML = taskHTML
