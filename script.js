function saveData() {
    const nameInput = document.getElementById("Name");
    const surnameInput = document.getElementById("Surname");
    const user = {
        name: nameInput.value,
        surname: surnameInput.value
    }
    console.log(user);
    const inf = localStorage.getItem("users")
    if (inf == null) {
        localStorage.setItem("users", JSON.stringify([user]));

    } else {
        const users = JSON.parse(inf);
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users));
    }
    nameInput.value = ""
    surnameInput.value = ""
    doData();
}
function doData() {
    const inf = localStorage.getItem("users")
    if (inf == null) {
        return;
    }
    const users = JSON.parse(inf);
    document.getElementById("info").innerHTML = users.map((user, i) => `
    <div><h3>${user.name} ${user.surname}</h3> <div id = "btninfo"><button onclick = deleteUser(${i})>Delete</button> <button>Edit</button></div></div> 
       `).join("")


}
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1); 
    localStorage.setItem("users", JSON.stringify(users));
    doData();  
}
doData()