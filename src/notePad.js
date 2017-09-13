
var button = document.getElementById('submit-button');
var textField = document.getElementById('text-field');
var blogList = document.getElementById('blog-list');
var fullNote = document.getElementById("full-note");
var counter = 1
var noteList = {}
var whatever = document.getElementById("note"+)


button.addEventListener("click", function(){
    var string = textField.value
    var shortenedString = shorten(textField.value);
    var htmlString = '<li><button id="note'+counter+'">'+ shortenedString + '</button></li>';
    noteList["note"+counter] = string;
    blogList.insertAdjacentHTML("beforeend", htmlString);
    textField.value = ''
    counter++
});



shorten = function(string) {
    if (string.length > 20) {
        string = string.substr(0,20)+'...';
        return string
    } else {
      return string
    }
};

//we want
// if we click a button on the list of buttons (ie not submit-button) then we want the page
// to change and only show the full note related to that specific button
var blah = function(num){
  fullNote.insertAdjacentHTML("beforeend", noteList["note"+num]);
}

if(document.getElementById()){
button.addEventListener("click", blah(button.id //pseudo)
}


//   if(noteButton)
//   noteButton.addEventListener("click", function(){
//   console.log("success");
//
//
// });



//when list button clicked display value
