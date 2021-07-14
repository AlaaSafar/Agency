$(window).scroll(function () {// عند حدث نزولاً للإسفل و صعوداً للأعلى 
  if ($(this).scrollTop() >= 500) {// noTransparrent إذا كانت أكبر من 500 قم بإضافة 
    $("#navBar").addClass("noTransparrent");
  } else {
    $("#navBar").removeClass("noTransparrent");// noTransparrent و إلا إذا كانت أقل من 500 قم بإزالة 
  }
});

$(document).ready(function () {
  $('a.scroll').on('click', function (even) {
    var hash = this.hash;
    $('html,body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });
  });//حلال فترة زمنية 800 scrollTop هنا يتم تحريك من قبل الخاصية 

  $('.timer').countTo();// إعداد الساعة(إحصائيات)

  $(function () {
    $("#commentForm").validate();// حقل الزامي
  });
});






