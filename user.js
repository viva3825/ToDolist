function handleUserSubmit(event){
    event.preventDefault();
    const nameText = document.querySelector(".name-text");
    localStorage.setItem("name",nameText.value);
    location.reload();
    // console.log(nameText.value);
}