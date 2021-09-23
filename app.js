 var btnTranslate = document.querySelector("#btn-translate");
 var txtInput = document.querySelector("#txt-Input");
 var txtOutput = document.querySelector("#txt-output");
 
 var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;

 function constructURL(text) {
     return serverURL + "?" + "text=" + text
 }

 function errorHandler(error){
     console.log("error occurred", error);
 }

 function clickHandler(){
     var input = txtInput.value;

     fetch(constructURL(input))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
 };

 btnTranslate.addEventListener("click", clickHandler);