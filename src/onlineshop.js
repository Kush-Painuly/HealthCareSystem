$(function() {
    var minPrice = 0;
    var maxPrice = 1000;
    
    $("#price-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [minPrice, maxPrice],
      slide: function(event, ui) {
        $("#min-price").val(ui.values[0]);
        $("#max-price").val(ui.values[1]);
      }
    });
    
    $("#min-price").val($("#price-range").slider("values", 0));
    $("#max-price").val($("#price-range").slider("values", 1));
  });

/*sortby dropdown*/
  $(document).ready(function() {
    $('#department-filter').on('change', function() {
      var selectedDepartment = $(this).val();
      if (selectedDepartment === '') {
        $('.department-list li').show();
      } else {
        $('.department-list li').each(function() {
          var text = $(this).text().toLowerCase();
          if (text === selectedDepartment) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      }
    });
  });