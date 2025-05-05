$(document).ready(function () {
    // Smooth scroll
    $("a[href^='#']").click(function (e) {
      e.preventDefault();
      let target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top - 60
      }, 500);
    });
  
    // Fake contact form submit
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      alert("Message sent! (fake)");
      this.reset();
    });
  });
  