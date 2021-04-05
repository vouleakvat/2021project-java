function setItem(event) {
    const item = document.querySelector('#add-task');
    if (item.value === "") return confirm("Cannot empty");

    // create new li 
    const li = document.createElement('li');
    // crate span task name
    const spanTaskName = document.createElement('span');
    spanTaskName.classList.add('task');
    spanTaskName.textContent = item.value;
    
    // create span delete
    const spanDelete = document.createElement('span');
    spanDelete.classList.add('delete');
    spanDelete.textContent = "delete";

    // add two span tage to li
    li.appendChild(spanTaskName);
    li.appendChild(spanDelete);

    // add li to ul
    ul.appendChild(li);


}


function deleteItem(event) {
    if (event.target.className === "delete") {
        event.target.parentElement.remove();
    }
}
const  btnAdd = document.querySelector('button');
const ul = document.querySelector('ul');
const search = document.querySelector('#searchId');

btnAdd.addEventListener('click', setItem);
ul.addEventListener('click', deleteItem);

search.addEventListener('keyup',function(e) {
    let text = search.value.toLowerCase();
    let items = document.querySelectorAll('li');
    for (let item of items) {
        let title = item.firstElementChild.textContent.toLowerCase();
        if (title.indexOf(text) === -1) {
            item.style.display = "none";
        }else {
            item.style.display = "block";
        }
    }
});