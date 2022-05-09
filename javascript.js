var dataSet = [];

window.addEventListener("load", InitializeWebpage, false);

function InitializeWebpage() {    
    ToggleClassState("image_area", "hidden", false);
    ToggleClassState("content", "hidden", false);

	if(document.createElement("template").content) {
		console.log("Your browser supports templates!");
	} else {
		console.log("Your browser does not support templates!");
	}
}

function LoadForm(url, fieldId) {
    ToggleClassState("image_area", "hidden", true);
    ToggleClassState("content", "hidden", true);

    var AJAX = new XMLHttpRequest();

    AJAX.onreadystatechange = function () {
        if(AJAX.readyState == 4) {
            var displayField = document.getElementById(fieldId);
            
            if(displayField && displayField.innerHTML !== undefined) {
                switch(AJAX.status) {
                    case 200:
                        var htmlFragment = ParseTextAsHTML(AJAX.responseText, "body", true);

                        if (htmlFragment) {
                            displayField.innerHTML = htmlFragment;
                        } else {
                            displayField.innerHTML = AJAX.responseText;
                        }

                        break;

                    case 404:
                        displayField.innerHTML = `
${AJAX.status}: Server indicated file ${url} does not exist. Please check the URL or file path is correct`;
                        
                        break;

                    case 500:
                        displayField.innerHTML = `
${AJAX.status}: Server indicated a server error occurred - try again later`;
                        
                        break;

                    default:
                        displayField.innerHTML = `
${AJAX.status}: Server indicated status code ${AJAX.status} - Not sure how to handle it`;
                        
                        break;
                }
            } else {
                console.log(`Could not find element ${fieldId} to update it`);
            }
        } else {
            console.log(`Async callback to our logic but .readyState == ${AJAX.readyState} && .status == ${AJAX.status}`);
        }
    };

    AJAX.open("GET", url, true);
    AJAX.send();
}

function ParseTextAsHTML(rawHTML, id, stripJavaScript) {
    var returnString = "";
    var parser = new DOMParser();

    if(parser) {
        var xmlDoc = parser.parseFromString(rawHTML, "text/html");

        if(xmlDoc && xmlDoc.body !== undefined && id !== undefined) {
            switch(id) {
                case "body":
                    returnString = xmlDoc.body.innerHTML;
                    
                    break;

                case "head":
                    returnString = xmlDoc.head.innerHTML;
                    
                    break;

                default:
                    var XMLFragment = xmlDoc.getElementsByTagName(id);

                    if(XMLFragment && XMLFragment.length > 0) {
                        returnString = XMLFragment[0].innerHTML;
                    } else {
                        console.log(`HTML document has an improperly closed tag such as a <br>, an <img> etc.`);
                    }

                    break;
            }
        }
    } else {
        console.log(`Could not parse fragment as HTML \n${rawHTML}`);
    }

    if(stripJavaScript) {
        const scriptTagClose = '</script>';
        var startPoint = returnString.search(/<script/i);

        while(startPoint > 0) {
            var endPoint = returnString.toLowerCase().indexOf(scriptTagClose,startPoint +2);

            if(endPoint > 0){
                returnString = returnString.substring(0,startPoint) + returnString.substring(endPoint +scriptTagClose.length +1);
            } else {
                returnString = returnString.substring(0,startPoint);
            }
            
            startPoint = returnString.search(/<script>/i);
        }
    }

    return returnString;
}

function LoadData(url) {
	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            switch(xhr.status) {
                case 200:
                dataSet = JSON.parse(xhr.responseText);

                break;

                case 404:
                console.log(`
${xhr.status}: Server indicated file ${url} does not exist. Please check the URL or file path is correct`);

                break;

                case 500: 
                console.log(`
${xhr.status}: Server indicated a server error occurred - try again later`);

                break;

                default:  
                console.log(`
${xhr.status}: Server indicated status code ${xhr.status} - Not sure how to handle it`);

                break;
            }
        } else {
            console.log(`
Async callback to our logic but .readyState == ${xhr.readyState} && .status == ${xhr.status}`);
        }
	}

	xhr.open("GET", url, true);
	xhr.send();
}

function ToggleClassState(id, toggleClass, force) {
    var element = document.getElementById(id);

    if(element) {
        element.classList.toggle(toggleClass, force);
    } else {
        console.log(`Cannot find element "${id}" to alter class "${toggleClass}"`);
    }
}

function HasFocus(id, promptID) { 
    var inputElement = document.getElementById(id);

    if(inputElement) {
        var rectangleOfInput = inputElement.getBoundingClientRect(); 

        if(rectangleOfInput && rectangleOfInput.top !== undefined) {
            var messageText = inputElement.getAttribute("data-promptMessage");
            
            ToggleClassState(promptID, "hidden", false);
            CalculateTopPosition(promptID, rectangleOfInput, messageText);
        }
    } else {
        console.log("Could not find the id '" + id + "', so cannot focus on it");
    }
}

function LostFocus(id, promptID) { 
    var promptElement = document.getElementById(promptID);

    if(promptElement) {
        promptElement.style = "";

        if(id) {
            promptElement.innerHTML = "";
        }

        ToggleClassState(promptID, "hidden", true);
    } else {
        console.log("Could not find the help prompt with the id '" + promptID + "'");
    }
}

function CalculateTopPosition(promptID, rectangleOfInput, messageText) { 
    var promptElement = document.getElementById(promptID); 

    if(promptElement && promptElement.innerHTML !== undefined && promptElement.style !== undefined) {        
        var rectangleOfPrompt = promptElement.getBoundingClientRect();        
        var topOffset = rectangleOfInput.top - (rectangleOfInput.height + rectangleOfPrompt.height) + window.scrollY - 35;
        var leftOffset = rectangleOfInput.left + rectangleOfInput.width + window.scrollX - 15;
        
        promptElement.innerHTML = messageText;
        promptElement.style.top = topOffset + "px";
        promptElement.style.left = leftOffset + "px";
    } else {
        console.log("Could not find the help prompt with the id '" + promptID + "'" +
        ", so cannot display it");
    }
}
