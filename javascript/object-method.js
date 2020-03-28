let restaurant = {
	name :'ASB',
	guestCapacity:75,
	guestCount:0,
	checkAvailability : function (partySize){
	console.log(this.guestCapacity)
		return true
	}
}

restaurant.checkAvailability(4)


