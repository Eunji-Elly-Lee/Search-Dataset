var dataSet = [];

function SearchCameraId(cameraId) { 
	SetElementInnerHTML("search_value", "Search by Camera ID"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if (cameraId && cameraId.length > 0) {
		var searchingCameraId;
		var matchNumber = 0;
        
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingCameraId = obj.id;

			if (searchingCameraId == cameraId) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
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
			SetElementInnerHTML("cards", `No matches found for '${cameraId}'`);
		}
	}
}

function SearchQuadrantLocation(quadrantLocation) { 
	SetElementInnerHTML("search_value", "Search by Quadrant Location"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if (quadrantLocation && quadrantLocation.length > 0) {
		var searchingQuadrantLocation;
		var matchNumber = 0;
        quadrantLocation = quadrantLocation.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingQuadrantLocation = obj.quadrant.toLowerCase();

			if (searchingQuadrantLocation == quadrantLocation) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
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
			SetElementInnerHTML("cards", `No matches found for '${quadrantLocation}'`);
		}
	}
}

function SearchDetailLocation(detailLocation) {
	SetElementInnerHTML("search_value", "Search by Detail Location");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (detailLocation && detailLocation.length > 0) {
		var searchingDetailLocation; 
		var matchNumber = 0;
		detailLocation = detailLocation.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingDetailLocation = obj.description.toLowerCase();

			var foundAt = searchingDetailLocation.indexOf(detailLocation);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
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

	if (communityName && communityName.length > 0) {
		var searchingCommunityName; 
		var matchNumber = 0;
		communityName = communityName.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingCommunityName = obj.community.toLowerCase();

			if (searchingCommunityName.startsWith(communityName)) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
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

function SearchBuildingPermitNumber(buildingPermitNumber) { 
	SetElementInnerHTML("search_value", "Search by Permit Number"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if (buildingPermitNumber && buildingPermitNumber.length > 0) {
		var searchingBuildingPermitNumber; 
		var matchNumber = 0;
        buildingPermitNumber = buildingPermitNumber.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingBuildingPermitNumber = obj.permitnum.toLowerCase();

			if (searchingBuildingPermitNumber == buildingPermitNumber) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);
				var currencyOfCanada = {
					style: "currency", currency: "CAD"
				};

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_building_permit_number", obj.permitnum);
					SetTemplateElementValue(newCard, "card_applied_date", obj.applieddate.slice(0, 10));
					SetTemplateElementValue(newCard, "card_permit_type", obj.permittype);
					SetTemplateElementValue(newCard, "card_permit_class", obj.permitclass);
					SetTemplateElementValue(newCard, "card_permit_group", obj.permitclassgroup);
					SetTemplateElementValue(newCard, "card_permit_description", obj.description);
					SetTemplateElementValue(newCard, "card_project_cost",
						(obj.estprojectcost * 1).toLocaleString("en-CA", currencyOfCanada));
					SetTemplateElementValue(newCard, "card_building_address", obj.originaladdress);
					SetTemplateElementValue(newCard, "card_community_name", obj.communityname);
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
			SetElementInnerHTML("cards", `No matches found for '${buildingPermitNumber}'`);
		}
	}
}

function SearchAppliedDate(appliedDate) { 
	SetElementInnerHTML("search_value", "Search by Applied Date"); 
	ToggleClassState("output_field", "hidden", false); 
	ClearTemplateCollection("cards");

	if (appliedDate && appliedDate.length > 0) {
		var searchingAppliedDate; 
		var matchNumber = 0;

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingAppliedDate = obj.applieddate.slice(0, 10);

			if (searchingAppliedDate == appliedDate) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);
				var currencyOfCanada = {
					style: "currency", currency: "CAD"
				};

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_building_permit_number", obj.permitnum);
					SetTemplateElementValue(newCard, "card_applied_date", obj.applieddate.slice(0, 10));
					SetTemplateElementValue(newCard, "card_permit_type", obj.permittype);
					SetTemplateElementValue(newCard, "card_permit_class", obj.permitclass);
					SetTemplateElementValue(newCard, "card_permit_group", obj.permitclassgroup);
					SetTemplateElementValue(newCard, "card_permit_description", obj.description);
					SetTemplateElementValue(newCard, "card_project_cost",
						(obj.estprojectcost * 1).toLocaleString("en-CA", currencyOfCanada));
					SetTemplateElementValue(newCard, "card_building_address", obj.originaladdress);
					SetTemplateElementValue(newCard, "card_community_name", obj.communityname);
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
			SetElementInnerHTML("cards", `No matches found for '${appliedDate}'`);
		}
	}
}

function SearchPermitKeyword(permitKeyword) {
	SetElementInnerHTML("search_value", "Search by Permit Keyword");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (permitKeyword && permitKeyword.length > 0) {
		var searchingPermitType; 
		var searchingPermitClass;
		var searchingPermitGroup;
		var matchNumber = 0;
		permitKeyword = permitKeyword.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingPermitType = obj.permittype.toLowerCase();
			searchingPermitClass = obj.permitclass.toLowerCase();			
			searchingPermitGroup = obj.permitclassgroup.toLowerCase();

			var foundAtType = searchingPermitType.indexOf(permitKeyword);
			var foundAtClass = searchingPermitClass.indexOf(permitKeyword);
			var foundAtGroup = searchingPermitGroup.indexOf(permitKeyword);

			if (foundAtType > -1 || foundAtClass > -1 || foundAtGroup > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);
				var currencyOfCanada = {
					style: "currency", currency: "CAD"
				};

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_building_permit_number", obj.permitnum);
					SetTemplateElementValue(newCard, "card_applied_date", obj.applieddate.slice(0, 10));
					SetTemplateElementValue(newCard, "card_permit_type", obj.permittype);
					SetTemplateElementValue(newCard, "card_permit_class", obj.permitclass);
					SetTemplateElementValue(newCard, "card_permit_group", obj.permitclassgroup);
					SetTemplateElementValue(newCard, "card_permit_description", obj.description);
					SetTemplateElementValue(newCard, "card_project_cost",
						(obj.estprojectcost * 1).toLocaleString("en-CA", currencyOfCanada));
					SetTemplateElementValue(newCard, "card_building_address", obj.originaladdress);
					SetTemplateElementValue(newCard, "card_community_name", obj.communityname);
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
			SetElementInnerHTML("cards", `No matches found for '${permitKeyword}'`);
		}
	}
}

function SearchBuildingAddress(buildingAddress) {
	SetElementInnerHTML("search_value", "Search by Address");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (buildingAddress && buildingAddress.length > 0) {
		var searchingBuildingAddress; 
		var matchNumber = 0;
		buildingAddress = buildingAddress.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingBuildingAddress = obj.originaladdress.toLowerCase();

			var foundAt = searchingBuildingAddress.indexOf(buildingAddress);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);
				var currencyOfCanada = {
					style: "currency", currency: "CAD"
				};

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_building_permit_number", obj.permitnum);
					SetTemplateElementValue(newCard, "card_applied_date", obj.applieddate.slice(0, 10));
					SetTemplateElementValue(newCard, "card_permit_type", obj.permittype);
					SetTemplateElementValue(newCard, "card_permit_class", obj.permitclass);
					SetTemplateElementValue(newCard, "card_permit_group", obj.permitclassgroup);
					SetTemplateElementValue(newCard, "card_permit_description", obj.description);
					SetTemplateElementValue(newCard, "card_project_cost",
						(obj.estprojectcost * 1).toLocaleString("en-CA", currencyOfCanada));
					SetTemplateElementValue(newCard, "card_building_address", obj.originaladdress);
					SetTemplateElementValue(newCard, "card_community_name", obj.communityname);
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
			SetElementInnerHTML("cards", `No matches found for '${buildingAddress}'`);
		}
	}
}

function SearchAssetCode(assetCode) {
	SetElementInnerHTML("search_value", "Search by Asset Code");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (assetCode && assetCode.length > 0) {
		var searchingAssetCode; 
		var matchNumber = 0;
		assetCode = assetCode.toUpperCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingAssetCode = obj.asset_cd;

			if (searchingAssetCode == assetCode) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_asset_cd", obj.asset_cd);
					SetTemplateElementValue(newCard, "card_asset_type", obj.asset_type);
					SetTemplateElementValue(newCard, "card_type_description", obj.type_description);
					SetTemplateElementValue(newCard, "card_minortype", obj.minortype);
					SetTemplateElementValue(newCard, "card_steward", obj.steward);
					SetTemplateElementValue(newCard, "card_maintained_by", obj.maintained_by);				
					SetTemplateElementValue(newCard, "card_status", obj.life_cycle_status);
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
			SetElementInnerHTML("cards", `No matches found for '${assetCode}'`);
		}
	}
}

function SearchTypeNumber(typeNumber) {
	SetElementInnerHTML("search_value", "Search by Type Number");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (typeNumber && typeNumber.length > 0) {
		var searchingTypeNumber; 
		var matchNumber = 0;

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingTypeNumber = obj.asset_type;

			if (searchingTypeNumber == typeNumber) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_asset_cd", obj.asset_cd);
					SetTemplateElementValue(newCard, "card_asset_type", obj.asset_type);
					SetTemplateElementValue(newCard, "card_type_description", obj.type_description);
					SetTemplateElementValue(newCard, "card_minortype", obj.minortype);
					SetTemplateElementValue(newCard, "card_steward", obj.steward);
					SetTemplateElementValue(newCard, "card_maintained_by", obj.maintained_by);				
					SetTemplateElementValue(newCard, "card_status", obj.life_cycle_status);
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
			SetElementInnerHTML("cards", `No matches found for '${typeNumber}'`);
		}
	}
}

function SearchTypeDescription(typeDescription) {
	SetElementInnerHTML("search_value", "Search by Type Detail");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (typeDescription && typeDescription.length > 0) {
		var searchingTypeDescription; 
		var matchNumber = 0;
		typeDescription = typeDescription.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingTypeDescription = obj.type_description.toLowerCase();

			var foundAt = searchingTypeDescription.indexOf(typeDescription);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_asset_cd", obj.asset_cd);
					SetTemplateElementValue(newCard, "card_asset_type", obj.asset_type);
					SetTemplateElementValue(newCard, "card_type_description", obj.type_description);
					SetTemplateElementValue(newCard, "card_minortype", obj.minortype);
					SetTemplateElementValue(newCard, "card_steward", obj.steward);
					SetTemplateElementValue(newCard, "card_maintained_by", obj.maintained_by);			
					SetTemplateElementValue(newCard, "card_status", obj.life_cycle_status);
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
			SetElementInnerHTML("cards", `No matches found for '${typeDescription}'`);
		}
	}
}

function SearchMaintainedBy(maintainedBy) {
	SetElementInnerHTML("search_value", "Search by Maintainer");
	ToggleClassState("output_field", "hidden", false);
	ClearTemplateCollection("cards");

	if (maintainedBy && maintainedBy.length > 0) {
		var searchingMaintainedBy; 
		var matchNumber = 0;
		maintainedBy = maintainedBy.toLowerCase();

		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchingMaintainedBy = obj.maintained_by.toLowerCase();

			var foundAt = searchingMaintainedBy.indexOf(maintainedBy);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = GetNewTemplate("card_template", newCardId);

				if (newCard) {
					SetTemplateElementValue(newCard, "card_id", (matchNumber + 1));
					SetTemplateElementValue(newCard, "card_asset_cd", obj.asset_cd);
					SetTemplateElementValue(newCard, "card_asset_type", obj.asset_type);
					SetTemplateElementValue(newCard, "card_type_description", obj.type_description);
					SetTemplateElementValue(newCard, "card_minortype", obj.minortype);
					SetTemplateElementValue(newCard, "card_steward", obj.steward);
					SetTemplateElementValue(newCard, "card_maintained_by", obj.maintained_by);				
					SetTemplateElementValue(newCard, "card_status", obj.life_cycle_status);
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
			SetElementInnerHTML("cards", `No matches found for '${maintainedBy}'`);
		}
	}
}
