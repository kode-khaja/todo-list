import "./styles.css"
import { Task } from "./pageload-tasks"
import { State } from "./all-projects"
import { renderLists, renderTasks } from "./render-save"
import { clearTasks } from "./render-save"
// const LOCAL_STORAGE_LIST_KEY = 'task.list'
// const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'

const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')

const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const tasksContainer = document.querySelector('[data-tasks]')
const tasksForm = document.querySelector('[data-new-task-form]')
const addTasks = document.querySelector('[data-add-task-button]')
const dialog = document.querySelector('.task-dialog')
const cancelTasks = document.querySelector('.cancel-this-task')
const deleteTasks = document.querySelector('[data-clear-completed-tasks-button]')
export const taskTemplate = document.getElementById('task-template')



State.load()

const clearCompleteTasksButton = document.querySelector('.btn-clear')
clearCompleteTasksButton.addEventListener('click', e => {
     const selectedListId = State.getSelectedListId()
     const lists = State.getLists()

     const selectedList = lists.find(list => list.id === selectedListId)
     selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
     renderApp()
 })


function renderApp() {
    
    const lists = State.getLists()
    console.log("Lists:", lists);

    const selectedListId = State.getSelectedListId()
    console.log("Selected List ID:", selectedListId);

    const selectedList = lists.find(list => list.id === selectedListId)
    console.log("Selected List:", selectedList);

    if (selectedList == null) {
        listDisplayContainer.style.display = 'none'
      } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name;
      }

    renderLists(lists, selectedListId)
    renderTasks(selectedList)
    }

    
listsContainer.addEventListener("click", (e) => {
     if (e.target.tagName.toLowerCase() === "li") {
     const newSelectedListId = e.target.dataset.listId;
     State.setSelectedListId(newSelectedListId);
     renderApp();
    }
    });


newListForm.addEventListener('submit', e => {
        const newList = {
            id: Date.now().toString(),
            name: newListInput.value,
            tasks: []
        };
        State.lists.push(newList);
        State.setLists(State.lists);
        renderApp()
})


tasksForm.addEventListener('submit', e => {
        e.preventDefault()
    
         const taskTitle = document.querySelector('#task-title').value
         const taskDescription = document.querySelector('#task-desc').value
         const taskDue = document.querySelector('#task-due').value
         const taskPriority = document.querySelector('#task-priority').value
    
         const newTask = new Task(taskTitle, taskDescription, taskDue, taskPriority)
    
         try {
            const updatedLists = newTask.addTasksToList(State.getLists(), State.getSelectedListId())
            State.setLists(updatedLists);
            dialog.close();
            renderApp();
          } catch (error) {
                console.error(error.message)
             }
            })
            

addTasks.addEventListener('click', () => {
    console.log('dialog opens!');
    tasksForm.reset()
 dialog.showModal();
})

cancelTasks.addEventListener('click', (e) => {
    console.log('dialog close!');
    e.preventDefault()
    dialog.close()
})

deleteListButton.addEventListener('click', e => {
    const lists = State.getLists()
    const selectedListId = State.getSelectedListId()

    const updatedLists = lists.filter(list => list.id !== selectedListId)
   
    State.setLists(updatedLists)
    State.setSelectedListId(null)
    renderApp()
  })


  
  dialog.addEventListener('click', e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })
  
  renderApp()
