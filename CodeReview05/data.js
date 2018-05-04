var Persons = [
				{
				name: 'Amelie',
				surname: 'Doe',
				age: 25,
	   			myPhoto: "img/image1.jpg",	
				likes: 1	    // numeric property used to store likes
				},
				{
				name: 'Jane',
				surname: 'Doe',
				age: 25,
	   			myPhoto: "img/image2.jpg",	
				likes: 4    // numeric property used to store likes
				},
				{
				name: 'Maxina',
				surname: 'Musterman',
				age: 25,
	   			myPhoto: "img/image3.jpg",	
				likes: 6    // numeric property used to store likes
				},
				{
				name: 'Max',
				surname: 'Musterman',
				age: 25,
	   			myPhoto: "img/image4.jpg",	
				likes: 3    // numeric property used to store likes
				},
				{
				name: 'Peter',
				surname: 'Peterson',
				age: 27,
	   			myPhoto: "img/image5.jpg",	
				likes: 14    // numeric property used to store likes
				},
				{
				name: 'Marie',
				surname: 'Humberg',
				age: 21,
	   			myPhoto: "img/image6.jpg",	
				likes: 13    // numeric property used to store likes
				},
				{
				name: 'Mery',
				surname: 'Müller',
				age: 27,
	   			myPhoto: "img/image7.jpg",	
				likes: 14    // numeric property used to store likes
				}
		
];


var numberOfShownPersons = 7; // change the number of the shown Persons in the page.

function addHTML(){ // create persons HTML boxes  

	for (var i = 0; i < numberOfShownPersons; i++) {
		var personI = i + 1; 
		var html = `<div class="person-container person-`+ personI +`"><!-- **** Person 1 **** -->
					<div class="person-infos">
						<div class="person-img img-p`+ personI +`"></div>
						<div class="person-text">
							<ul>
								<li>
									<span>Name</span>
									<h3 class="name"></h3>
								</li>
								<li>
									<span>Surname</span>
									<h3 class="surname"></h3>
								</li>
								<li>
									<span>Age</span>
									<h3 class="age"></h3>
								</li>
							</ul>
						</div>
					</div>
					<div class="likes-div">
						<button class="like-btn">Like</button>
						<span class="likes-num"></span>
						<span class="likes-img"></span>
					</div>
					</div>`

			$('#content').append(html);
	}
}