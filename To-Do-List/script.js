document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task');
  const tasklist = document.getElementById('task-list');
  const emptyImage = document.querySelector('.empty-img');
  const todosContainer= document.querySelector('.todos-container');

  const toggleEmptyState = () => {
    emptyImage.style.display = tasklist.children.length === 0 ? 'block' : 'none';
    todosContainer.style.width = tasklist.Children.length >0 ? "100%" : "50%"
  };

  const addTask = (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span>${taskText}</span>
      <div class="task-buttons">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
     const checkbox = li.querySelector('.checkbox');
    const editbtn = li.querySelector('.edit-btn');
    editbtn.addEventListener('click',()=>{
        if(!checkbox.checked){
            taskInput.value=li.querySelector('span').textContent;
            li.remove();
            toggleEmptyState();
        }
    })

    li.querySelector('.delete-btn').addEventListener('click',()=>{
        li.remove();
        toggleEmptyState();
    })

    tasklist.appendChild(li);
    taskInput.value = '';
    toggleEmptyState();
  };

  addTaskBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(e);
    }
  });

  toggleEmptyState();
});
