//coded by Lovepreet kaur
		
function cover() {
  $('.gallery input').click(function() {
			var checker = $(this).prop('checked');
			$('.gallery input:checked').prop('checked',false);
			if(checker) $(this).prop('checked',true);
		});
}