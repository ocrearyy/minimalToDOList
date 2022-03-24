import {deleteItemListener} from './deleteATask.js';


export const addItems = [];
let index = -1;


// display new item to list 
const displayItem = () => {
    // get item 
    const getItem = addItems[index];

    //create element 
    const listHtml = `<div id="toDO-${index}" class="li-container"> 
    <li class="ul-li"><i class="fa-regular fa-square square"></i>${getItem.description}</li>
    <div class="icon">
    <i class="fa-solid fa-ellipsis-vertical li-icon"></i>
    </div>
  </div> `

    //append element to the list 
    const appendToDO = document.getElementById('ul-container');
    appendToDO.insertAdjacentHTML('beforeend', listHtml)
    const iconButton = appendToDO.querySelector('.icon');
    deleteItemListener(iconButton);
  };

//add new item to list 
export const addingList = () => {
  const description = document.getElementById('input-text').value;
  // adding object 
  index = index + 1;
  const toDO = {
      description: description, 
      status: false,
      index:  index,
  }
  
  addItems.push(toDO);

  displayItem()

}
 
export const addListListener = () => {
    const addItemsToList = document.querySelector('.plus-icon')
    addItemsToList.addEventListener('click', addingList);
};



