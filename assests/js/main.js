let homeHeight=$("#home").outerHeight();
let y=$(".about").offset().top;


$(window).scroll(function(){
    let x=$(window).scrollTop();
    if(x>=homeHeight){
        $(".navbar").addClass('bg-dark');
        $(".navbar").removeClass('bg-transparent');
        $(".btn-up").fadeIn(1000)
       
    }
    else{
        $(".navbar").addClass('bg-transparent');
        $(".navbar").removeClass('bg-dark')
        $(".btn-up").fadeOut(1000)

    }
})
// make scroll to each section and check why it stucks"
    $('.btn-up').click(function(){
        $('body,html').animate({
            scrollTop:0
        },3000)
    })

    $('.navbar .nav-link').click(function(e){
        let x=$(e.target).attr('href')
       console.log(x)
        let offs = $(x).offset().top
        console.log(offs)
        $('body , html').animate({
        scrollTop : offs
    },1000)
    })
   


let colors=['blue','teal','orange','#fff','#ff206e','red']
for(let i=0;i<6;i++){
    $(".options li").eq(i).css('backgroundColor',colors[i])
}

$('.options i').click(function(){
    let infoWidth=$('.options-slide').outerWidth();
    let x= $('.options').offset().left;
    
    if(x==0){
        $(".options").animate({left:-infoWidth},1000)
    }
    else{
        $(".options").animate({left:0},1000)


    }

    

     
  
})

$('.options li').click(function(e){
  let bg = $(e.target).css('backgroundColor');
  $('html').attr('style', `--mainColor:${bg}`);
    
})

$('.options img').click(function(e){
    let bg = $(e.target).attr('src');
    console.log(bg);
    $('.header').css('backgroundImage',`url(${bg})`);
    $(e.target).css('border','2px solid blue')
    $(e.target).siblings().css('border','none')
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        margin:20,
        loop:true,
        
    });
    
  });



 