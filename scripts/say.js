function say(){
[...arguments].forEach((value,index)=>{
    if(typeof value === "object")
        for(let i in value)
            console.log(i + ": " + value[i]);
    else
        console.log(`${value}`)
})
}
module.exports = say