$(document).ready(function() {
	$("#btndd").click(function () {
		var a = $('textarea#addnote').val();
		$('textarea#addnote').val('');
		var newn = confirm("Are you sure?");
		if (newn) {
			var S = '<div class="note"><p>' + a + '</p></div>';
			$('#holder').append(S);
		};
	});
});