const perscholas_backdrop = '../images/PSLogo.png'
export const category_db = {
    categories: [
        {
            "category_name": "Per Scholas",
            "category_img_url": perscholas_backdrop
        }
    ]
}


export const task_db = {
    "task":[
        {

            "title" : "SBA: Task Manager",
            "description": "",
            "due_date" : "2025-10-28",
            "status" : "In Progress",
            "category": {
                "category_name": "Per Scholas",
                "category_img_url": perscholas_backdrop
            }
        },
        {


            "title" : "KBA",
            "description": "",
            "due_date" : "2025-10-28",
            "status" : "In Progress",
            "category": category_db.categories[0]
        }

    ]

    } 



