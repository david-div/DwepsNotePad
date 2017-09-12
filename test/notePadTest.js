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
        console.log('Test passed')
        testResult.insertAdjacentHTML("beforeend", '<li> Test passed! </li>');
    };

    var fail = function () {
        console.log('Test failed')
        testResult.insertAdjacentHTML("beforeend", '<li> Test failed! </li>');
    };

    textField.value = 'a';

    if (textField.value === 'a') {
        success();
    }

    if (button) {
        success();
    } else {
        fail();
    }

    textField.value = 'a';
    button.click();
    if (blogList.innerHTML.includes('a')) {
        success();
    } else {
        fail()
    }

    textField.value = 'a';
    button.click();
    textField.value = 'b';
    button.click();

    if (blogList.innerHTML.includes('a') && blogList.innerHTML.includes('b')) {
        success();
    } else {
        fail()
    }
};

test()

// function removeInput(elementId) {
//   var input = document.getElementById('text-field');
//   input.parentNode.removeChild(input);
// }
// removeInput();
//
// function removeButton(elementId) {
//   var button = document.getElementById('submit-button');
//   button.parentNode.removeChild(button);
// }
// removeButton();
//
// function removeBloglist(elementId) {
//   var bloglist = document.getElementById('blog-list');
//   bloglist.parentNode.removeChild(bloglist);
// }
// removeBloglist();
