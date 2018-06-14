# gae-graphql-sample
[Running an Express GraphQL Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
を Google Application Engine Node.js Standard Environment で動かす。

## How to use
ソースをクローンした後、デプロイする
```
$ gcloud app deploy
```

https://[プロジェクト名].appspot.com/graphql
にPOSTで以下をリクエストすると、
```
{
  hello
}
```
以下がレスポンスで返ってくる
```
{
  "data": {
    "hello": "Hello world!"
  }
}
```