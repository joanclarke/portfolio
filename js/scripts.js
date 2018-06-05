/*Using javascript to highlight each section when scrolled to 
*/
/*Retrieved from codetheory.in - http://codetheory.in/change-active-state-links-sticky-navigation-scroll/ */
var sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function() {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height
    },
    500
  );

  return false;
});

/*Using jQuery to animate smooth scrolling for each link on the web page*/

/*Info retrieved from w3school - https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll*/
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
