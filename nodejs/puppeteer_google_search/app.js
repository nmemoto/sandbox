const puppeteer = require('puppeteer');

const args = process.argv.filter((value, index) => index > 1)

if (args.length === 0) {
	console.log("検索ワードを引数に指定してください")
	console.log("例: node app.js \"google\" \"microsoft\"")
	return 1
}

const googleSearch = async (word) => {
  // Viewport
  const width = 1200
  const height = 600
  const browser = await puppeteer.launch({
      headless: false,
      args: [
          `--window-size=${ width },${ height }`
        ],
    });
	const page = await browser.newPage();
	await page.setViewport({ width, height })
  await page.goto('https://www.google.co.jp/');

  // Get the "viewport" of the page, as reported by the page.
  await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  await page.type("#lst-ib", word);
  await page.keyboard.press('Enter');
};


args.map(word =>
	googleSearch(word)
)
