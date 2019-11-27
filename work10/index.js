function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total) || isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i = 1 ;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while(monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
        monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}

// function stat(){
//     let str = document.getElementById("str").value
//     let obj = {}
    //  document.write(str.split("")+"<br>")
     //直接用会清空上面的代码
    //     for(let i=0;i<str.length;i++) {
    //    var key=str[i];//str.charAt(i);
    //     if(obj[key]){
    //         obj[key]++;
    //     }else{
    //         obj[key] = 1;
    //     }
    //     if(!obj[key]){
    //     obj[key] = 1;
    //     }else{
    //         obj[key]++;
    //     }
    // }   要手動排序
    function stat() {
        let str = document.getElementById("str").value
        let arr = str.split('').sort()
        obj = arr.reduce((pre, item) => {
            pre[item] ? pre[item]++ : pre[item] = 1
            return pre
        }, {})
    document.getElementById('result').innerText = JSON.stringify(obj)
}