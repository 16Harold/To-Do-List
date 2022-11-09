// to set button date and time
let timeBtn = document.querySelector("#timeDate");
 timeBtn.addEventListener("click", function(){
   document.querySelector("#timeDate").innerHTML = Date();
 });

//  create new input
let addListBtn = document.querySelector("#addBtn");
    addListBtn.addEventListener("click", addList);

 function addList(){
  let list = document.querySelector("#addToDo").value;
  let listTodo = document.createElement("div")
      
  let listInput = document.createElement("input");
      listInput.type = "text";
      listInput.setAttribute ("disabled", "");
      listInput.value = list;
      listInput.defaultValue = list;

      // edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";

    inputList.appendChild(listTodo);
    listTodo.appendChild(listInput);
    listTodo.appendChild(editBtn);

    editBtn.addEventListener("click", editInput);

    function editInput () {
      listInput.removeAttribute("disabled", true);
      editBtn.setAttribute("disabled", true)
      let saveBtn = document.createElement("button");
          saveBtn.textContent = "Save"
          saveBtn.classList = "saveBtn"
          // append saveBtn
          listTodo.appendChild(saveBtn);
          saveBtn.addEventListener("click", saveValue);    
      
      function saveValue(){
          let text = "Are you sure you want to save Changes?"
          if (confirm(text) == true){
              let newValue = listInput.value
              listInput.defaultValue = newValue
              console.log(newValue);
              listInput.setAttribute("disabled", true);
              listTodo.removeChild(saveBtn);
              text = "Saved successfully"
          } else{
              text = "Cancelled";
              listInput.setAttribute("disabled", true);
              listInput.value = listInput.defaultValue;
              listTodo.removeChild(saveBtn);
          }
          alert(text);
          editBtn.removeAttribute("disabled", true)
    }

 }   
} 
