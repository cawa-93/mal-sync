browser.action.onClicked.addListener(() => {
    console.log('browser.action clicked')
    browser.tabs.create({
        url: 'https://myanimelist.net',
        active: true,

    })
    // window.open('https://myanimelist.net/')
})


console.log(
    browser.identity
)