
import { Task } from "./pageload-tasks"
import { State } from "./all-projects"
import { taskTemplate } from "."

export function renderLists(lists, selectedListId) {
    const listsContainer = document.querySelector('[data-lists]')
    clearElements(listsContainer)
        lists.forEach(list => {
            const listElement = document.createElement('li')
            listElement.classList.add('list-name')
            listElement.innerText = list.name
            listElement.dataset.listId = list.id
            if (list.id === selectedListId) 
            {
            listElement.classList.add('active-list')
            }
            listsContainer.appendChild(listElement)
        })
    }
    


    export function renderTasks(selectedList) {
        const tasksContainer = document.querySelector('[data-tasks]')
        clearElements(tasksContainer)
        
        if (!selectedList) {
            tasksContainer.innerHTML = null
            return;
        }


        selectedList.tasks.forEach( task => {
           const taskElement = document.createElement('div')
           taskElement.classList.add('task')


           taskElement.innerHTML = `<input type="checkbox" class="custom-checkbox" id="task-${task.id}" ${task.complete ? 'checked' : ''}>
           <label for="task-${task.id}"></label>
           <h3>${task.title}</h3>
           <p>${task.description}</p>
           <p><strong>Task Due: </strong>${task.dueDate}</p>
           <p><strong>Task Priority: </strong>${task.priority}</p>
       `
       const checkbox = taskElement.querySelector(`[id="task-${task.id}"]`);
       checkbox.addEventListener('change', () => {
           task.complete = checkbox.checked;

       })
       tasksContainer.appendChild(taskElement)
        }
    )
    }


    function clearElements(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild)
        }

    }



