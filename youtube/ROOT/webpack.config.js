const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app/app.js", // 엔트리 포인트 설정
  output: {
    filename: "bundle.js", // 번들된 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 경로
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // CSS 파일을 처리할 규칙
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // CSS 모듈을 활성화합니다
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html", // 템플릿 HTML 파일
    }),
  ],
};
