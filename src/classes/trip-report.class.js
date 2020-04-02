class TripReport {
	constructor(trip){
		this.trip = trip
	}

	static buildTripReport(trip){
		return new TripReport(trip)
	}

}

export default TripReport