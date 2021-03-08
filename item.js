function handleItemSubmit(event){
    const itemList =Object.values(localStorage);
    event.preventDefault();
    const itemText = document.querySelector(".item-text")
    const li =document.createElement("li");
    li.innerText =itemText.value;
    const del = document.createElement("span");
    del.innerText = "✘";
    del.onclick = deleteItem;
    li.appendChild(del);
    const item = document.querySelector(".item");
    item.appendChild(li);
    localStorage.setItem(itemList.length,li.innerText);

}

function deleteItem(){
    alert("はい");

}