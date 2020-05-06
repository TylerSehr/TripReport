class TripReport {
	constructor(title, substance, set, setting, description, insights, afterglow) {
		this.title = title
		this.substance = substance
		this.set = set
		this.setting = setting
		this.description = description
		this.insights = insights
		this.afterglow = afterglow
	}

	static buildTripReport(tripData) {
		if (tripData.title
			&& tripData.substance
			&& tripData.dosage
			&& tripData.set
			&& tripData.setting
			&& tripData.intensity
			&& tripData.summary
			&& tripData.insights
			&& tripData.afterglow) {	
			return new TripReport(
				tripData.title,
				{ substance: tripData.substance, dosage: tripData.dosage },
				tripData.set,
				tripData.setting,
				{ intensity: tripData.intensity, summary: tripData.summary },
				tripData.insights,
				tripData.afterglow
			)
		}
		else {
			return null
		}

	}

}


export default TripReport