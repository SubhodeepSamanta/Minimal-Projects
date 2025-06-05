const todolist = JSON.parse(localStorage.getItem('todolist')) || [
  {
    name: "todo",
    date: "22-1-25",
  },
  {
    name: "todo",
    date: "22-1-25",
  },
];

const enterElement = document.querySelector(".js-enter");
enterElement.addEventListener("click", () => {
  const textElement = document.querySelector(".js-text");
  const dateElement = document.querySelector(".js-date");
  const name = textElement.value;
  const date = dateElement.value;
  if (name !== "" && date !== "") {
    todolist.push({
      name,
      date,
    });
  }
  textElement.value='';
  dateElement.value='';
  localStorage.setItem('todolist',JSON.stringify(todolist));
  render();
});

function render() {
  let html = "";
  const show = document.querySelector(".show");
  todolist.forEach((element, index) => {
    const { name, date } = element;
    const innerhtml = `
        <div>${name}</div>
        <div>${date}</div>
        <button class='delete-button js-delete'>delete</button>`;
    html += innerhtml;
  });
  show.innerHTML = html;

  const deleteButton = document.querySelectorAll('.js-delete');
  deleteButton.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        todolist.splice(index,1);
        render();
        localStorage.setItem('todolist',JSON.stringify(todolist));
    })
  })
}
render();
