var test = function() {

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