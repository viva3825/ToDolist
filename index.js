function index(){
    if(localStorage.getItem("name")!==null){
        const newUser =document.querySelector('.new-user');
        newUser.style.display="none";
        const oldUser = document.querySelector(".old-user");
        oldUser.style.display="block";
        const itemList= Object.values(localStorage);
        for( let i=0; i < itemList.length; i++){
            if(itemList[i]!==localStorage.getItem("name")){
                const li = document.createElement("li");
                li.innerText =itemList[i];
                const item = document.querySelector(".item");
                item.appendChild(li);
            }
        }
    }
}
index();