
var button = document.getElementById('submit-button');
var textField = document.getElementById('text-field');
var blogList = document.getElementById('blog-list');

button.addEventListener("click", function(){
    // blogList.innerHTML = textField.value;
    var htmlString = '<li>'+ textField.value + '</li>'
    blogList.insertAdjacentHTML("beforeend", htmlString);
    textField.value = ''
});