# DarkBeef

[BEEF](https://beef.center.kobe-u.ac.jp/)をダークモードに対応させるのが主な機能ですが、他にも色々機能は入ってます。
インストールの仕方は[これ](https://naokixtechnology.net/javascript/2851)とか読んでください。

## 機能一覧

- OSでダークモードを設定しているとき、黒いBEEFを表示。
- 管理者用のログインフォームを非表示。
- コースカテゴリを非表示。
- ナビゲーションのマイコースは、選択したもののみ表示。
  - content.jsの2行目にコンマ区切りで表示させたいコースのidを記載してください。idはコースのURLの最後の部分の数字です。例えば以下のような感じ。
```content.js
const ids = [
  12470,12472,12473,12474,12475,12477,12479,12566,12567
]
```