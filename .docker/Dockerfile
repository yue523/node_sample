# Dockerfileはどの様なコンテナを作るかという指示書
# 詳しくはhttps://docs.docker.jp/engine/reference/builder.html

# FROM: 新しい構築ステージを初期化、以降のベースイメージを指定
FROM node:latest

# RUN: 現在のイメージより上にある新しいレイヤでコマンドを実行、結果をコミット
RUN npm install -g express

# EXPOSE: コンテナ実行時、指定したネットワークポートを通知する
EXPOSE 3000

# CMD: コンテナ実行時の初期設定を指定
CMD test_docker