//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/jq-signature/jq-signature.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js

/*Form Validation*/
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/* Signature Section */
$('.js-signature').jqSignature();
function clearCanvas() {
  $('.js-signature').jqSignature('clearCanvas');
}
function saveCanvas() {
  var signature = $('.js-signature').jqSignature('getDataURL');
  console.log(signature);
  window.location.href = 'https://www.google.co.th/'
}

/*OTP auto focus*/
$(".otp input").keyup(function () {
  if ($(this).val().length >= 1) {
    var input_flds = $(this).closest('form').find(':input');
    input_flds.eq(input_flds.index(this) + 1).focus();
  }
});