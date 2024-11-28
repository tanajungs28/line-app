# ①課題番号-プロダクト名

チャットアプリ

## ②課題内容（どんな作品か）

- firebaseを活用し、入力したメッセージを表示してくれるアプリ

## ③DEMO
- https://tanajungs28.github.io/line-app/


## ④作ったアプリケーション用のIDまたはPasswordがある場合

- ID: なし
- PW: なし

## ⑤工夫した点・こだわった点

- firebaseの機能を操れるように、データの送信、削除に加えて狙ったデータを選択削除できるようにした
- ただのちゃっとだけだと味気ないので冒頭にgoogle認証も追加した点
- 今まで各ファイル（html,js,css）は1つずつの構成だったが、認証機能とチャット機能でファイル攻勢を分けた点
- ユーザ操作を考慮し、メッセージ全削除時に確認のポップ表示を用意したこと

## ⑥難しかった点・次回トライしたいこと(又は機能)

- 難しかった点：
  * チェックボックスを使用したデータベース上のデータの個別削除。チェックボックス毎に登録データのｋｅｙ値を取得するのに苦労した。
  * また個別削除時、key値のアドレス指定に階層情報を追加し忘れていて、きちんとアドレス指定できておらずに個別に削除するのに苦労した
- 次回トライしたいこと：
  * 座標情報を取得し、狙った位置にコメントボックスを追加すること
  * デザイン面ももう少しこだわる


## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [質問]特になし


- [感想]Why meにも気を取られつつfirebaseを活用したプログラム構築もなんとかできた点は頑張ったなーと思う。（小学生並みの感想）企画面がまだまだ定まっていないので、早めに企画面をブラッシュアップさせて課題作成が卒業制作のパーツ作成になるようにしていきたい。


- [参考記事]
  - 1.jQueryのappendでDOM要素を追加する方法まとめ！
  - [https://www.sejuku.net/blog/37847]
    
  - 2.【初心者向け】HTMLのチェックボックスの値をJavaScriptで取得・設定する手順を徹底解説
  - [https://ui-hack.com/programming/javascript/javascript_checkbox_getset/]

  - 3.【Firebase】Realtime Database（version 9）データ操作あれこれ
  - [https://qiita.com/shiho97797/items/de25f6d61f99497c4a35]

  - 4.aタグではなくJavaScriptで画面を移動させる方法【location】
  - [https://lorem-co-ltd.com/js-location/]
