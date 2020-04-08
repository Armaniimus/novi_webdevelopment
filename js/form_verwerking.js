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
}
