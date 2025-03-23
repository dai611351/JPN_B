
function countCharacters() {
    const text = document.getElementById("inputText").value;
    const count = text.length;
    document.getElementById("result").innerText = count + " ký tự";
}
