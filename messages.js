/**
 *  Mixed Messages: Build a message generator program. 
 *  The message will be made up of three different pieces of data,
 *  Date, Time and the message. 
 */
var people = ['Beauty', 'Girl', 'Lady', 'Handsom', 'Young Man', 'Gentleman' ];
var messages = ['Strive for progress not perfection!', 'A goal is a dream with a deadline.', 
'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', 
'Never give up, for that is just the place and time that the tide will turn.'];

//careate Date object for ouput today's date 
var today = new Date();
//date in format: mm/dd/yyyy
var date =  String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0')+ '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + today.getSeconds();
//with option = {weekday: 'long'} to get the day of the week
var weekday = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(today);


//generate random Message
function generateRandomMessage (messages) {
    let mLength = messages.length;
    let ith = Math.floor(Math.random() * mLength);
    return messages[ith];    
}

function generateRandomPeople(people){
    let pLength = people.length;
    let jth = Math.floor(Math.random() * pLength);
    return people[jth];
}
console.log(generateRandomMessage(messages));