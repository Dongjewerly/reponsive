//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일멍","팝업이름","옵션설정");
    //옵션: left=, top=, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50m scrollbar=0, toolbar=0, menubar=0");
});


//레이어 팝업

$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block") // or .show() 메서드 사용 or .fadeIn() or slideDown()
});

$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none") // or .fadeOut() or slideDown 의 반대 . show의 반대 메서드 사용
});

//탭메뉴 변수
var $tab_list = $(".tap_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active>ul").show();

//탭 메뉴를 클릭하면 class active가 붙고 전에 꺼는 사라져야함 toggleclass 메서드 사용한다
function tabMenu (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


//배너
// html 마크업 세팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay : true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    arrows:false,
    pauseOnHover: true, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1

});

$(".play").click(function(){

    $(".gallery_img").slick("slickPlay");

});
$(".pause").click(function(){

    $(".gallery_img").slick("slickPause");

});
$(".prev").click(function(){

    $(".gallery_img").slick("slickPrev");

});
$(".next").click(function(){

    $(".gallery_img").slick("slickNext");

});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
//$(".tit .btn").click(function(){}); jquery 기본 문장 달러 그리고 css처럼 선택. 클릭하면 함수 작동해라
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block"); // .css method 메서드임 css #cont_nav {display: block};
    //$("#cont_nav").show() // 위에 css display none->block 해준 거랑 똑같은 메서드임
    //$("#cont_nav").fadeIn() // 위에랑 비슷하지만 천천히 fadein 효과를 넣은 메서드임
    //$("#cont_nav").slideDown() //이하 동문
    $("#cont_nav").toggle() // 최종 목표 접고 피고 둘 다 가능 .fadeToggle() 은 애니메이션 . slideToggle() 도
    //$(".tit .btn").addClass("on") //버튼을 눌렀을 때 class btn 옆에 on추가 btn on으로 변경 <> leaveClass
    $(this).toggleClass("on") // add와 leave 합친거 css 선택자 .tit .btn 생략을 위해 위에 자기자신 뜻하는 this 사용
});
//라이트박스
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});