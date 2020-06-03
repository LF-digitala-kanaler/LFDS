
  $(document).ready(function() {
  $('.datepicker').datetimepicker({
    inline: true,
    locale: 'sv',
    format: 'YYYY-MM-DD',
    allowInputToggle: true
  });
  $('.datepicker').on('dp.show', function(){
    $('#datepicker-input .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
    $('.datepicker button').addClass('active');
  });

  $('.datepicker').on('dp.hide', function(){
      $('.datepicker button').removeClass('active');
    });
    $('#datetimepicker-disabled', document).datetimepicker({
    format: 'YYYY-MM-DD',
    locale: 'sv',
    allowInputToggle: true,
    defaultDate: '2017/06/02',
    disabledDates: [
      '2017/06/04',
      '2017/06/05',
      '2017/06/06'
    ]
  });
  $('.datepicker', document).on('dp.show', function(){
    $('datetimepicker-disabled-input .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
    $('.datepicker button').addClass('active');
  });

  $('.datepicker', document).on('dp.hide', function(){
    $('.datepicker button').removeClass('active');
  });
  });
