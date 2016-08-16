function randomSort(mon, num, min, max) {
  var sum = mon;
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(min);
    sum -= min;
  }
  while (sum >= 1) {
    var ranNum = Math.floor(Math.random() * num);  
    var ranMon = parseFloat(Math.random().toString().slice(0, 4)); 
//    console.log(ranMon);
    if ((arr[ranNum] + ranMon) < max) {
      arr[ranNum] += ranMon;
      sum -= ranMon;
      if (sum < 1) {
        ranMon = parseFloat(sum.toString().slice(0,4));
        while (sum != 0) {
          ranNum = Math.floor(Math.random() * num);
          if ((arr[ranNum] + ranMon) < max) {
            arr[ranNum] += ranMon;
            sum = 0;
          }
        }
      }
    }
  }
  return arr;
}
// console.log(randomSort(100, 10, 6, 12));


function hongbao(money, num, min, max) {
    var arr = [],
        sum = 0;

    money *= 100;
    min *= 100;
    max *= 100;

    var d = max - min;

    for (var i = 0; i < num; i++) {
        arr.push(min);
    }
    money -= min * num;
    var index = 0;
    var random = 0;
    while (money) {
        if (index == num) {
            index = 0;
        }
        random = Math.round(Math.random() * d);
        if ((money - random) > 0) {
            if(arr[index] < max && (arr[index] + random) < max) {
                arr[index] += random;
                money -= random;
            }else{
                debugger;
            }
        } else {
            if(arr[index] < max && (arr[index] + money) < max) {
                arr[index] += money;
                money = 0;
            }
        }

        index++;
    }
    arr = arr.sort(function(a, b) {
        return b - a;
    });
    arr.forEach(function(value, index) {
        sum += value;
        arr[index] = +(arr[index] / 100).toFixed(2);
    });
    console.log(sum);
    return arr;
}

    function test() {
        var start = new Date().getTime();
        
//        console.log(randomSort(100, 10, 6, 12));//liumi
        console.log(hongbao(100, 10, 6, 12));//xiaoqiang
        
        var end = new Date().getTime();
        
        return (end - start) + 'ms';
    } 
    var time = test();
    console.log(time);
