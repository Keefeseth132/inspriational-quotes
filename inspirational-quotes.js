$(document).on('ready', function(){

var quotes = [{
	author : 'Joseph Campbell',
	quote : 'Find a place inside where there is joy, and the joy will burn out the pain.',
	rating : 3
}, 
{
	author : 'Willie Nelson',
	quote : 'Once you replace negative thoughts with positive ones, you will start having positive results',
	rating : 4
},
{
	author : 'William James',
	quote : 'Believe that life is worth living and your beliefe will help create the fact',
	rating : 5 
}]

var updateDom = function(){
	for(var i = 0; i < quotes.length; i++){
		var updateAuthor =  '<p>' + ' - ' + quotes[i].author + '</p>' + '\n' + '<span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <hr> </div>' + '</div>'
		var updateQuote = '<div class="quote-container">' + '<h3>' + quotes[i].quote + '</h3>' 
		$('.bottom-container').append(updateQuote + updateAuthor)
	}
}
updateDom()

$('#random-quote').on('click', function(){
	var randomQuote = _.sample(quotes)
	
	var authorEL = randomQuote.author
	var quoteEL = randomQuote.quote
	var outPut = $('<div class="quote-container">' + '<h3>' + quoteEL + '</h3>' + '<p>' + ' - ' + authorEL + '</p>' + '\n' + '<span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> </div>')
	
	$('.random-quote-box').html(outPut)
})

$('#delete').on('click', function(){
	$(".bottom-container").children("div[class=quote-container]:last").remove();
});


$('.submit').on('click', function(){
	 var quoteBox = $('.text-box').val()
	 var authorBox = $('.input-size').val() 
	 var outPut = $('<div class="quote-container">' + '<h3>' + quoteBox + '</h3>' + '<p>' + ' - ' + authorBox + '</p>' + '\n' + '<span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <span class="star-color">&star;</span> <hr> </div>')

	$('.bottom-container').append(outPut)	
	$('.text-box').val('')
	$('.input-size').val('')
	
	quotes.push({
	author : authorBox,
	quote : quoteBox,
	rating : 0
})
	var starRating = function(){

	}
})

var sortList = function(list){
	return _.sortBy(list, 'rating').reverse()
}
// console.log(sortList(quotes))



	






























});