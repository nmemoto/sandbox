# firestore-sample
[Cloud Firestore を使ってみる](https://firebase.google.com/docs/firestore/quickstart?hl=ja) をやってみた

## How to use
[config](https://www.npmjs.com/package/config) を使用して、config 以下の設定値を読んでいる。config/development.yml を読むために、NODE_ENV=development を実行コマンドに加えている(config/default.yml を参考に config/development.yml を作成する必要がある)
```
$ npm install
$ NODE_ENV=development node index.js
```

## memo
以下の警告が出力された。firestore に保存する Date オブジェクトの扱いが変わったとのこと。このサンプルでは実害はないが、出力された対応方法を実施した。
```
[XXXX-XX-XXTXX:XX:XX.XXXZ]  @firebase/firestore: Firestore (5.0.4):
The behavior for Date objects stored in Firestore is going to change
AND YOUR APP MAY BREAK.
To hide this warning and ensure your app does not break, you need to add the
following code to your app before calling any other Cloud Firestore methods:

  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

With this change, timestamps stored in Cloud Firestore will be read back as
Firebase Timestamp objects instead of as system Date objects. So you will also
need to update code expecting a Date to instead expect a Timestamp. For example:
  // Old:
  const date = snapshot.get('created_at');
  // New:
  const timestamp = snapshot.get('created_at');
  const date = timestamp.toDate();

Please audit all existing usages of Date when you enable the new behavior. In a
future release, the behavior will change to the new behavior, so if you do not
follow these steps, YOUR APP MAY BREAK.
```
