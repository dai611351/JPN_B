let fontSize = 24; 
function increaseFontSize() {
    fontSize += 2;
    document.getElementById('text').style.fontSize = fontSize + 'px';
}
function decreaseFontSize() {
    if (fontSize > 10) {
        fontSize -= 2;
        document.getElementById('text').style.fontSize = fontSize + 'px';
    }
}