// 1. 사용자가 새 작업을 입력한다
// 2. 추가버튼을 클릭하면 추가된다

//자바스크립트는 카멜기법
let taskInput = document.getElementById("task_input")
let addBtn = document.getElementById("add_btn")

console.log(taskInput,addBtn)

//작업리스트를 보관해야하니까 배열을 만든다.
let taskList = []

//사용자가 입력창에 새 작업을 입력 후 추가 버튼을 누르면 이벤트가 발생해야 한다. (아래 리스트에 들어가게끔)
addBtn.addEventListener('click',()=>{
    console.log("클릭")
    taskList.push(taskInput.value)
    console.log(taskList)
    listView()
})

//콘솔창에서는 배열에 내가 입력한 값이 들어가는데 ui에는 나타나지 않으니까 나타나게끔 만들어야 한다.
//ui디자인을 보여주는 함수를 만들자
listView = () =>{
    let result='';
    for(let i=0;i<taskList.length;i++){
    // 누적하는 변수들은 처음에 초기화시키는 것이 좋다.
    // 값이 길어질 때에는 하나의 변수에 넣어서 변수만 불러와서 쓰기 
    result+= `<div class="task_table">
    <div class="item">
      ${taskList[i]}
    </div>
    <div>
        <button type="button" id="complete">COMPLETE</button>
        <button type="button" id="delete">DELETE</button>
    </div>

</div>`

    document.getElementById("task_table_wrap").innerHTML =result
    }
}



