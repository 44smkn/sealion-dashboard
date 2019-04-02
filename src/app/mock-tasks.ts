import { Task } from './task';

export const TASKS: Task[] = [
    { id: 1, category: 'TICKET', name: '[JIRA-1456]SpinnakerのB/G Deploy', doToday: true, deadline: new Date(),
      link: 'https://tech.mercari.com/entry/2017/08/21/092743', description: '検証環境にてフロントアプリケーションのDeploy Pipelineを構築する',
      ticketId: 'JIRA-1456'},
    { id: 2, category: 'CHORE', name: '健康診断の申し込み', doToday: false, deadline: new Date(),
      link: 'http://www.nerima-med.or.jp/iryokenshin/', description: 'スプレッドシートに社員番号と名前を記入する', ticketId: null },
    { id: 3, category: 'TASK', name: '検証環境の状態を機能の状態に戻す', doToday: true, deadline: new Date(),
      link: 'https://aws.amazon.com/jp/quickstart/architecture/spinnaker/', description: '対象：dev-spinnaker-aws', ticketId: null},
    { id: 4, category: 'TICKET', name: '[JIRA-1459]DAO -> APIアクセス', doToday: true, deadline: new Date(),
      link: 'https://ja.wikipedia.org/wiki/Data_Access_Object', description: 'データベースアクセスしている箇所を洗い出して報告', ticketId: null},
    { id: 5, category: 'TICKET', name: '[JIRA-1459]Grafanaのダッシュボード作成', doToday: true, deadline: new Date(),
      link: 'https://grafana.com/', description: 'バックエンドアプリケーションのGrafanaダッシュボードを作成する', ticketId: null}
  ];
