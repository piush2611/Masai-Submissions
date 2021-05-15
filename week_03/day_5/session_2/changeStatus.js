function chnageStatus(obj, plan){
    for( key in obj){
        if( plan == "Basic"){
            obj["status"] = "Basic";
            obj["creditLimit"] = 80000;
        }
        else if( plan == "Premium"){
            obj["status"] = "Premium";
            obj["creditLimit"] = 300000;
        }
        else if( plan == "Platinum"){
            obj["status"] = "Platinum";
            obj["creditLimit"] = 600000;
        }
    }
    return obj
}

console.log(chnageStatus({status: "Basic", creditLimit: "2000"}, "Premium"))