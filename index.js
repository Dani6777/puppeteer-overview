import puppeteer from "puppeteer";


 async function openWebPage(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo:500
    })
    const page = await browser.newPage()

    await page.goto('https://example.com')

    await browser.close()

}

// openWebPage()


async function captureScreenshot(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo:500
    })
    const page = await browser.newPage()

    await page.goto('https://https://www.google.com')
    await page.screenshot({path:'example.png'})
    await browser.close()
}
 //captureScreenshot()

 async function navigate(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo:500
    })
    const page = await browser.newPage()

    await page.goto('https://quotes.toscrape.com')
    await page.click('a[href="/login"]')
    await new Promise(r => setTimeout(r,5000));
    await page.screenshot({path:'login.png'})
    await browser.close()
}

navigate()
