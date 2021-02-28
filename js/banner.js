(function () {

    var banner_list = document.getElementById('banner_list');
    var circle_ol = document.getElementById('circles_ol');
    var circle_lis = circle_ol.getElementsByTagName('li');

    var clone_li = banner_list.firstElementChild.cloneNode(true);
    banner_list.appendChild(clone_li);

    var idx = 0;
    var lock = true
    function right_handler() {
        if(!lock)return;
        lock = false;
        banner_list.style.transition = 'transform .5s ease 0s';
        idx++;
        banner_list.style.transform = 'translateX(' + -25 * idx + '%)';
        if (idx > 2) {
            setTimeout(function () {
                banner_list.style.transition = 'none';
                banner_list.style.transform = 'none';
                idx = 0;
            }, 500);
        }
        setCircles();
        setTimeout(function(){
            lock = true;
        },500)
    }

    function setCircles(){
        for(var i = 0;i<=2;i++){
            if(i == idx % 3){
                circle_lis[i].className = 'current';
            }else{
                circle_lis[i].className = '';
            }
        }
    }

    circle_ol.onclick = function(e){
        if(e.target.tagName.toLowerCase() =='li'){
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            banner_list.style.transform = 'translateX(' + -25 * idx + '%)';
            setCircles();
        }
    }

    var timer = setInterval(right_handler, 2000);
    banner.onmouseenter = function () {
        clearInterval(timer);
    }
    banner.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(right_handler, 2000);
    }

    
})();
