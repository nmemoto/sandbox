# child_process
* https://www.amazon.co.jp/Mastering-Node-Js-Second-Sandro-Pasquali/dp/178588896X
    * Child processes

## how to use
```
$ node parent.js
```

## memo
* 直接lovechild.jsを実行していないが、forkによって子プロセスとして実行している
* process オブジェクトはグローバルで扱える。現在のNode.jsプロセスに関する情報を提供し、そのプロセスを制御する。
    * https://nodejs.org/api/process.html
* __dirname には、現在実行中のソースコードが格納されているディレクトリパスが格納されている。
    * https://nodejs.org/docs/latest/api/modules.html#modules_dirname
    * https://gist.github.com/uupaa/da42698d6b2d2cbb3cca
* Node.jsプロセスがIPCチャネル（子プロセスとクラスタのドキュメントを参照）で生成された場合、childprocess.send（）を使用して親プロセスから送信されたメッセージが子プロセスによって受信されるたびに、 'message'イベントが生成されます。
    * https://nodejs.org/api/process.html#process_event_message

