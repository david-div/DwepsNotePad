
var test = function() {

  var button = document.getElementById('submit-button');
  var textField = document.getElementById('textField');
  var blogList = document.getElementById('blog-list');
  var testResult = document.getElementById('testResult');

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
