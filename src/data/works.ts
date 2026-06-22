export type Work = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
};

export const works: Work[] = [
  {
    id: "etrobocon2024",
    title: "ETロボコン2024 走行システム",
    description:
      "宮崎大学片山徹郎研究室チームKatLabとして開発したETロボコン2024アドバンストクラスの走行システム。C++を中心に、自己位置推定・走行制御のロジックをチームで実装した。",
    tech: ["C++", "C", "Python", "CMake", "Docker", "GoogleTest"],
    github: "https://github.com/KatLab-MiyazakiUniv/etrobocon2024",
  },
  {
    id: "etrobocon2024-camera-system",
    title: "ETロボコン2024 カメラシステム",
    description:
      "ETロボコン2024アドバンストクラス向けに開発したカメラ画像処理システム。Pythonによる画像認識処理を走行システムと連携させた。",
    tech: ["Python", "Shell"],
    github: "https://github.com/KatLab-MiyazakiUniv/etrobocon2024-camera-system",
  },
  {
    id: "webfront-etrobocon2024",
    title: "ETロボコン2024 走行ログ可視化ツール",
    description:
      "ETロボコン2024の走行ログをグラフとして可視化するWebツールのフロントエンド。React（TypeScript）でカメラシステム側のAPIからデータを取得して描画する。",
    tech: ["TypeScript", "React", "HTML", "CSS", "Docker"],
    github: "https://github.com/KatLab-MiyazakiUniv/webfront-etrobocon2024",
  },
  {
    id: "etrobocon2023",
    title: "ETロボコン2023 走行システム",
    description:
      "宮崎大学片山徹郎研究室チームKatLabとして開発したETロボコン2023アドバンストクラスの走行システム。前年度から継続してC++ベースの走行制御ロジックをチームで実装した。",
    tech: ["C++", "C", "Python", "CMake", "GoogleTest"],
    github: "https://github.com/KatLab-MiyazakiUniv/etrobocon2023",
  },
];
