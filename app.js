const subs = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

const subsInv = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

//Validaçao de entrada
function validate(action){
    let text_user = document.getElementById("textArea").value.toLowerCase()
    if (/^[a-zA-Z0-9\s]+$/.test(text_user)) {
        if(action == "cryp"){
            cryp(text_user)
        }
        if(action == "decryp"){
            decryp(text_user)
        }
    }
}

//Substituir as letras
function matchedLetter(letter, action_){
    return action_ ? (subs[letter] || letter) : (subsInv[letter] || letter)
}

//Função para criptografia
function cryp(validatedText){
    let cryp_text = validatedText.replace(/[aeiou]/g, function(matched){
        return matchedLetter(matched, true)
    });

    textAreaResult(cryp_text)
}

//Função para descriptografia
function decryp(validatedText){
    let decryp_text = validatedText.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return matchedLetter(matched, false)
    });
    
    textAreaResult(decryp_text)
}

//Mostra o resultado
function textAreaResult(text){
    let div_ = document.getElementById("En-De-crypted_result")
    document.getElementById("buttonCopy").style.display = "block";
    document.getElementById("result-area").style.display = "none";
    div_.style.display = "block";
    div_.innerHTML = text
}

//Função Copiar
function copy(){
    let div_text = document.getElementById("En-De-crypted_result").innerText;
    navigator.clipboard.writeText(div_text)
    console.log(div_text);
}