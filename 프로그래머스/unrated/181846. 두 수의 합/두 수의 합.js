function solution(a, b) {
    // return BigInt(a)+BigInt(b)+""
    let answer = [];
    a="0"+a
    b="0"+b
    if(a.length>b.length){
        b = "0".repeat(a.length-b.length)+b
    }else if(a.length<b.length){
        a = "0".repeat(b.length-a.length)+a
    }
    
    let over=0;
    for(let i=a.length-1; i>=0; i--){
        let num = Number(a[i])+Number(b[i])+Number(over)+''
        if(num.length===1){
            over=0
            answer.unshift(num)
        }else{
            over = num[0]
            answer.unshift(num[1])
        }
    }
    answer[0]==="0" ? answer.shift() : null
    return answer.join('')
}