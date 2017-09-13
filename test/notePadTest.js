var test = function() {

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

  var button = document.getElementById('submit-button');
  var textField = document.getElementById('textField');
  var blogList = document.getElementById('blog-list');
  var testResult = document.getElementById('testResult');

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


  var success = function () {
    console.log("%cTest passed", 'color:green');
    testResult.insertAdjacentHTML("beforeend", '<li style="color: green"> Test passed! </li>');
  };

  var fail = function () {
    console.log("%cTest failed", 'color:red');
    testResult.insertAdjacentHTML("beforeend", '<li style="color: red"> Test failed! </li>');
  };

  var reset = function() {
    blogList.innerHTML = ''
  };

  var testIfTrue = function(argument) {
    if (argument) {
      success();
    } else {
      fail();
    }
    reset()
  };

  var inputAndClick = function(text) {
    textField.value = text;
    button.click();
  };

  var buttonPresent = function() {
    testIfTrue(button);
  };

  var textInput = function() {
    textField.value = 'a';
    testIfTrue(textField.value === 'a');
  };

  var textFieldPresent = function() {
    inputAndClick('a');
    testIfTrue(blogList.innerHTML.includes('a'))
  };

  var postTextFeature = function() {
    inputAndClick('a');
    inputAndClick('b');
    testIfTrue(blogList.innerHTML.includes('a') && blogList.innerHTML.includes('b'))
  };

  var abbreviationTest = function() {
    str = 'Hello, this string is over 20 characters long!';
    inputAndClick(str);
    shortenedStr = 'Hello, this string i';
    appendedStr = "Hello, this string i" + '...';
    testIfTrue(blogList.innerHTML.includes(appendedStr));
  };

  runTests = function() {
    buttonPresent();
    textFieldPresent();
    postTextFeature();
    textInput();
    abbreviationTest()
  };

  runTests()

};

test();

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
