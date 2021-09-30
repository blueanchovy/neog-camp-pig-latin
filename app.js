 var btnTranslate = document.querySelector("#btn-translate");
 var txtInput = document.querySelector("#txt-input");
 var txtOutput = document.querySelector("#txt-output");
 
 var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;

 function constructURL(text) {
     return serverURL + "?" + "text=" + text;
 }

 function errorHandler(error){
     console.log("error occurred", error);
 }

 function clickHandler() {
     console.log(txtInput.value);
     var input = txtInput.value;

     console.log(txtInput.value);

     fetch(constructURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            console.log(txtOutput);
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
 }

 btnTranslate.addEventListener('click', clickHandler);