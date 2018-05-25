//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/jq-signature/jq-signature.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/cleave.js/dist/cleave.min.js 

/*Form Validation*/
(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('keyup', function (event) {
        document.getElementById("check-invalid").setAttribute("disabled", "disabled");
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          document.getElementById("check-invalid").removeAttribute("disabled");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$('#styled-checkbox-2').click(function(){
  var $list = $('.next--btn');
  if ($list.attr('disabled')) {
    $list.removeAttr('disabled');
  } else {
    $list.attr('disabled', 'disabled');
  }
})

// $('js-signature').click(function (e) {
//   $('button.btn.next--btn').removeAttr('disabled')
// })

/* Signature Section */
$('.js-signature').jqSignature();
function clearCanvas() {
  $('.js-signature').jqSignature('clearCanvas');
}
function saveCanvas() {
  var signature = $('.js-signature').jqSignature('getDataURL');
  console.log(signature);
  window.location.href = 'otp.html'
}

/*OTP auto focus*/
$(".otp input").keyup(function () {
  if ($(this).val().length >= 1) {
    var input_flds = $(this).closest('form').find(':input');
    input_flds.eq(input_flds.index(this) + 1).focus();
  }
});



