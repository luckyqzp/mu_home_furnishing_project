!function () {
    //获取dom元素
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');

    // 用idx记录图片位置;
    var idx = 0;

    //右按钮点击事件
    right_btn.onclick = function () {
        idx++;
        if (idx >= 4) idx = 4;  //idx=5 不能用{}包裹，否则会出错
        {
            carousel_list.style.left = '-221' * idx + 'px';
        }
        
    }

    //左按钮点击事件
    left_btn.onclick = function () {
        idx--;
        if (idx <= 0)idx = 0; 
        {
            carousel_list.style.left = '-221' * idx + 'px';
        }
        
    }
    
}();
