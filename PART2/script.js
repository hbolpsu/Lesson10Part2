 function resetScreen() {
            var colortheme = document.getElementById("colorchoice").value;
            document.documentElement.setAttribute('data-theme',colortheme);
            var name = document.getElementById("entername").value;
            var myH1 = document.getElementById("welcome");
            myH1.innerHTML= "Hello " + name + "! Welcome ";
            var newtext = document.getElementById("textInput").value;
            var myp = document.getElementById("message");
            myp.innerHTML = newtext;
        }


 