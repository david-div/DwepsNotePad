
var button = document.getElementById('submit-button');
var textField = document.getElementById('text-field');
var blogList = document.getElementById('blog-list');

button.addEventListener("click", function(){
    blogList.innerHTML = textField.value;
    textField.value = ''
});