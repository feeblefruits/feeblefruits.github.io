var contentList = [
	"Monokoa Lepota is 61 years old from Maseru in Lesotho. He grows maize, pumpkins and, sometimes, wheat. He normally harvests between seven and eight bags of produce.",
	"He remembers it being unbearably hot and dusty underground in the mines, they would spray underground with water every two weeks to try to get the dust to settle.",
	"Lepota also provides for his two married sons who have moved out of the village. If he receives a payout in the settlement, he intends to buy a milling machine. This would allow him to mill the produce for the village and earn an adequate income.",
	"Medication is expensive and — for many people living in rural areas — difficult to come by.",
	"Mankosana Makhorolane lost her husband, Moliki, who used to work in the mines, three years ago. He was 51 years old and used to make a four-hour journey home every month to visit his wife and children, always bringing money with him.",
	"Moliki was released from the mines in 2010, following a silicosis diagnosis. His condition began worsening three years after he stopped working, and he died in 2016.",
	"Mankosana says Moliki was distraught that he was no longer able to work at the mine and provide for his family and that \“his lungs were no longer to carry him\”."
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