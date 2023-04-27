const child=document.createElement("div")
child.id="child"
document.getElementById("parent").appendChild(child)
let result=document.getElementById("child")



const cli=()=>{
    const input=document.getElementById("btn").value
    const reg=/\+1[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}/
   const h=reg.test(input)
   result.innerHTML=h
}


