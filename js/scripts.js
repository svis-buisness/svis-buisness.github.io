$(function () {
  // $('#exampleModal').modal('show');
  $('#contactForm').submit(function (event) {
    sendContactForm(event);
    console.log('working')
    return false;
   });
  $('.header__form form input').keyup(function () {
    var header__form_button = $('.header__form button');
    //
    $('.header__form form').find('input[type="text"]').each(function () {
      //
      if (($(this).val() == '')) {
        header__form_button.css('opacity', '.7').attr('disabled', 'disabled');
      }
      else {
        header__form_button.css('opacity', '1').removeAttr('disabled');
      }
    });
  });
  //
  $('.header__form_tablet form input').keyup(function () {
    var header__form_tablet_button = $('.header__form_tablet button');
    //
    $('.header__form_tablet form').find('input[type="text"]').each(function () {
      //
      if (($(this).val() == '')) {
        header__form_tablet_button.css('opacity', '.7').attr('disabled', 'disabled');
      }
      else {
        header__form_tablet_button.css('opacity', '1').removeAttr('disabled');
      }
    });
  });
  // // Mask
  // // $("#phone, #phone1").inputmask({'mask': '+7 (999) 999-9999'});

  // /*
  // $('.header__form form, .header__form_tablet form').submit(function (e) {
  //   e.preventDefault();
  //   $.ajax({
  //     type: 'POST',
  //     url: $(this).attr('action'),
  //     data: $(this).serialize()
  //   }).done(function () {
  //     var $modal = $('.modal');
  //     $modal.modal('show');
  //     $modal.on('hide.bs.modal', function (e) {
  //       $('.header__form form input, .header__form_tablet form input').val('');
  //       $('.modal-backdrop').remove()
  //     })
  //   });
  // });
  // */

  $('button.tariff__button_scroll').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.header__form__button_target').offset().top
    }, 2000);
  });
});

async function sendContactForm(event) {
  var form = document.getElementById("contactForm");

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        $('#exampleModal').modal('show');
      }).catch(error => {
        console.log( "Oops! There was a problem submitting your form")
      });
}