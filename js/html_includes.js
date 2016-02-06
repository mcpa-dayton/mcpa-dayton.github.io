
function load_includes() {
		// Load Header
		$.get( "includes/navbar.html", function( data ) {
	  	$("#navbar").html(data);
		});

		// Load Footer
		$.get( "includes/footer.html", function( data ) {
	  	$("#footer").html(data);
		});
}

