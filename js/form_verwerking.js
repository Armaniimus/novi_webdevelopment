/*
    Leerlijn: webdevelopment
    Docent: Frits Bosschert
    Student: Armand van Alphen
 */

function GET(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            KeyValuePair[1] = decodeURIComponent( KeyValuePair[1] );
            return KeyValuePair[1];
        }
    }

    return "";
}

function ValidateNaam() {
    const naam = GET('naam');
    const naamEl = document.getElementById('naam');

    if (naam.length > 0) {
        naamEl.innerHTML = naam;
        naamEl.classList.add("valid");
    } else {
        naamEl.classList.add("invalid");
    }
}

function ValidateEmail() {
    const email = GET('email');
    const emailEl = document.getElementById('email');
    const emailRegexPattern = new RegExp( /^.+\@.+\..+$/ );

    if ( emailRegexPattern.test(email) ) {
        emailEl.classList.add("valid");
    } else {
        emailEl.classList.add("invalid");
    }

    emailEl.innerHTML = email;
}

function validateGeboorte() {
    const geboorte = GET('geboorte');
    const geboorteEl = document.getElementById('geboorte');
    const geboorteRegExPattern = new RegExp( /^[0-9]{1,4}-[0-9]{1,4}-[0-9]{1,4}$/ );

    if ( geboorteRegExPattern.test(geboorte) ) {
        geboorteEl.classList.add("valid");
    } else {
        geboorteEl.classList.add("invalid");
    }


    geboorteEl.innerHTML = geboorte;
}

ValidateNaam();
ValidateEmail();
validateGeboorte();
