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

    buttonPresent = function() {
        if (button) {
            success();
        } else {
            fail();
        }
    };

    textInput = function() {
        textField.value = 'a';
        if (textField.value === 'a') {
            success();
        }
    }

    textFieldPresent = function() {
        textField.value = 'a';
        button.click();
        if (blogList.innerHTML.includes('a')) {
            success();
        } else {
            fail()
        }
    };

    postTextFeature = function() {
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

    runTests = function() {
        buttonPresent();
        textFieldPresent();
        postTextFeature();
        textInput()
    };

    runTests()

};

test();