import { Task } from './task';

export const TASKS: Task[] = [
    { id: 1, category: 'TICKET', name: '[JIRA-1456]SpinnakerのB/G Deploy', doToday: true, deadline: new Date(),
      description: '検証環境にてフロントアプリケーションのDeploy Pipelineを構築する',
      ticketId: 'JIRA-1456', archive: false},
    { id: 2, category: 'CHORE', name: '健康診断の申し込み', doToday: false, deadline: new Date(),
      description: 'スプレッドシートに社員番号と名前を記入する', ticketId: null, archive: false},
    { id: 3, category: 'TASK', name: '検証環境の状態を機能の状態に戻す', doToday: true, deadline: new Date(),
      description: '対象：dev-spinnaker-aws', ticketId: null, archive: false},
    { id: 4, category: 'TICKET', name: '[JIRA-1459]DAO -> APIアクセス', doToday: true, deadline: new Date(),
      description: 'データベースアクセスしている箇所を洗い出して報告', ticketId: null, archive: false},
    { id: 5, category: 'TICKET', name: '[JIRA-1459]Grafanaのダッシュボード作成', doToday: true, deadline: new Date(),
      description: 'バックエンドアプリケーションのGrafanaダッシュボードを作成する', ticketId: null, archive: false}
  ];
