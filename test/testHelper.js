var addInput = function(parentId, elementTag, elementId, html) {
  var container = document.getElementById('parent');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'textField');
  container.appendChild(input);
};
addInput();

var addButton = function(parentId, elementTag, elementId, html) {
  var container = document.getElementById('parent');
  var button = document.createElement('button');
  button.setAttribute('id', 'submit-button');
  button.innerHTML = "submit";
  container.appendChild(button);
};
addButton();

var addblogList = function(parentId, elementTag, elementId, html) {
  var container = document.getElementById('parent');
  var blogList = document.createElement('ul');
  blogList.setAttribute('id', 'blog-list');
  container.appendChild(blogList);
};
addblogList();

var addNewsButton = function(parentId, elementTag, elementId, html) {
  var container = document.getElementById('parent');
  var newsButton = document.createElement('button');
  newsButton.setAttribute('id', 'getNews');
  newsButton.innerHTML = "Refresh Newsfeed";
  container.appendChild(newsButton);
};
addNewsButton();
