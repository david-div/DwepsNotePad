var newsfeed = document.getElementById('newsfeed')

var getNews = document.getElementById('getNews')

var button = document.getElementById('submit-button');
var textField = document.getElementById('text-field');
var blogList = document.getElementById('blog-list');

button.addEventListener("click", function() {
  var shortenedString = shorten(textField.value);
  var htmlString = '<li>' + shortenedString + '</li>';
  blogList.insertAdjacentHTML("beforeend", htmlString);
  textField.value = ''
});

shorten = function(string) {
  if (string.length > 20) {
    string = string.substr(0, 20) + '...';
    return string
  } else {
    return string
  }
};

getNews.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=c148d976-d913-445c-8148-b46110b280d0');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
 var htmlString = '';
htmlString += '<p>' + data.response.results[6].webTitle + '</p>'
 console.log(data.response.results[0].webTitle);
newsfeed.insertAdjacentHTML('beforeend', htmlString);
}
