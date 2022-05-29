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

```
$ git clone git@github.com:okawa-takaranoi-arsaga/arsaga-hackathon-website.git
$ cd arsaga-hackathon-website
```

- build（完了まで 20 分前後かかります。時間に余裕があるタイミングで実行していただくようお願いいたします。）

```
$ make init
```

## 開発

※ make コマンドは全てコンテナの外で叩く想定です。

- コンテナの起動

```
$ make up
```

- VSCode 起動

```
$ make open
```

- 開発サーバーを起動

```
$ make develop
```

http://localhost:8000/ にアクセスすることができれば、準備は完了です。

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
