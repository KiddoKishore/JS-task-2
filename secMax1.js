const secMax = (num) => {
    let s = num.sort((a,b)=> b -a )
    let a = s[1]
    console.log(a);
}
secMax([5,3,7,9,8])