function handleUserSubmit(event){
    event.preventDefault();
    const nameText = document.querySelector(".name-text");
    localStorage.setItem("name",nameText.value);
    // const textbox =document.getElementById("input-name");
    // const inputValue =textbox.value;
    // console.log(textbox);
    // // テキストボックスの値を使用し、出力メッセージ
    // const output ="HELLO「"+ inputValue +"」";
    // // 出力用のP要素
    // document.getElementById("output-name").innerHTML= output;
    location.reload();
}