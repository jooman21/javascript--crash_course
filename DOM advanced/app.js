const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add-books
const addForm = forms['add-book'];
addForm.addEventListener('Add',function(e){
    e.parentDefault();
});

// creating elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const bookName = document.createElement('span');
const deletebtn = document.createElement('span');

// add classes
bookName.classList.add('name')
deletebtn.className.classList('delete');

// append to DOM
li.appendChild(bookName);
li.appendChild(deletebtn);
list.appendChild(li);