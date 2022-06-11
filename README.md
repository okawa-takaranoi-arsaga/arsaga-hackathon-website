<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

## 事前準備

このプロジェクトでは [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)（以下「VSCode」とします） の [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) という拡張機能を用いた開発を行います。

お使いの環境に、以下のものを全てインストールしておく必要があります。

1. [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. [VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
3. VSCode の拡張機能である[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
4. devcontainer CLI（Remote - Containers を快適に使うためのコマンド）のインストール

※ Remote - Containers インストール済の VSCode でコマンドパレットを開き、【 Remote-Containers: Install devcontainer CLI 】を選択することで、devcontainer CLI をインストールすることができます。

| OS      | コマンドパレットを開くショートカット |
| ------- | ------------------------------------ |
| Windows | Ctrl + Shift + P                     |
| Mac     | Command + Shift + P                  |

[![Image from Gyazo](https://i.gyazo.com/67aa0144780fc9b7fc6593b7b957c7ac.png)](https://gyazo.com/67aa0144780fc9b7fc6593b7b957c7ac)

## 環境構築

### clone

- clone

```bash
$ git clone git@github.com:okawa-takaranoi-arsaga/arsaga-hackathon-website.git
$ cd arsaga-hackathon-website
```

- build（完了まで 20 分前後かかります。時間に余裕があるタイミングで実行していただくようお願いいたします。）

```bash
$ make init
```

## 開発

※ make コマンドは全てコンテナの外で叩く想定です。

- コンテナの起動

```bash
$ make up
```

- VSCode 起動

```bash
$ make open
```

- 開発サーバーを起動

```bash
$ make develop
```

http://localhost:8000/ にアクセスすることができれば、準備は完了です。

補足：上記 3 つのコマンドをまとめて実行するコマンドも用意しております。

```bash
$ make setup
```

## 各種コマンド

※ make コマンドは全てコンテナの外で叩く想定です。

- npm のインストール

```bash
$ make npm-nstall
```

- コンテナの操作

```bash
$ make docker-build  // イメージの作成
$ make ps            // コンテナの確認（起動中のもののみ）
$ make up            // コンテナの起動
$ make stop          // コンテナの停止
$ make down          // コンテナの削除
$ make destroy       // コンテナ、イメージ、ボリュームの削除
$ make restart       // コンテナの再起動
$ make gatsby        // コンテナの中に入る
```

- ビルド

```bash
$ make develop        // 開発サーバーの立ち上げ
$ make build          // コンパイル
$ make serve          // 本番サーバーの立ち上げ
$ make clean          // キャッシュの削除
```

- その他

```bash
$ make init           // 開発環境の初期化
$ make setup          // 開発環境立ち上げ
$ make open           // VSCodeの起動
$ make lint-fix       // コードの構文チェック、及び、整形
```

## Git の操作について

Git の操作について、いくつか共有事項があります。

### コンテナの中でも commit や push ができます！

このプロジェクトでは、`git push` や `git commit` を含むほぼ全ての Git の操作をコンテナの中でも行うことができます。

Git の設定ファイルに関してはコンテナとマウントするように構築していないですが、 `make open` で VSCode を開いた際に、ローカルの設定を元に自動で `/root/.gitconfig` が作られるようで、特別設定し直すことなく使っていくことができます。

ただし、環境によってはコミット時に失敗することがあることを確認しています。以下のエラーが出るようでしたら、コンテナ内ではなくローカル環境で `git commit` を試していただくようお願いいたします。

```bash
fatal: loose object *** is corrupt
```

### git commit 時にいくつか処理が走ります！

`git commit` 時にいくつか処理を走らせるよう実装しています。

なお、エラーに引っかかるとコミットに失敗します。この際、基本的には編集状態がステージングエリアにある状態となるのですが、環境によっては編集内容が消えてしまうこともあります。その際は、 `git stash pop` のコマンドを打つことで編集内容をワーキングツリーに戻すことができます。

- ESLint による JavaScript の構文チェック
- Stylelint による CSS の構文チェック
- Prettier によるコードの整形
- commitlint によるコミットメッセージの形式チェック

ESLint や Stylelint、Prettier に関してはエディタ上でエラーになっていなければ、基本的にコミットは通ると思って間違いないです。

commitlint はコミットメッセージの形式をチェックするものです。コミットメッセージに以下のいずれかのプレフィックスをつける必要がありますので、確認していただくようお願いいたします。

```
build:    ビルド関連
chore:    雑事
ci:       CIやスクリプトの設定
docs:     ドキュメントの編集
feat:     機能開発
fix:      バグ修正
perf:     パフォーマンス改善
refactor: リファクタリング
revert:   コミットの取り消し
style:    コードの整形
test:     テスト関連
```

### GUI のツールを使う場合はホームディレクトリ配下に .huskyrc というファイルを作る必要があります！

husky を使っている都合で、SourceTree や GitHub Desktop といった GUI のツールでコミットするためには、`.huskyrc`というファイルをホームディレクトリ配下に作成していただく必要があります。

`~/.huskyrc`

```bash
PATH="/Users/○○/.nodebrew/current/bin:$PATH"
```

○○ の箇所にはユーザー名が入ります。なお、上記は MacOS で nodebrew を導入している場合での設定例でして、そうでない場合は別のパスが入ります。

以下のコマンドで npx のパスを確認できます。

```bash
$ which npx
```

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
