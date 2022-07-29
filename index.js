var alfabeto = ['A','B','C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']

function encrypt(){
  const input = document.getElementById("input").value
  const output = document.getElementById("output")
  const rot = document.getElementById("rot")

  var arrInput = input.split('')
  var cifraCesar = parseInt(rot.value)

  newText = []
  arrInput.forEach(element => {
    textUpper = element.toUpperCase()
    var letterIndexAlfabeto = parseInt(alfabeto.indexOf(textUpper))
    console.log(letterIndexAlfabeto + cifraCesar)
    output.value  = (textUpper == ' ') ? ' ' : (output.value + alfabeto[letterIndexAlfabeto + cifraCesar])
    
    
  });
  


}