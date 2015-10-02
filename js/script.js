
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
	
	var street = $('#street').val();
	var city = $('#city').val();
	var address = street + ', ' + city;
    // clear out old data before new request
    var streetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
	$body.append('<img class="bgimg" src="' + streetViewUrl + '">');
	$wikiElem.text("");
    $nytElem.text("");


    return false;
};

$('#form-container').submit(loadData);

