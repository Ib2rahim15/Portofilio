
const listWord = ["ibrahim_waell","Disgnerr","Porgramerr","TicTockerr"]
let i =0
let j = 0
function type(){
    if (j<listWord.length) {
        if (i < listWord[j].length) {
            NameAuthor.innerText += listWord[j].charAt(i)
            if (NameAuthor.innerText == listWord[j]) {
                NameAuthor.innerText =""
                j++
                i=0
            }else{
                i++
            }
        } 
        
    }else{
        j=0
    }
}
setInterval(() => {
    type()
}, 500);