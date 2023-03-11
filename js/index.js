
//34 uyga vazifa
const number =[1.987,0.7,3,6,-7,8.6,6.5233,-5,34,-0.7,2.2]
for (let index = 0; index < number.length; index++) {
    if (number[index]<0) {
        number[index]=-number[index]
    }
    number[index]= number[index].toFixed(0)
}
console.log(number);
 //34 sinf ishi
 const num =[1,2,3,4,5,6,7,8,9]
 let sum =0
 let mult=1
 for (let index = 0; index < num.length; index++) {
    const element = num[index];
    sum +=element
    mult *=element
    
 }
 console.log(sum);
 console.log(mult);