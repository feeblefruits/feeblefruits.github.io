var contentList = [
	"Moses Mdluli sits on a cushion outside. His arms crossed around his chest. He holds on tightly and coughs a couple of times. \"It's especially bad in the winter,\" he says.",
	"His children sit on the porch and play a game of stone-toss-and-pick-up called kudoda. \"When I see them in the mornings, I\'m alive.\", Mdluli shares.",
	"The 55-year-old former mineworker from the twon Hlatikulu in Eswatini can\’t pace or walk more than 20 metres without wheezing. He often coughs up blood in the evenings.",
	"Silicosis or Worker\'s lung, as it\'s commonly known, made him redundant as a worker 14 years ago. \"They don't want skorokoro,\” he says talking about the South African gold mines.",
	"These days he can\'t lift a bucket of water. The Swati man started as a helper and eventually worked his way up to a line manager. \“As soon as they see you coughing they chase you away.\"",
	"Mdluli only has one of his lungs left and wheezes when he trudges. \“The one is fucked up,\” he says angrily.",
	"Close to Manzini in Eswatini lives Isaac Lukhele (75) who started working in South Africa\’s gold mines in 1962.",
	"\“When I was retrenched from the mines in 2004, the doctors told me I will be compensated in Eswatini. But nothing has happened,\” Lukhele recalls.",
	"He says that in 1962 he used to earn 25 cents a day. \“Treatment wasn\’t really good. We were not treated like human beings,\” he says. There used to be 50 people in one dormatory.",
	"Today, Lukhele supports his family by farming with a handful of goats and chickens. He\'s saving money to build a shelter for his livestock and receives a monthly pension of R400 from government.",
	"Dumisile Dlamini is from Hlathikhulu's occupational health service centre Eswatini. She explains that treatments are expensive and difficult to come by for struggling patients.",
	"\“In Eswatini you’ll find that many of the patients are difficult to reach,\” explains Dlamini. \“Many of them are older.",
	"Tuberculosis is very common among those who\’ve contracted silicosis and can contaminate close friends and family. \“As you know men are leaders of the households.\” Dlamini says.",
	"Mdluli and Lukhele are part of tens of thousands former mine workers. Of those surviving today, many are sickly and live in remote, rural areas across Southern Africa."
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
        },
        function(event) {
            $('.parent .floating-box').text(contentList[7]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[8]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[9]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[10]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[11]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[12]);
        },
        function(event) {
            $('.parent .floating-box').text(contentList[13]);
        }
    ],
    offset: {
        up: '-80%',
        down: '80%'
    }
});