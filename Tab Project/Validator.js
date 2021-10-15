
var Validator = function(options) {
    var formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement) {
                inputElement.onblur = function(){
                    var errorsMessage = rule.test(inputElement.value)
                    
                }
            }
        })
    }
}

// dinh nghia rules
// nguyen tac rule: tra ve ,massae loi
// khi hop le : tr ve undefined
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : 'vui long nhap'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(){
        }
    }
}