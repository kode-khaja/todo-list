Pseudo-code for the Project:

We need a 'your tasks" which will be on the homescreen, a "your projects" tab and an "add tasks" tab

- Step 1 (Your Tasks)
Start with homepage. What will it contain. Hmmm, maybe start off by listing your upcoming tasks.

On page load, have a few "tasks" aka instances of an object module populate your homepage.
meaning, push some tasks inside a project which all takes place in a separate module, then export that array?


- Step 2 (Your Projects)
On click, type of projects will populate the screen, and tasks related to their respective projects will become their children

- Step 3 (add tasks)
THis is just like your library project, because the next step would be to add a task. And have it populate in the content area, next to my other tasks.

On click, a dialog modal will pop up or maybe a form on the page itself? I think its better to have a modal for browser but better scalability with a direct form. idk we'll see.


project hierarchy:
- homepage lists tasks (have an array of homescreen 'tasks', this wont be project specific)
- adding tasks thru the add tasks tab get pushed inside a specified project
- projects tab displays projects with specific tasks(arrays of different projects)



chatgpt pseudocode - 
first it initialized an app object that will control the whole flow

then it defined its data structures, tasks, projects & project manager

i need to have a task object and a project object and a manager object later

if i click a list name - if theres tasks in it, it creates a div to populate them... 

selectedList.addEventListener('click', e => {
    const taskContainer = document.querySelector('.task')
    taskContainer.setAttribute('task-index', index)
    taskContainer.innerHTML =  `<p>Task Title </p><h3>${task.title}</h3><p>Description ${task.description}</p><p><strong>Task Due </strong>${task.dueDate}</p><p><strong>Task Priority </strong><span class="status">${task.priority}</span><input type="checkbox" class="read-status" ${task.priorith === "Read" ? 'checked' : ''} /></p>`
})