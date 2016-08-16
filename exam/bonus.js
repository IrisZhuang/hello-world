
;(function(){ 
//    发红包 100块10个人，每个人在6-12之间
//    function distribute(sum,num,min,max){//todo solution1 需要尝试多次 
//        var tryTime = 0;
//        function loop(){
//            var array = [];
//            var distribution = 0;
//            var lastBonus;
//            tryTime++;
//
//            for(var i = 0;i < (num-1);i++){
//                var eachBonus = min + Math.ceil(Math.random()*(max-min));
//                array.push(eachBonus);
//                distribution += eachBonus;
//            }
//            lastBonus = sum - distribution;
//            
//            if(min < lastBonus && lastBonus < max){
//                array.push(lastBonus);
//                console.log('success------:'+array);
//                console.log('tryTime-----:'+tryTime);
//            }else{
//                loop();
//            }
//        }
//        loop();
//        
//    }
    
    function distribute(sum,num,min,max){//todo solution2 动态规划减少循环次数 每次多加一步判断 time 差不多。。。。
        var tryTime = 0;
        function loop(){
            var array = [];
            var remainSum = sum;
            var ifNeedLoop = false;
            tryTime++;
            
            for(var i = 10;i > 0;i--){
                var eachBonus = min + Math.ceil(Math.random()*(max-min));
                remainSum -= eachBonus;
                if(remainSum < i*max && remainSum > i*min){
                    array.push(eachBonus);
                }else{
                    ifNeedLoop = true;
                    break;
                }
            }
            
            if(ifNeedLoop){
                loop();
            }else{
                console.log('success------:'+array);
                console.log('tryTime-----:'+tryTime);    
            }
        }
        loop();
        
    }
    
    function test() {
        var start = new Date().getTime();
        
        distribute(100,10,6,12);
        
        var end = new Date().getTime();
        
        return (end - start) + 'ms';
    } 
    var time = test();
    console.log(time);
})()



