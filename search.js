function SearchCameraId(cameraId) { 
	SetElementInnerHTML("search_value", "Search by Camera ID"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if(cameraId && cameraId.length > 0) {
		var searchingCameraId;
		var matchNumber = 0;
        
		for(var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingCameraId = obj.id;

			if(searchingCameraId == cameraId) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if(newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_camera_id", obj.id);
					SetTemplateElementValue(newCard, "card_detail_location", obj.description);
					SetTemplateElementValue(newCard, "card_quadrant_location", obj.quadrant);
					SetTemplateElementValue(newCard, "card_community_name", obj.community);
					SetTemplateElementValue(newCard, "link_map",
					`<a href="https://www.google.com/maps/place/${obj.latitude},${obj.longitude}" target="_blank">
						View in Google Maps</a>`);

					AddTemplateToCollection("cards", newCard);
				} else {
					console.log(`Could not create new card template`);
				}

				matchNumber++;
			}
		}

		if(matchNumber == 0) {
			SetElementInnerHTML("cards", `No matches found for '${cameraId}'`);
		}
	}
}

function SearchQuadrantLocation(quadrantLocation) { 
	SetElementInnerHTML("search_value", "Search by Quadrant Location"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if(quadrantLocation && quadrantLocation.length > 0) {
		var searchingQuadrantLocation;
		var matchNumber = 0;
        quadrantLocation = quadrantLocation.toLowerCase();

		for(var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingQuadrantLocation = obj.quadrant.toLowerCase();

			if(searchingQuadrantLocation == quadrantLocation) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if(newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_camera_id", obj.id);
					SetTemplateElementValue(newCard, "card_detail_location", obj.description);
					SetTemplateElementValue(newCard, "card_quadrant_location", obj.quadrant);
					SetTemplateElementValue(newCard, "card_community_name", obj.community);
					SetTemplateElementValue(newCard, "link_map",
					`<a href="https://www.google.com/maps/place/${obj.latitude},${obj.longitude}" target="_blank">
						View in Google Maps</a>`);

					AddTemplateToCollection("cards", newCard);
				} else {
					console.log(`Could not create new card template`);
				}

				matchNumber++;
			}
		}

		if(matchNumber == 0) {
			SetElementInnerHTML("cards", `No matches found for '${quadrantLocation}'`);
		}
	}
}

function SearchDetailLocation(detailLocation) {
	SetElementInnerHTML("search_value", "Search by Detail Location");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if(detailLocation && detailLocation.length > 0) {
		var searchingDetailLocation; 
		var matchNumber = 0;
		detailLocation = detailLocation.toLowerCase();

		for(var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingDetailLocation = obj.description.toLowerCase();

			var foundAt = searchingDetailLocation.indexOf(detailLocation);

			if(foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if(newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_camera_id", obj.id);
					SetTemplateElementValue(newCard, "card_detail_location", obj.description);
					SetTemplateElementValue(newCard, "card_quadrant_location", obj.quadrant);
					SetTemplateElementValue(newCard, "card_community_name", obj.community);
					SetTemplateElementValue(newCard, "link_map",
					`<a href="https://www.google.com/maps/place/${obj.latitude},${obj.longitude}" target="_blank">
						View in Google Maps</a>`);
					
					AddTemplateToCollection("cards", newCard);
				} else {
					console.log(`Could not create new card template`);
				}

				matchNumber++;
			}
		}

		if (matchNumber == 0) {
			SetElementInnerHTML("cards", `No matches found for '${detailLocation}'`);
		}
	}
}

function SearchCommunityName(communityName) {
	SetElementInnerHTML("search_value", "Search by Community Name");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if(communityName && communityName.length > 0) {
		var searchingCommunityName; 
		var matchNumber = 0;
		communityName = communityName.toLowerCase();

		for(var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingCommunityName = obj.community.toLowerCase();

			if(searchingCommunityName.startsWith(communityName)) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if(newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_camera_id", obj.id);
					SetTemplateElementValue(newCard, "card_detail_location", obj.description);
					SetTemplateElementValue(newCard, "card_quadrant_location", obj.quadrant);
					SetTemplateElementValue(newCard, "card_community_name", obj.community);
					SetTemplateElementValue(newCard, "link_map",
					`<a href="https://www.google.com/maps/place/${obj.latitude},${obj.longitude}" target="_blank">
						View in Google Maps</a>`);
					
					AddTemplateToCollection("cards", newCard);
				} else {
					console.log(`Could not create new card template`);
				}

				matchNumber++;
			}
		}

		if (matchNumber == 0) {
			SetElementInnerHTML("cards", `No matches found for '${communityName}'`);
		}
	}
}
