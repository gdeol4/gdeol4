
////////////////// SMOOTH SCROLL //////////////////
// Smooth scroll // https://css-tricks.com/snippets/jquery/smooth-scrolling/
// https://codepen.io/magglomag/pen/RPGgJG
// Select all »a« elements with a parent class »links« and add a function that is executed on click
$('.links a').on('click', function(e) {

  // Define variable of the clicked »a« element (»this«) and get its href value.
  var href = $(this).attr('href');

  // Run a scroll animation to the position of the element which has the same id like the href value.
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, '300');

  // Prevent the browser from showing the attribute name of the clicked link in the address bar
  e.preventDefault();

});

////////////////// Nav menu pop up //////////////////
// https://codepen.io/magglomag/pen/RPGgJG
$('.navbar-burger').click(function() {
  $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
});

////////////////// INTRO BLURB TEXT GEN //////////////////
//Custom Javascript for generating line by line text + typewriting
// set up text to print, each item in array is new line
var aText = new Array(
  //"                                     ",
  "Fantasy is a text generator based on OpenAI's small GPT2 model and is further trained and finetuned on the text of fantasy novels. Change the parameters on the right to generate interesting text."
);
var iSpeed = 17; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

////////////////// Max Wolf's custom JS //////////////////
// for generation Button and output area

$(function() {
  $('#gen-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://gpt2-wpmqib3yta-uc.a.run.app",
      dataType: "json",
      data: JSON.stringify(getInputValues()),
      beforeSend: function(data) {
        $('#generate-text').addClass("is-loading");
        $('#generate-text').prop("disabled", true);
      },
      success: function(data) {
        $('#generate-text').removeClass("is-loading");
        $('#generate-text').prop("disabled", false);
        $('#tutorial').remove();
        var gentext = data.text;
        if ($("#prefix").length & $("#prefix").val() != '') {
          var pattern = new RegExp('^' + $("#prefix").val(), 'g');
          var gentext = gentext.replace(pattern, '<strong>' + $("#prefix").val() + '</strong>');
        }

        var gentext = gentext.replace(/\n\n/g, "<div><br></div>").replace(/\n/g, "<div></div>");
        var html = '<div class=\"gen-box\">' + gentext + '</div><div class="gen-border"></div>';
        $(html).appendTo('#model-output').hide().fadeIn("slow");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $('#generate-text').removeClass("is-loading");
        $('#generate-text').prop("disabled", false);
        $('#tutorial').remove();
        var html = '<div class="gen-box warning">There was an error generating the text! Please try again!</div><div class="gen-border"></div>';
        $(html).appendTo('#model-output').hide().fadeIn("slow");
      }
    });
  });

});

function getInputValues() {
  var inputs = {};
  $("textarea, input").each(function() {
    inputs[$(this).attr('id')] = $(this).val();
  });
  return inputs;
}
