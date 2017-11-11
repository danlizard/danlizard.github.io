$(document).ready(function() {
	$(document).on("click", "p.ntxt", function () {
		var a = $(this).attr('id');
		a = "#" + a;
		$(a).toggleClass("fin");
	});
	$(document).on("click", "img.icg", function () {
		var a = $(this).attr('id');
		a = "#" + a;
		$(a).remove();
	});
	$("img.dbut").click(function () {
		$('.fin').remove();
	});
	$(document).on("click", "img.rewr", function () {
		var i = $(this).attr('id');
		var a = $('textarea#addnote').val();
		$('textarea#addnote').val('');
		var newn = confirm("Are you sure?");
		if (newn) {
			var S = '<div class="note" id="' + i + '"><table><tr><td><img src="rewrite-img.png" class="rewr" id="' + i + '"></td><td><img src="garbage-img.png" class="icg" id="' + i + '"></td><td><p class="ntxt" id="' + i + '">' + a + '</p></td></tr></table></div>'
			localStorage.setItem(i, S)
			document.getElementById(i).innerHTML = '<table><tr><td><img src="rewrite-img.png" class="rewr" id="' + i + '"></td><td><img src="garbage-img.png" class="icg" id="' + i + '"></td><td><p class="ntxt" id="' + i + '">' + a + '</p></td></tr></table>';
		};
	});
	var idn = 4;
	$("#btndd").click(function () {
		var a = $('textarea#addnote').val();
		$('textarea#addnote').val('');
		var newn = confirm("Are you sure?");
		if (newn) {
			var nidn = "n" + idn;
			var S = '<div class="note" id="' + nidn + '"><table><tr><td><img src="rewrite-img.png" class="rewr" id="' + nidn + '"></td><td><img src="garbage-img.png" class="icg" id="' + nidn + '"></td><td><p class="ntxt" id="' + nidn + '">' + a + '</p></td></tr></table></div>';
			localStorage.setItem(nidn, S)
			$('#holder').append(S);
			idn = idn + 1;
		};
	});
});