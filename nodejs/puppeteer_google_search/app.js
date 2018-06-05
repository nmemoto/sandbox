const puppeteer = require('puppeteer');

const googleSearch =
(async () => {
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

  await page.type("#lst-ib", process.argv[2]);
  await page.keyboard.press('Enter');
})();