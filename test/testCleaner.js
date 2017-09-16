function removeInput(elementId) {
  var input = document.getElementById('textField');
  input.parentNode.removeChild(input);
}
removeInput();
function removeButton(elementId) {
  var button = document.getElementById('submit-button');
  button.parentNode.removeChild(button);
}
removeButton();
function removeBloglist(elementId) {
  var bloglist = document.getElementById('blog-list');
  bloglist.parentNode.removeChild(bloglist);
}
removeBloglist();

function removeNewsButton(elementId) {
  var newsButton = document.getElementById('getNews');
  newsButton.parentNode.removeChild(newsButton);
}
removeNewsButton();
