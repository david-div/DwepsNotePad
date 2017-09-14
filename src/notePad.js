var newsfeed = document.getElementById('newsfeed');
var getNews = document.getElementById('getNews');
var button = document.getElementById('submit-button');
var textField = document.getElementById('textField');
var blogList = document.getElementById('blog-list');
var fullNote = document.getElementById("full-note");
var counter = 1;
var noteList = {};
// var whatever = document.getElementById("note"+);


button.addEventListener("click", function(){
    var string = textField.value
    if (string === '') {return console.log('invalid input')}
    var shortenedString = shorten(textField.value);
    var htmlString = '<li id="note'+counter+'">'+ shortenedString + '</li>';
    noteList["note"+counter] = string;
    blogList.insertAdjacentHTML("beforeend", htmlString);
    textField.value = ''
    counter++
});

shorten = function(string) {
  if (string.length > 20) {
    string = string.substr(0, 20) + '...';
    return string
  } else {
    return string
  }
};

blogList.addEventListener('click', function(e) {
  if(e.target.id !== 'blog-list') {
    string = e.target.innerHTML
    fullNote.innerHTML = '<div style="padding: 20px">' + noteList[e.target.id] + '</div>'
    blogList.style.display = 'none';
  }
});

fullNote.addEventListener('click', function(e) {
  if(e.target.id !== 'blog-list') {
    string = e.target.innerHTML
    e.target.innerHTML = noteList[e.target.id]
    fullNote.innerHTML = ''
    noteList[e.target.id] = string
    blogList.style.display = '';

  }
});

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
 for (i = 0; i < 5; i++) {
   htmlString += '<li> <a href= ' + data.response.results[i].webUrl + '>'+ data.response.results[i].webTitle +'</a></li>'
  //  console.log(data.response.results[i].webTitle);
 }
 // newsfeed.insertAdjacentHTML('beforeend', htmlString);
 newsfeed.innerHTML = htmlString;
}

function resetCounter() {
  counter = 0
}

getNews.click();
