// PART 1
$(document).ready(function(){
	$(function(){
		var aDiv=$('#banner');
		var oUl=$('#scroll');
		var aLi=oUl.children();
		var n=0;
		var oA=aLi.children();
		
		aLi.mouseenter(function(){
			n=$(this).index();
			aLi.removeClass('active');
			oA.removeClass('colors')
			aLi.eq($(this).index()).addClass('active');
			aDiv.css('background','url(img/header/'+($(this).index()+1)+'.jpg)repeat-x  center top #010101 ')
			oA.eq($(this).index()).addClass('colors');
		})
		
		var timer=setInterval(tick,1500)
		aLi.mouseenter(function(){
			clearInterval(timer);	
		})
		aLi.mouseleave(function(){
			timer=setInterval(tick, 1500)	
		})

		function tick()
			{
				n++;
				if(n == aLi.length)
				{
					n=0;	
				}	
				oA.removeClass('colors')
				oA.eq(n).addClass('colors')
				aLi.eq(n).addClass('active').siblings().removeClass('active');
				aDiv.css('background','url(img/header/'+(n+1)+'.jpg)repeat-x  center top #010101 ')
			}
	});
});


//PART 2
$('.leftbutton').mouseover(function() {
    $(this).css('background', 'url(img/index-arrL-v.png)');
})
$('.leftbutton').mouseout(function() {
    $(this).css('background', 'url(img/index-arrL-a.png)');
})
$('.rightbutton').mouseover(function() {
    $(this).css('background', 'url(img/index-arrR-v.png)');
})
$('.rightbutton').mouseout(function() {
    $(this).css('background', 'url(img/index-arrR-a.png)');
})

$('.leftbutton').click(function(){
    $('.img4>img').toggle();
  })
  $('.rightbutton').click(function(){
    $('.img4>img').toggle();
  })

// PART 3
$('.content3-left-bottom-1-pic-left').mouseover(function() {
    $(this).css('background', 'url(img/index-arrL-v.png)');
})
$('.content3-left-bottom-1-pic-left').mouseout(function() {
    $(this).css('background', 'url(img/index-arrL-a.png)');
})
$('.content3-left-bottom-1-pic-right').mouseover(function() {
    $(this).css('background', 'url(img/index-arrR-v.png)');
})
$('.content3-left-bottom-1-pic-right').mouseout(function() {
    $(this).css('background', 'url(img/index-arrR-a.png)');
})
$('.content3-left-bottom-1-pic-left').click(function(){
    $('.content3-left-bottom-1-pic>img').toggle();
    $('.content3-left-bottom-1-middle>img').toggle();
    $('.content3-left-bottom-1-bottom>img').toggle();
})
$('.content3-left-bottom-1-pic-right').click(function(){
    $('.content3-left-bottom-1-pic>img').toggle();
    $('.content3-left-bottom-1-middle>img').toggle();
    $('.content3-left-bottom-1-bottom>img').toggle();
})
$('#word').mouseover(function(){
    $(this).attr('src','img/wordg.png');
})
$('#word').mouseout(function(){
    $(this).attr('src','img/word.png');
})
$('#word1').mouseover(function(){
    $(this).attr('src','img/word1g.png');
})
$('#word1').mouseout(function(){
    $(this).attr('src','img/word1.png');
})
$('#2word').mouseover(function(){
    $(this).attr('src','img/2wordg.png');
})
$('#2word').mouseout(function(){
    $(this).attr('src','img/2word.png');
})
$('#2word1').mouseover(function(){
    $(this).attr('src','img/2word1g.png');
})
$('#2word1').mouseout(function(){
    $(this).attr('src','img/2word1.png');
})

// 弹窗
function yidong() {
            var obj = document.getElementById('Floatdiv');
            var x = obj.offsetLeft
            var y = obj.offsetTop;
            var MaxWidth = 1200;
            var MaxHeight = 600;
            
            if(x <= MaxWidth/2 && y <= MaxHeight/2 && y >= 0)
            {
             x += 6;
             y -= 3;
            }
             x -= 6;
             y += 3;
         if(x >= MaxWidth/2 && y <= MaxHeight/2 &&  x<= MaxWidth)
         {
            x += 6;
            y += 3;
         }
         x -= 6;
            y -= 3;
          if(x >= MaxWidth/2  && y >= MaxHeight/2 && y <= MaxHeight)
         {
              x -= 6;
              y += 3;
         }
          x += 6;
              y -= 3;
         if(x <= MaxWidth/2 && y >= MaxHeight/2 && x >= 0)
         {
              x -= 6;
            y -= 3;
         }
          x += 6;
            y += 3;

            obj.style.left = x+"px";
            obj.style.top = y+"px";
            
        }
    
        setInterval('yidong()',150);

$(init)
  function init(){
     $(".float-div-close").click(function(){
       $(".floatdiv").hide();
     });
 }