const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const login = (() => {
    return {
        render() {
            
        },
        hoverElement() {
            const submit = $('.form-submit')
            const socials = $$('.form__social-item')
            const socialLinks = $$('.form__social-link')
            // console.log(social)
            this.hoverScale(submit, $('.form-submit__overlay'))
            socials.forEach((item, index) => {
                const socialLink = socialLinks[index]
                item.addEventListener('mouseenter', () => {
                    socialLink.classList.add('open')
                })
                item.addEventListener('mouseleave', () => {
                    socialLink.classList.remove('open')
                })
            })
        },

        hoverScale(e, item) {
            e.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.03)';
                item.style.transition = "all 0.2s linear";
                item.style.opacity = '0.9'
            })
            e.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)'
                item.style.opacity = '1'
            })
        },
        closeLogin() {
            $('.btn').onclick = function(e) {
                e.preventDefault()
                $('.login').classList.add('active')
            }

            const close = $('.close')
            close.addEventListener('click', () => {
                close.classList.add('open');
                $('.login').classList.remove('active')
                setTimeout(() => {
                    close.classList.remove('open');
                }, 300);
            })
        },

        // VALIDATE 
        validate(fomrSeletor) {
            const fomrElemet =  $(fomrSeletor)
        
            const formRules = {};
            
            const validatorRules = {
                required: function(value) {
                    return value ? undefined : "Please enter the value"
                },
                email: function(value) {
                    var validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return validateEmail.test(value) ? undefined : 'Please enter a valid email'
                },
                min: function(min) {
                    return value => {
                        return value.length >= min ? undefined : `Please enter at least  ${min} characters`
        
                    }
                }
            }
        
            if(fomrElemet) {
                const inputs = fomrElemet.querySelectorAll('[name][rules]')
                for( const input of inputs) {
                    const rules = input.getAttribute('rules').split('|')
                    for (var rule of rules) {
                        var ruleInfo
                        var isRuleHasValue = rule.includes(':')
                        if(isRuleHasValue) {
                            ruleInfo = rule.split(':')
                            rule = ruleInfo[0]
                        }
                        var ruleFunc = validatorRules[rule]
                        if(isRuleHasValue) {
                            ruleFunc = ruleFunc(ruleInfo[1])
                        }
        
                        if(Array.isArray(formRules[input.name])) {
                            formRules[input.name].push(ruleFunc)
                        } else {
                            formRules[input.name] = [ruleFunc]
                        }
                    }
                    input.addEventListener('blur', handleValidate ) 
                    input.addEventListener('input', handleClearError) 
                }
        
                const getParent = function(elemet, seletor) {
                    while(elemet.parentElement) {
                        if (elemet.parentElement.matches(seletor)) {
                            return elemet.parentElement
                        }
                        elemet = elemet.parentElement
                    }
                }
        
                function handleValidate(e) {
                    var rules = formRules[e.target.name]
                    var errorMessage;
                    rules.find(function(rule) {  // find trả về giá trị đầu tiên
                        errorMessage = rule(e.target.value);
                        return errorMessage
                    })
                    if(errorMessage) {
                        var formGroup = getParent(e.target, ".form-group")
                        if (formGroup) {
                            var formMessage = formGroup.querySelector('.form-message')
                            if(formMessage) {
                                formGroup.classList.add('invalid')
                                formMessage.innerText = errorMessage
                            }
                        }
                    }
                }
        
                function handleClearError(e) {
                    const formGroup = getParent(e.target, '.form-group')
                    if(formGroup.classList.contains('invalid')) {
                        formGroup.classList.remove('invalid')
                        var formMessage = formGroup.querySelector('.form-message')
                        if(formMessage) {
                            formMessage.innerHTML = '';
                        }
                    }
                }
            }
        
            // SUBMIT FORM

            
        },


        start() {

            this.render()
            this.hoverElement()
            this.closeLogin()
            this.validate('#form-login')
        }
    }
})()
login.start()
