function change(obj){
    var tempName = [];
    var tempValue = [];
    var counter;
    var tempObj = {
    };
    var isCopy = false;
    for(value in Object.values(obj)){
        tempValue[tempValue.length] = value;
    }
    for(names in Object.keys(obj)){
        tempName[tempName.length] = names;
        delete obj.names;
    }
    for(var i = 0;i < tempName.length; i++){
        obj[tempName[i]+'_length'] = tempValue[i].length;
    }
    for(var i = 0; i < tempValue.length - 1; i++){
        counter = 1;
        for(var j = ++i; j < tempValue.length;j++){
            if (tempValue[i] == tempValue[j]){
                counter++;
            }
        }
        for(names in Object.keys(tempObj)){
            if (temp[i] == names){
                isCopy = true;
            }
        }
        if (!isCopy){
            if(counter > 1){
                obj['Duplicated values'][tempValue[i]] = counter;
                tempObj[tempValue[i]] = counter;
            }
        } else {
            isCopy = false;
        }
        
    }
}
