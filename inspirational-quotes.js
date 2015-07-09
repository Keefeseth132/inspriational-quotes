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

var arr = []
$('#random-quote').on('click', function(){
	var randomQuote = _.sample(quotes)
		arr.push(randomQuote)
		console.log(arr)
})



$('#delete').on('click', function(){
	console.log('delete clicked')
})

$('.submit').on('click', function(){
	 var quoteBox = $('.text-box').val()
	 var authorBox = $('.input-size').val() 
	 var outPut = $('<div class="quote-container">' + quoteBox + ' - ' + authorBox + '<span class="star-color">&#9733;&#9733;&#9733;&star;&star;</span> </div>' )
	$('.bottom-container').append(outPut)	
	$('.text-box').val('')
	$('.input-size').val('')
})

var sortList = function(list){
	return _.sortBy(list, 'rating').reverse()
}
console.log(sortList(quotes))



	






























});