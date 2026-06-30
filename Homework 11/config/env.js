const ENV = {
    //Base URL
    baseUrl: 'https://www.saucedemo.com/',

    //test users untuk SauceDemo
    users: {
        valid: {
            username: 'standard_user',
            password: 'secrect_sauce'
        },
        invalidUsername: {
            username: 'invalid_user',
            password: 'secrect_sauce'
        },
        wrongPassword: {
            username: 'standard_user',
            password: 'wrong_password'
        },
        lockedOut: {
            username: 'locked_out_user',
            password: 'secrect_sauce'
        }
    },

    //Expected values
    expected: {
        loginSuccessTitle: 'Products',
        invalidCredentialsError: 'Username and password do not match',
        lockedOutError: 'locked out',
        emptyCredentialsError: 'Username is required'
    },

    //Timeout
    timeouts: {
        implicitWait: 10000,
        explicitWait: 5000,
        pageLoadTimeout: 30000
    }
};

export default ENV;