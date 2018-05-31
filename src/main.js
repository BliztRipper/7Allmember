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
        var btnClass = document.getElementById("check-invalid");
        btnClass.setAttribute("disabled", "disabled");
        btnClass.classList.add("btn-secondary");
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          btnClass.removeAttribute("disabled");
          btnClass.classList.remove("btn-secondary");
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



/* Signature Section */
$('.js-signature').jqSignature();
$('.js-signature').on('jq.signature.changed', function () {
  $('.next--btn').attr('disabled', false);
  $('.next--btn').removeClass('btn-secondary');
});

function clearCanvas() {
  $('.js-signature').jqSignature('clearCanvas');
  $('.next--btn').attr('disabled', true);
  $('.next--btn').addClass('btn-secondary');
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



