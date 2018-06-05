# puppeteer_google_search
[puppeteer](https://github.com/GoogleChrome/puppeteer) でGoogle検索して、検索結果を出力する

## how to use
```
$ npm install
$ node app.js "検索ワード1"
```
## memo
* "検索ワード1" は, process.argv[2] で取得
* `await browser.close();`を削除し、Chromium が起動し続けるようにした

