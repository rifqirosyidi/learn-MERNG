module.exports.validateRegisterInput = (
    username, 
    email, 
    password,
    confirmPassword
) => {
    const errors = {}
    if ( username.trim() === '' ) {
        errors.username = 'Please enter a username'
    }
    if ( email.trim() === '' ) {
        errors.email = 'Please enter an email'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (!email.match(regEx)) {
            errors.email = 'Please enter a valid email adress'
        }
    }
    if ( password === '' ) {
        errors.password = 'Please enter a password'
    } else if ( password !== confirmPassword ) {
        errors.confirmPassword = 'Password didn\'t match'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

module.exports.validateLoginInput = (username, password) => {
    const errors = {}
    if ( username.trim() === '' ) {
        errors.username = 'Please enter a username'
    }
    if ( password.trim() === '' ) {
        errors.email = 'Please enter a password'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}