'use strict';

// 無名関数をモジュールとして設定する(関数をモジュール化した)(←module.exportsオブジェクトのプロパティとして関数を登録してる)
module.exports = (robot) => {
    // HubotのAPI利用方法に則って記述する
    robot.hear(/hello>/i, (msg) => {
    // 正規表現で、大文字小文字問わずhello>という文字にマッチした場合→次の無名関数を実行する
        const username = msg.message.user.name;
        // msgオブジェクトから(slackの?)ユーザ名を取得する(※ちなみにVMのshell上で実行するとユーザ名はShellとなる)
        msg.send('Hello, ' + username);
        // msgオブジェクトのsendメソッドを用いて「発言」する
        });
  
    robot.hear(/lot>/i, (msg) => {
    // 正規表現で、大文字小文字問わずlot>という文字にマッチした場合→次の無名関数を実行する
        const username = msg.message.user.name;
        // msgオブジェクトから(slackの?)ユーザ名を取得する(※ちなみにVMのshell上で実行するとユーザ名はShellとなる)
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        // lotsの要素をランダムに取得して、lotとする
        msg.send(lot + ', ' + username);
        // msgオブジェクトのsendメソッドを用いて「発言」する 
};
