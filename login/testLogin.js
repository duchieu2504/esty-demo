const $ = document.querySelector.bind(document)

function Validate(formSelector) {
    const formElement = $(formSelector)
    const formRules = {};
    const validationRules = {
        required: function(value) {
            return value ? undefined : "Vui lòng nhập giá trị"
        },
        email: function(value) {
            var validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return validateEmail.test(value) ? undefined : 'Please enter a valid email'
        },
        min: function(min) {
            return value => {
                return value.length > min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            }
        }
    }
    if(formElement) {
        const inputs = formElement.querySelectorAll('[name][rules]')
        for( var input of inputs) {
            const rules = input.getAttribute('rules').split('|')
            for( var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':')
                if(isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0]
                }
                var ruleFunc = validationRules[rule]
                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }
            input.addEventListener('blur', handleValidator)
            input.addEventListener('input', handleClearError)
        }
        function getParent(element, selector) {
            while(element.parentElement) {
                if(element.parentElement.matches(selector)) {
                    return element.parentElement
                }
                element.parentElement
            }
        }
        function handleValidator(e) {
            var rules = formRules[e.target.name]
            rules.find(function(rule){
                errorMessage = rule(e.target.value)
                return errorMessage
            })
            if(errorMessage) {
                const formGroup = getParent(e.target, '.form-group')
                const formMessage = formGroup.querySelector('.form-message')

                if(formMessage) {
                    formGroup.classList.add('invalid')
                    formMessage.innerText = errorMessage
                }
            }
        }
        function handleClearError(e) {
            const formGroup = getParent(e.target, '.form-group')
            const formMessage = formGroup.querySelector('.form-message')
            formGroup.classList.remove('invalid')
            if(formMessage) {
                formMessage.innerHTML = ""
            }
        }

    }
}