function main() {
	var userName = getUserName();
	var phoneNumber = getPhoneNumber(userName);
  	var location = getLocation(phoneNumber);
  	var images = getImages();

setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();
function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  switch (location) {
  case 'Memphis':
    // Use puppies for Memphis
    baseImageUrl = 'https://placepuppy.it/';
    break;
  default:
    // Use kittens everywhere else
    baseImageUrl = 'https://placekitten.com/g/';
    break;
  }
  for (var i=0,len=images.length; i<len; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}
var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();   // Create Date object. More about objects and
                               // Date objects in chapter 5. This object will
                               // be used to build our date.

    // currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' +  // Set year
                 (currentDate.getMonth() + 1)+ '-' + // Set month
                 currentDate.getDate() + ' at ' +    // Set day of the month
                 currentDate.getHours() + ':' +      // Set hours (military time)
                 currentDate.getMinutes() + ':' +    // Set minutes
                 currentDate.getSeconds();   

var kbValues = {
	projectName: 'kittenbook',
	versionNumber: versionNumber,
	currentTime: currentTime,
   areaCodes: {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Northern Utah',
    '765': 'West Lafayette',
    '901': 'Memphis',
    '507': 'Rochester, MN'
  }
};

function getAreaCodes() {
  return kbValues.areaCodes;
}

function getUserName() {
	var userName = prompt('Hello, what\'s your name?');

	if(!userName) 
		userName = prompt('invalid name, please enter again');
	
	return userName;	
}

function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number.');
  }
  return phoneNumber;
}

function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

function getLocation(phoneNumber) {
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;

  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }

  return locationName ? locationName : 'somewhere';
}

// Insert the output into the web page.
// document.body.innerHTML = output; // comment out to check it on the console


function getImages() {
	return document.querySelectorAll('div.userContentWrapper img');
}
