;(function (){
    
//    有一个数组 3,10,45,6,7,8,9,9,6,5,42,54,6,5,76,7,54,45,45,67,67,4,100,7,32,20,42,84,81,22,每次随机删除其中一个元素,问经过5次删除后，提问 新数组中第16个元素，在原数组中所在位置。
    var oringinArray = [3,10,45,6,7,8,9,9,6,5,42,54,6,5,76,7,54,45,45,67,67,4,100,7,32,20,42,84,81,22];
    var flagArray = [];
    var point = 0;
    var deleteNum = 5;
    var inspectNew =16;
    
    for(var i = 0;i < oringinArray.length;i++){
        flagArray[i] = 0;
    }
    function deleteRandom (){
        var random = Math.ceil(Math.random()*oringinArray.length);
//        var random = 0;//test 重复
        
        oringinArray.splice(random,1);
        
        for(var i = 0;i <= random;i++){
            if(flagArray[i]){
                random++;
            }
        }
        
        flagArray[random] = 1;
    }
    for(var i = 0; i < deleteNum;i++){
        deleteRandom ();
    }
    
    for(var i =0;i<flagArray.length;i++){
        if(!flagArray[i]){
            point++;
        }
        if(point == inspectNew){
            console.log("原来位置："+i);
            break;
        }
    }
    
})()