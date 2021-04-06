// // const,letの変数宣言

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// // Uncaught SyntaxError: Identifier 'val2' has already been declared

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";
// // Uncaught TypeError: Assignment to constant variable. 
// // エラー：定数変数への代入

// const val3 = "const変数を再宣言";
// // Uncaught SyntaxError: Identifier 'val3' has already been declared
// // Error: 識別子「val3」はすでに宣言されています。

// const val4 = {
//     name: "じゃけえ",
//     age: 28,
// };

// val4.name = "jak";
// val4.address = "Hiroshima";

// console.log(val4);
// // {name: "jak", age: 28, address: "Hiroshima"}
// // constで定義していても、オブジェクトであれば値の変更や、プロパティの追加ができる。

// const val5 = ['dot','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
// // 結果：["bird", "cat", "monkey"]
// // constで定義していても、オブジェクトであれば値の変更や、プロパティの追加ができる。

// テンプレート文字列

const name = "じゃけぇ";
const age = 28;
// 私の名前はじゃけぇです。年齢は28歳です。　と表示したい。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age　+ "です";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);