# Shikosai_30

2018 年に開催された第 30 回茨香祭の公式サイトです。

一部修正を加えています。

元リポジトリ: [ibcnit-shikosai/shikosai_30](https://github.com/ibcnit-shikosai/shikosai_30)

#### デプロイを行う場合

次のコマンドを実行し、`out` ディレクトリを生成します。

```bash
npm run build-sass && rm -r out/ && mkdir out/ && cp -r 30/ pdf/ *.html favicon.ico out/
```

<!--
### Ver 0.2\
- この版以降はcommitメッセージに変更点を記します。

### Ver 0.12
- ロゴ部のheightが100%になる仕様をデスクトップ向けにも反映
- 背景画像をMaterial Design風のものに変更
- ロゴ画像に影（縁取り）を追加
- メニューバー上のイラストの地面が浮いてしまう問題を修正（各img要素にvertical-align:bottom付与）

### Ver 0.11
- 外部JS読み込みをbody直下からheadへ移し、defer属性付与
- &lt;span&gt;の誤記を修正
- base.cssの文字エンコード表記を追加
- モバイルビュー向けの変更
  - スクリーン横幅が480px以下となったときロゴ部のheightを100%にし、メニューボタンを表示
  - メニューのタイトルを中央から左側に（メニューボタンの右側）
-->

> Materialize v1.0.0-beta (http://materializecss.com)<br />
> Copyright 2014-2017 Materialize<br />
> MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
