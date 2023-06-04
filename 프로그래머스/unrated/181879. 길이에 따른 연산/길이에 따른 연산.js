function solution(num_list) {
    let answer = 0;
    
    if(num_list.length > 10) {
        answer = num_list.reduce((acc, cur) => acc + cur, 0)
    } else {
        answer = num_list.reduce((acc, cur) => acc * cur, 1)
    }
    return answer;
}
