let myLibrary = [];

const nameInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const submitInput = document.querySelector("#submit");

const formInput = document.querySelector('form');
const tableInput = document.querySelector('table');
const  tableInput2 = document.querySelector('table');
const deleteAllButton = document.querySelector('button');

const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})

formInput.addEventListener('submit',()=>{
    onSubmit();
    clearForm();
});

tableInput.addEventListener('click',deleteRow);

deleteAllButton.addEventListener('click',deleteAll);

tableInput2.addEventListener('click',toggleStatus);

class Book{
    constructor(name,author,page,status){
        this.name = name;
        this.author = author;
        this.page = page;
        this.status = status;
    }
}

function onSubmit(){
    const book = new Book(
        nameInput.value,
        authorInput.value,
        pagesInput.value,
        statusInput.value
    );
    myLibrary.push(book);
    updateTable();
}

function clearForm(){
    nameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}

function updateTable(){
    const tBody = document.querySelector('tbody');
    tBody.textContent = '';
    for(let i = 0; i < myLibrary.length; i++){
        const newRow = document.createElement('tr');
        tBody.appendChild(newRow);
        const newNumber = document.createElement('td');
        newNumber.textContent = i + 1;
        tBody.appendChild(newNumber);
    
        const newTitle = document.createElement('td');
        newTitle.textContent = myLibrary[i].name;
        tBody.appendChild(newTitle);
    
        const newAuthor = document.createElement('td');
        newAuthor.textContent = myLibrary[i].author;
        tBody.appendChild(newAuthor);
    
        const newPages = document.createElement('td');
        newPages.textContent =  myLibrary[i].pages;
        tBody.appendChild(newPages);
    
        const newStatus = document.createElement('td');
        newStatus.innerHTML = `<button class = '${myLibrary[i].status}>${myLibrary[i].status}</button>'`;
        tBody.appendChild(newStatus);
    
        const deleteButton = document.createElement('td');
        deleteButton.innerHTML = `<button class = 'delete'>Delete</button>`;
        newRow.appendChild(deleteButton);
    }
}

function deleteRow(event){
    if(!event.target.classList.contains('delete')){
        return;
    }
    const button = event.target;
const bookIndex = 
Number(button.parentNode.parentNode.childNodes[0].innerHTML) - 1;
button.closest('tr').remove();
myLibrary.splice(bookIndex,1);
updateTable();

}

function deleteAll(event){
    myLibrary = [];
    updateTable();
}

function toggleStatus(event){
    if(event.target.classList.contains('Read')){
        const button = event.target;
        const bookIndex = 
        Number(button.parentNode.parentNode.childNodes[0].innerHTML) -1;
        myLibrary[bookIndex].status = 'Unread';
        updateTable();
    }else if(event.target.classList.contains('Unread')){
        const button = event.target;
        const bookIndex =
        Number(button.parentNode.parentNode.childNodes[0].innerHTML) - 1;
        myLibrary[bookIndex].status = 'Read';
        updateTable();
    }
}

