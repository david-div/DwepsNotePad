
var button = document.getElementById('submit-button');
var textField = document.getElementById('textField');
var blogList = document.getElementById('blog-list');

button.addEventListener("click", function(){
    var shortenedString = shorten(textField.value);
    var htmlString = '<li>'+ shortenedString + '</li>';
    blogList.insertAdjacentHTML("beforeend", htmlString);
    textField.value = ''
});

shorten = function(string) {
    if (string.length > 20) {
        string = string.substr(0,20)+'...';
        return string
    } else {
      return string
    }
};
