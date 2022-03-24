import { addListListener } from "./addNewTask";


export const deleteItemListener = (element) => { 
    // const iconContainer = document.querySelector('.icon');
     element.addEventListener('click', () => {
        const binIcon = element.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    }), 
    binIcon.addEventListener('click', () => {
        // when i click binicon it should delete that list 
        console.log('Hellow world!!!')
    });;
    
};
