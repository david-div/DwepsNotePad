var addInput = function(parentId, elementTag, elementId, html) {

  var container = document.getElementById('parent');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'text-field');
  input.innerHTML = html;
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
  blogList.innerHTML = html;
  container.appendChild(blogList);
};
addblogList();

var addblogList1 = function(parentId, elementTag, elementId, html) {

  var container = document.getElementById('blog-list');
  var blogList1 = document.createElement('li');
  blogList1.setAttribute('id', 'blog-inner-list');
  blogList1.innerHTML = html;
  container.appendChild(blogList1);
};
addblogList1()




var test = function() {

    var button = document.getElementById('submit-button');
    var textField = document.getElementById('text-field');
    var blogList = document.getElementById('blog-list');
    var testResult = document.getElementById('test-result');


    var success = function () {
        console.log("%cTest passed", 'color:green');
        // testResult.insertAdjacentHTML("beforeend", '<li style="color: green"> Test passed! </li>');
    };

    var fail = function () {
        console.log("%cTest failed", 'color:red');
        // testResult.insertAdjacentHTML("beforeend", '<li style="color: red"> Test failed! </li>');
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
