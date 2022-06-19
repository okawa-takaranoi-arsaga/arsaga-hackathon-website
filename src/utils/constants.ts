import { BoxPositionsType, OfficialPositionsType } from '../types/types'

export const BOX_POSITIONS: BoxPositionsType[] = [
  {
    id: 1,
    position: [-12, 0, -6],
    scale: 15,
  },
  {
    id: 2,
    position: [-8, 0, -6],
    scale: 55,
  },
  {
    id: 3,
    position: [-4, 0, -6],
    scale: 10,
  },
  {
    id: 4,
    position: [0, 0, -6],
    scale: 5,
  },
  {
    id: 5,
    position: [4, 0, -6],
    scale: 15,
  },
  {
    id: 6,
    position: [8, 0, -6],
    scale: 10,
  },
  {
    id: 7,
    position: [12, 0, -6],
    scale: 8,
  },
]

export const OFFICIAL_POSITIONS: OfficialPositionsType[] = [
  {
    id: 1,
    position: 'FrontEnd Engineer',
    explanation: `
    【フロントエンドエンジニア】\n
    【 開発環境 】
    • 開発言語:JavaScript, Node.js, TypeScript, HTML5, CSS3, SCSS, PHP
    • フレームワーク/ライブラリー:Vue.js, Nuxt.js, React, Express, GraphQL, Laravel, WordPress
    • クラウドサービス:AWS, Firebase
    • DB:MySQL, Cloud Firestore
    • テスト:Jest, Cypress
    • ツール:Swagger, Docker, Github Actions
    `,
    people: 15,
  },
  {
    id: 2,
    position: 'ServerSide Engineer',
    explanation: `
      【サーバーサイドエンジニア】\n
      【 開発言語 】
      • PHP/Laravelがメイン。
      • 開発言語:PHP,Elixir,Golang,Python,Java
      • フレームワーク:Laravel,Phoenix,Vue.js,React
      • DB:MySQL,DynamoDB,Redis
      • ツール:Github, Docker,CI/CD
    `,
    people: 55,
  },
  {
    id: 3,
    position: 'Infrastructure Engineer',
    explanation: `
      【インフラエンジニア】\n
      【 開発環境 】
      • 開発言語:PHP, Elixir, Golang
      • フレームワーク:Laravel, Phoenix
      • DB:MySQL
      • インフラ:AWS
      • ツール:Docker,Terraform,Git
      • OS:Linux
    `,
    people: 10,
  },
  {
    id: 4,
    position: 'Unity Engineer',
    explanation: `
      【Unityエンジニア】\n
      【主な仕事内容】
      • ネイティブ(iOS/Android)ゲームのクライアントサイドの設計/開発/テスト/運用
      • 既存機能改善
      • 開発環境の構築/改善
      • 開発効率化のためのツール作成
    `,
    people: 5,
  },
  {
    id: 5,
    position: 'QA Engineer',
    explanation: `
    【QAエンジニア】\n
    準備中・・・
    `,
    people: 15,
  },
  {
    id: 6,
    position: 'Director',
    explanation: `
      【ディレクター】\n
      • 新規案件の引き合い時の提案書作成
      • 顧客への提案
      • 要件定義
      • アサインメンバーの進捗管理
      • 仕様設計の確認
    `,
    people: 10,
  },
  {
    id: 7,
    position: 'Human Resources',
    explanation: `
      【人事マネージャー】\n
      • 事業戦略を実現するための組織・採用戦略立案
      • 採用戦略・戦術の策定・実行及び運用マネジメント
      • 採用チャネル設計と運用マネジメント
      • 評価/報酬制度の策定及び運用
      • 人材開発/育成体制設計及び実行
      `,
    people: 8,
  },
]
