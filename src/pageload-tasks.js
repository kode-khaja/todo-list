import { State } from "./all-projects"


export class Task {
      constructor (title, description, dueDate, priority) {
            this.id = Date.now().toString(),
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.complete = false
         }


         //  log() {
         //       return (`Task Title: ${this.title}   Task Description: ${this.description}   Task Due: ${this.dueDate}   
         //       Task Priority: ${this.priority}`)
                            
         //        }

           addTasksToList (lists, selectedListId) {
                   const selectedList = lists.find(list => list.id === selectedListId)
                   console.log("Selected List Before Adding Task:", selectedList);

                   if (selectedList) {
                      selectedList.tasks.push(this)
                      console.log("Selected List After Adding Task:", selectedList);
                      return lists
                   } else {
                      throw new Error('Error! No selected list found!');
                      
                   }
                   }
      }
      