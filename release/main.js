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

var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
	'<p>' + projectName + ' ' + versionNumber + 
	' accessed on: ' + currentTime + '<p>';
// this comment is to check grunt watch
var images = document.querySelectorAll('div.userContentWrapper img');
