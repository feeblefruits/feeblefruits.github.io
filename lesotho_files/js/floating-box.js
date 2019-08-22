var contentList = [
	"Moses Mdluli sits on a cushion outside. His arms crossed around his chest. He holds on tightly and coughs a couple of times. \"It's especially bad in the winter,\" he says.",
	"His children sit on the porch and play a game of stone-toss-and-pick-up called kudoda. \"When I see them in the mornings, I\'m alive.\", Mdluli shares.",
	"The 55-year-old former mineworker from the twon Hlatikulu in Eswatini can\’t pace or walk more than 20 metres without wheezing. He often coughs up blood in the evenings.",
	"Silicosis or Worker\'s lung, as it\'s commonly known, made him redundant as a worker 14 years ago. \"They don't want skorokoro,\” he says talking about the South African gold mines.",
	"These days he can\'t lift a bucket of water. The Swati man started as a helper and eventually worked his way up to a line manager. \“As soon as they see you coughing they chase you away.\"",
	"Mdluli only has one of his lungs left and wheezes when he trudges. \“The one is fucked up,\” he says angrily.",
	"Close to Manzini in Eswatini lives Isaac Lukhele (75) who started working in South Africa\’s gold mines in 1962."
	];

var ts = new TwoStep({
    elements: document.querySelectorAll('.parent .cd-section'),
    onChange: function(event) {
    	// printing all content array items
    	for (let i = 0; i < contentList.length; i++) {
        	console.log(contentList[i]);
    	}
    },
    stick: document.querySelector('.parent .sticky-outer'),
    narrative: [
        function(event) {
            $('.parent .floating-box').html(contentList[0]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[1]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[2]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[3]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[4]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[5]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[6]);
        }
    ],
    offset: {
        up: '-80%',
        down: '80%'
    }
});