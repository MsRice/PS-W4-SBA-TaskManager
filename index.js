import { task_db} from './task_db.js'

const task_wrapper = document.querySelector('.tasks__tasks-section--wrapper')
console.log(task_db.task);

const taskHTML = task_db.task.map((ele) => {
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