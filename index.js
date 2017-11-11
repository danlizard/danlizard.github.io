$(document).ready(function() {
	$("p.ntxt").click(function () {
		var a = $(this).attr('id');
		a = "#" + a;
		$(a).toggleClass("fin");
	});
	$("img.icg").click(function () {
		var a = $(this).attr('id');
		a = "#" + a;
		$(a).remove();
	});
	$("img.dbut").click(function () {
		$('.fin').remove();
	});
	var idn = 4;
	$("#btndd").click(function () {
		var a = $('textarea#addnote').val();
		$('textarea#addnote').val('');
		var newn = confirm("Are you sure?");
		if (newn) {
			var nidn = "n" + idn;
			var S = '<div class="note" id="' + nidn + '"><table><tr><td><img src="garbage-img.png" class="icg" id="n1"></td><td><p class="title-ish ntxt" id="' + nidn + '">' + a + '</p></td></tr></table></div>';
			$('#holder').append(S);
			idn = idn + 1;
		};
	});
});