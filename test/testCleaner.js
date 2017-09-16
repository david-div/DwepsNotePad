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

function removeFullNote(elementId) {
  var fullNote = document.getElementById('full-note');
  fullNote.parentNode.removeChild(fullNote);
}
removeFullNote();

function removeNewsButton(elementId) {
  var newsButton = document.getElementById('getNews');
  newsButton.parentNode.removeChild(newsButton);
}
removeNewsButton();

function removeNewsList(elementId) {
  var newsList = document.getElementById('newsfeed');
  newsList.parentNode.removeChild(newsList);
}
removeNewsList();
