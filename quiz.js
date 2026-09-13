const quizData = [
  // 【4択問題の例】
  {
    type: "choice",
    levels: ["easy", "normal"],
    question: "VTuberグループ「GΔ59」の正しい読み方はどれ？",
    options: ["デルタファイブ", "ジゴク", "ジーデルタ", "ゴジューキュウ"],
    answer: 1 // 正解は2番目の「ジゴク」
  },

  // 【入力問題の例】
  {
    type: "input",
    levels: ["easy", "normal"],
    question: "GΔ59の正しい読み方をひらがなで入力してください。",
    // 正解の表記揺れ（全角・半角・カタカナ等）を配列で複数登録できます
    answers: ["じごく", "ジゴク", "jigoku"] 
  },

  {
    type: "input",
    levels: ["normal", "hard"],
    question: "「幸せを運ぶお稲荷さま」の名前は何？（苗字なし・ひらがな/カタカナ可）",
    answers: ["甘噛こんこん", "あまがみこんこん", "こんこん"]
  }
];
