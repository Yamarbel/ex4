function checkAddress() {
    var add, text;
    var addArray = ["Haim Azaz 6", "Rokach 142", "Milano Dummo 6"];
    add = document.getElementById("address").value;
    var mess = document.createElement("h3");
    
    console.log(add);
    
         for(var i = 0 ; i < 4 ; i++)
         {
            if(add.localeCompare(addArray[i]) == 0)
            {
            return true;
            }
        }
    
    text = "wrong adress";
    document.getElementById("error").innerHTML = text;
    return false;
    
}