/*global $*/
$(document).ready(function(){

//HTMLからresultに代入
let result = document.getElementById("result");
//初期値を少数点入力可能モード
let mode = 'integer_mode';

//=キー
window.equal = function() {
//末尾1桁が「-」or「+」or「*」or「/」orの場合
  if(result.innerHTML.slice(-1)=="-" || result.innerHTML.slice(-1)=="+" || result.innerHTML.slice(-1)=="*" || result.innerHTML.slice(-1)=="/" || result.innerHTML.slice(-1)=="."){
//末尾1桁の演算子を削除
  result.innerHTML= result.innerHTML.slice(0,-1);
  }
//桁数揃えて計算
  result.innerHTML = digiNum(eval(result.innerHTML));
};
//桁揃える関数：10桁表示
function digiNum(num){
  return Math.round(num*10000000000)/10000000000;
}

//ACキー
window.reset = function() {
//少数点入力可能モードにする
   mode="integer_mode";
//画面表示を初期値"0"にする
   result.innerHTML= "0";
};

//数字キー：targetで受取
window.num_click = function(target) {
//targetのHTMLをinputに代入
  let input = target.innerHTML;
//初期値"0"の場合
  if(result.innerHTML == "0"){
//inputをそのまま代入
    result.innerHTML = input;
//"0"でない場合
  }else{
//inputを文字列で付け加える
   result.innerHTML += "" + input;
  }
};

//00キー:targetで受取
window.w_zero = function(target) {
  let input = target.innerHTML;
  if(result.innerHTML == "0"){
    return;
  }else{
   result.innerHTML += "" + input;
  }
};

//少数点キー：targetで受取
window.point_click = function(target) {
  let input = target.innerHTML;
//少数点入力不可モードの時の制御
   if(mode == 'decimal_mode'){
      return;
//初期値が0の場合→「0.」にする
   }else if(result.innerHTML == ""){
     result.innerHTML = "0" + input;
//末尾1桁が「-」or「+」or「*」or「/」の場合
   }else if(result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/"){
//"0"と受け取った少数点(input)を文字列で付け加える       
     result.innerHTML += "" + "0" + input;
//末尾1桁が「.」の時の制御
   }else if(result.innerHTML.slice(-1) == "."){
     return;
//それ以外
   }else{
     result.innerHTML += "" + input;
   }
//小数入力不可モードに変更
   mode = 'decimal_mode';
};

//演算子キー：targetで受取
window.ope_click = function(target) {
  let input = target.innerHTML;
//末尾1桁が「.」の場合
  if(result.innerHTML.slice(-1)=="."){
    return;
//今の画面表示の末尾1桁が「-」or「+」or「*」or「/」orの場合
  }else if(result.innerHTML.slice(-1)=="-" || result.innerHTML.slice(-1)=="+" || result.innerHTML.slice(-1)=="*" || result.innerHTML.slice(-1)=="/"){
    result.innerHTML= result.innerHTML.slice(0,-1);
    result.innerHTML+= "" + input;
//それ以外
  }else{
    result.innerHTML += "" + input;
  }
//小数入力可能モードに変更
  mode ='integer_mode';
};

});