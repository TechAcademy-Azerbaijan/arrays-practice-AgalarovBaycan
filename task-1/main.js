const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var arr = input.split(''); // ['5', '2 4 7 12 9']
    let sum = 0
let count = 0
for (let i = 0; i < arr.length; i++) {
    sum = arr[i]+sum
    count++
    
}

let aver = sum / count
let arr2 =[]
let cem = 0
let count2 = 0

for(i = 0 ; i<arr.length;i++){
    if(arr[i]>aver){
        arr2.push(arr[i])
     cem = cem + arr[i]
     count2++
    }

}



console.log(cem);
console.log(count2)
});
