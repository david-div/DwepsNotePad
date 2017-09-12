//circle test example

var button = document.getElementById('submit-button');
var textField = document.getElementById('text-field');
var blogList = document.getElementById('blog-list');

var success = function () {
    console.log('Test passed')
};

var fail = function () {
    console.log('Test failed')
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
button.click()
if (blogList.innerHTML.includes('a')){
    success();
}else{
  fail()
}






// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue(circle.radius === 10);
// };
//
// testCircleRadiusDefaultsTo10();




