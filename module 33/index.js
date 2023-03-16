function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (res => res.json())
    .then (data => displayData(data))
}

function displayData(data){
    for(const user of data){
      console.log(user.email);
    }
    
}