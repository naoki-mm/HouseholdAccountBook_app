//indexedDBの名前などの設定
const dbName = "kakeiboDB";
const storeName = "kakeiboStore";
const dbVersion = 1;

//データベース接続する。データベースが未作成なら新規作成する。
let database = indexedDB.open(dbName, dbVersion);

//データベースとオブジェクトストアの作成
database.onupgradeneeded = function (event) {
    let db = event.target.result;
    db.createObjectStore(storeName, { keyPath: "id" });
    console.log("データベースを新規作成しました");
}

//データベースに接続に成功した時に発生するイベント
 atabase.onsuccess = function (event) {
    let db = event.target.result;
    // 接続を解除する
    db.close();
    console.log("データベースに接続できました");
}

database.onerror = function (event) {
    console.log("データベースに接続できませんでした");
} 

 