const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var arr = input.split(','); // ['5', '2 4 7 12 9']
    const arr = [3,5,-7,7,5,-9,-4]
let max = 0
let min = arr[0]


for(i = 0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i]
        index = i
      
    }
    if(min>arr[i]){
        min = arr[i]
        indeks = i
    }
}

let temp = arr[index] //7
arr[index] = arr[indeks]
arr[indeks] = temp;

console.log(arr);
});

