var contentList = [
    "Tens of thousands of former mineworkers and their families survive today; many are sickly and live in remote, rural areas across Southern Africa.",
  	"One of them is <p>Moses Mdluli</p>. It\’s a hot winter\’s day and the mountains of Eswatini sprawl out in front of him. With his arms crossed over his chest, he holds on tightly and coughs painfully. \“It\’s especially bad in the winter,\” he says.",
    "His children sit on the porch and play a game of stone-toss-and-pick-up called kudoda. \"When I see them in the mornings, I\’m alive,\” <p>Mdluli</p> says.",
  	"The mountain air is fresh but the 55-year-old former mineworker from the town of Hlathikhulu can\’t walk more than 20m without wheezing. In the evenings he coughs up blood and often has to catch his breath mid-sentence.",
  	"Small dust particles breathed in while cutting and grinding through the depth of the Earth at the Western Areas gold mine have led to him contracting silicosis. He was made redundant 14 years ago. \“The mines don’t want iskorokoro,\” he says.",
  	"These days <p>Mdluli</p> can\'t lift a bucket of water. The Swati man started as a helper in the <p>Joel Mine</p> in the Free State and eventually worked his way up to line manager. \“As soon as they see you coughing they chase you away.\” he says.",
  	"<p>Mdluli</p> only has one lung left and wheezes when he trudges. \“The one is fucked up,\” he says angrily.",
  	"<p>Isaac Lukhele</p> lives close to Manzini in Eswatini. He started working at South Africa\’s gold mines in 1962. He worked at 15 different mines, often going deeper than 2,000m.",
  	"\“When I was retrenched from the mines in 2004, the doctors told me I will be compensated in Eswatini. But nothing happened,\” Lukhele recalls.",
  	"\“Treatment wasn\’t really good [at the mines]. We were not treated like human beings,\” he says. \“There used to be 50 people in one dormitory.\”",
    "Today, <p>Lukhele</p> supports his family through farming. He has a handful of goats and chickens and he\’s saving money to build a shelter for his livestock. <p>Lukhele</p> receives a monthly pension of R400 from the Eswatini government.",
    "<p>Dumisile Dlamini</p> works at Hlathikhulu\’s occupational health service centre in Eswatini. She says that treatments are expensive and difficult to come by for struggling patients.",
    "\“In Eswatini, you\’ll find that many of the patients are difficult to reach,\” she says. \“Many of them are older and sick.\”",
    "Tuberculosis is very common among people who\’ve contracted silicosis and can be passed on to close friends and family. \“As you know, men are leaders of the households.\” <p>Dlamini</p> says."
	];

var ts = new TwoStep({
    elements: document.querySelectorAll('.parent .cd-section'),
    onChange: function(event) {
    	// printing all content array items
    	for (let i = 0; i < contentList.length; i++) {
        	// console.log(contentList[i]);
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
            $('.parent .floating-box').html(contentList[7]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[8]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[9]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[10]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[11]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[12]);
        },
        function(event) {
            $('.parent .floating-box').html(contentList[13]);
        }
    ],
    offset: {
        up: '-80%',
        down: '80%'
    }
});
