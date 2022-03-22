import './style.css';

console.log('Hello webpack!');

const toDoTasks = [
  {
    description: 'wash the dishes',
    completed: 'true',
    index: 1,
  },
  {
    description: 'complete To Do List project',
    completed: 'false',
    index: 2,
  },
];

const toDoListContainer = document.getElementById('to-do-list-container');

for (let i = 0; i < toDoTasks.length; i += 1) {
  toDoListContainer.innerHTML = `
    <div id="header-container">
        <h3 id="header-text">Today's To Do</h3>
        <i id="header-icon" class="fa-solid fa-arrows-rotate"></i>
        </div>
        <div id="paragraph-container">
            <p id="paragraph-text">Add to your list...</p>
            <i id="paragraph-icon" class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        
      <ul id="ul-container">  
          <div class="li-container"> 
            <li class="ul-li"><i class="fa-regular fa-square square"></i>${toDoTasks[0].description}</li>
            <i class="fa-solid fa-ellipsis-vertical li-icon"></i>
          </div> 
          <div class="li-container"> 
            <li class="ul-li"><i class="fa-regular fa-square square"></i>${toDoTasks[1].description}</li>
            <i class="fa-solid fa-ellipsis-vertical li-icon"></i>
          </div>
      </ul>
    <div>
        <p id="final-paragraph-text">Clear all completed</p>
    </div>`;
}
