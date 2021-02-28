!function () {
    //获取dom元素
    var recommend_list = document.getElementById('recommend_list');
    var left_btn = document.getElementById('recommend_left_btn');
    var right_btn = document.getElementById('recommend_right_btn');

    // 用idx记录图片位置;
    var idx = 0;

    //右按钮点击事件
    right_btn.onclick = function () {
        idx++;
        if (idx >= 5) idx = 5;  //idx=5 不能用{}包裹，否则会出错
        {
            recommend_list.style.left = '-371' * idx + 'px';
        }
        console.log(recommend_list.style.left)
    }

    //左按钮点击事件
    left_btn.onclick = function () {
        idx--;
        if (idx <= 0)idx = 0; 
        {
            recommend_list.style.left = '-371' * idx + 'px';
        }
        
    }
    
}();
