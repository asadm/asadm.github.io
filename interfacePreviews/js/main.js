$('#btn_addpost').on('click',function(){
	/*
	If we append anything to the container, The dummy placeholders will automatically be hidden.
	*/
	var clone = $('#template-realtile').clone();
	clone.removeClass('hidden');
	$('#tilecontainer').append(clone);
});

$('#btn_loaded').on('click',function() {
	/*
	.hasLoaded();
	This should be called when loading has finished. 
	So if there is no real items inside the container. The script will hide placeholders and 
	show [data-loading="empty"] element.

	Nothing happens if container has elements.
	*/

	$('#tilecontainer').hasLoaded();
});

$('#btn_clear').on('click',function(){
	/*
	When we delete all items from container, the script will automatically show [data-loading="empty"] element.
	*/
	$('#tilecontainer .realtile').remove();
});