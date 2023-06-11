function find(text){
    var textget = document.getElementById(text);
    var current = textget.value;
    var element = document.getElementsByTagName('li');
    for (let i=0; i< element.length; i++) {
        if(element[i].id==""){
            continue;
        }
        if (element[i].id[0].toUpperCase() == current[0].toUpperCase()){
            element[i].style.display ="block";        
        }
        else{
            element[i].style.display ="none";
        }
    }
}
    