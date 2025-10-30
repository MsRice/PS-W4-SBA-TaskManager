const perscholas_backdrop = '../images/PSLogo.png'
const leisure_backdrop = '../images/leisure_backdrop.jpg'
const school_backdrop = '../images/gt.jpg'
export const category_db = {
    categories: [
        {
            "category_name": "Per Scholas",
            "category_img_url": perscholas_backdrop
        },
        {
            "category_name": "Leisure",
            "category_img_url": leisure_backdrop
        },
        {
            "category_name": "School",
            "category_img_url": school_backdrop
        }
    ]
}


export const task_db = {
    "task":[
        {
            "id":1,
            "title" : "SBA: Task Manager",
            "description": "",
            "due_date" : "2025-10-28",
            "status" : "ip",
            "category": {
                "category_name": "Per Scholas",
                "category_img_url": perscholas_backdrop
            }
        },
        {

            "id":2,
            "title" : "KBA",
            "description": "",
            "due_date" : "2025-10-28",
            "status" : "ip",
            "category": category_db.categories[0]
        }

    ]

    } 



