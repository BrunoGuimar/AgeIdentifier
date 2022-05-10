function verifyButton(){
    let today = new Date();
    let date = today.getFullYear()
    let bornDate = document.getElementById(`bornDate`)
    const gener = document.getElementsByName(`gener`)
    const imageChanger = document.querySelector(`div#imageChanger`)
    const img = document.createElement(`img`)
    img.setAttribute(`src`, `foto`)
    
    if(bornDate.value.length == `` || Number(bornDate.value) > date){
        window.alert("[ERROR.404] INVALID DATE WRITED, PLEASE TRY A VALID DATE")
    }else{ 
        const yourAge = document.querySelector(`div#yourAge`)
        let result = date - Number(bornDate.value)
        if(gener[0].checked){
            if(result > 0 && result < 13){
            yourAge.innerHTML = `A little boy with ${result} years`
            img.setAttribute(`src`, `kid.png`)
            }else if(result < 60){
                yourAge.innerHTML = `A young man with ${result} years`
                img.setAttribute(`src`, `midguy.jpg`)
                }else {
                    yourAge.innerHTML = `A old man with ${result} years`
                    img.setAttribute(`src`, `oldguy.jpg`)
                    }
        }else if(gener[1].checked){
            if(result > 0 && result < 13){
                yourAge.innerHTML = `A little girl with ${result} years`
                img.setAttribute(`src`, `kidgirl.jpg`)
                }else if(result < 60){
                    yourAge.innerHTML = `A young woman with ${result} years`
                    img.setAttribute(`src`, `midgirl.jpg`)
                    }else {
                        yourAge.innerHTML = `A old woman with ${result} 
                        years`
                        img.setAttribute(`src`, `oldgirl.jpg`)
                        }
        }
        yourAge.style.textAlign = 'center'
        yourAge.appendChild(img)
    }
    
}