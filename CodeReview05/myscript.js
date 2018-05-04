
addHTML(); // create the HTML persons Boxes 

$(document).ready(function() {
	
	var personsContaier = $('.person-container');
	var selectMenu = $('#sort-select');
	var addLikesBtn = $('.like-btn').on('click', addLikes); // call function addLikes onclick
	var sortListAction = $('#sort-select').change(sortOptions); // call the sort options validator 
	

	
	function setPersonsData(){   // Loop through the html divs and print 
								// the provided person's infos from data.js
		
		for (var i = 1; i < personsContaier.length +1; i++) {
			var personI = (i - 1); // retrun the i value to '0' as index of Persons

			var setPersonImg = $('.person-' + i + ' .img-p' + i).css('background-image', 'url(' + Persons[personI].myPhoto + ')');
			var setPersonName = $('.person-' + i + ' .name').text(Persons[personI].name);
			var setPersonSurname = $('.person-' + i + ' .surname').text(Persons[personI].surname);
			var setPersonAge = $('.person-' + i + ' .age').text(Persons[personI].age);
			var setPersonLikes = $('.person-' + i + ' .likes-num').text(Persons[personI].likes);
			var setDataToLikeBtn = $('.person-' + i + ' .like-btn').attr({ 
				'data-name': Persons[personI].name,		
				'data-surname': Persons[personI].surname 
			}); // set Persons data to likes button to make it easier to use when
				// we compare inside addLikes() function 
		}			
	}
	setPersonsData();


	function sortOptions(){ // validates the option values and call the spacific sort functions 

		var refreshBtn = $('#refresh').length;
		var chosenOption = this.options[this.selectedIndex];
		if (chosenOption.value == 'by-likes') {
			sortByLikes();
		} else if (chosenOption.value == 'by-name') {
			sortByName();
			$('#refresh').css('visibility', 'hidden');
		} else {
			$('#refresh').css('visibility', 'hidden');
		}
	}


	function sortByLikes(){ 

		Persons.sort(function(a,b){ // sort the Persons index depending on thier likes value
				var likesA = a.likes; 
				var likesB = b.likes; 
				return likesB - likesA;
			});
		setPersonsData(); // update HTML with the new sort 
		refreshLikesSort() // create button 
	}											

	function sortByName(){
		Persons.sort(function(a,b){ // sort the Persons index depending on thier name value
				var nameA = a.name; 
				var nameB = b.name; 
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
			});
		setPersonsData(); // update HTML with the new sort 
	}

	function refreshLikesSort(){
	
		$('#refresh').css('visibility', 'visible');

		$('#refresh').on('click', sortByLikes); // call the function again when we click on 
	}											// refresh button to update the new likes value
	
	
	function addLikes() { // compare the saved data of the clicked like button with
						  // the matched person in Persons object and increase its likes value  
		
		var thisPersonName = $(this).attr('data-name');
		var thisPersonSurname = $(this).attr('data-surname');

		for (var i = 0; i < Persons.length; i++) {
			if (thisPersonName == Persons[i].name && 
				thisPersonSurname == Persons[i].surname) {
				Persons[i].likes ++;
				updatePersonsLikes(); 
			}
		}
	}



	function updatePersonsLikes(){
		for (var i = 1; i < personsContaier.length +1; i++) {
			var personI = (i - 1); // retrun the i value to '0' as index of Persons
			$('.person-' + i + ' .likes-num').text(Persons[personI].likes);
		}

	}

	

	

});


