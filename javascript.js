
//Variable declaration
var firstLinkClicked = false,
	secondLinkClicked = false,

	agree = document.getElementById("agree"),
	disagree = document.getElementById("notagree"); 

//Get elements, put them in variables and add event listeners
var firstDocumentLink = document.getElementById("agreeLink1");
firstDocumentLink.addEventListener("click", firstClicked);

var secondDocumentLink = document.getElementById("agreeLink2");
secondDocumentLink.addEventListener("click", secondClicked);

var background = "#192e5b"
//var radioAgree = document.getElementById("radAgree");
//radioDisagree = document.getElementById("radDisagree");

theySeeMeScrollin = document.getElementById("agreeScroll");

//userAgree = document.getElementById("submitAgreement");
//userDisagree = document.getElementById("notagree");

confirmation = document.getElementById("confirmationPage");
denyConfirmation = document.getElementById("denialPage");
apology = document.getElementById("modalSorry");
documents = document.getElementById("section1");
//documentFirst = document.getElementById("document1");
//documentSecond = document.getElementById("document2");
terms = document.getElementById("section2");
title = document.getElementById("title");

continueButton = document.getElementById("submitAgreement");
continueButton.addEventListener("click", continueClicked)

theySeeMeScrollin.addEventListener("scroll", function()
{

	if(theySeeMeScrollin.scrollTop == (theySeeMeScrollin.scrollHeight - theySeeMeScrollin.offsetHeight) && firstLinkClicked === true && secondLinkClicked === true)
	{
	//I actually discovered this by accident. I thought you had to get element by id, but apparently it will just grab the id for you in this method. Interesting. 
	//Edit: only true for chrome.
	agree.disabled = false;
	disagree.disabled = false;
	}
	else if (firstLinkClicked === false || secondLinkClicked === false)
	{
		if (theySeeMeScrollin.scrollTop != 0)
		{
			$('#modalAgree').bPopup({
				modal : true,
				opacity : .777,
				modalColor : background
				});
			theySeeMeScrollin.scrollTop = 0;
		}
	}
});

function firstClicked()
{
	firstLinkClicked = true;
	$('#document1').bPopup({
			modal : true,
			opacity : .777,
			modalColor : background
			});
}

function secondClicked()
{
	secondLinkClicked = true;
	$('#document2').bPopup({
			modal : true,
			opacity : .777,
			modalColor : background
			});
}


function continueClicked()
{
    if (agree.checked === true)
    {
    	$('#modalThanks').bPopup({
			modal : true,
			opacity : .777,
			modalColor : background
			});

    	documents.className = "hidden";
    	terms.className = "hidden";
    	confirmation.className = "contentBox";

    	title.innerHTML = "Confirmation";
    }
    else if (disagree.checked === true)
    {
    	$('#modalSorry').bPopup({
			modal : true,
			opacity : .777,
			modalColor : background
			});

    	documents.className = "hidden";
    	terms.className = "hidden";
    	denyConfirmation.className = "contentBox";

    	title.innerHTML = "Access Denied";
    }
    else
    {
    	$('#continueError').bPopup({
			modal : true,
			opacity : .777,
			modalColor : background
			});
    }

}

