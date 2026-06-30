const BROWSER = {
    name: 'chrome',

    options: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-dev-sha--usage',
            '--disable-gpu',
            '--window-size=1920,1080'
        ]
    },
}

module.exports = BROWSER;