/*****************************************
// app.js :
// サーバーサイドの処理を行うファイル
// expressを使用してWebアプリを作る際、最初に呼び出されるファイル
// 基本的な関数を記入する
*****************************************/

// require: モジュール化されたJSファイルをNode.jsから読み込む。
const express = require('express');
// 定数appにexpress関数を代入
const app = express();

// express.static: イメージ、CSS、JavaScriptなどの静的ファイルを提供
// https://expressjs.com/ja/starter/static-files.html
app.use(express.static('public'));

// ルーティング:ルートURLで表示する
// https://expressjs.com/ja/guide/routing.html
// app.get('/', (req, res) => {
//   // top.ejsの読み込み
//   res.render('top.ejs');
// });

// ルーティング:ルートURLで表示する
// https://expressjs.com/ja/guide/routing.html
app.get('/', (req, res) => {
  // index.ejsの読み込み
  res.render('index.ejs');
});

// ポート3000を尋ねる
app.listen(3000);
