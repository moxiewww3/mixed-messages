/**
 *  Mixed Messages: Build a message generator program. 
 *  The message will be made up of three different pieces of data,
 *  Date, Time and the message. 
 */
var messages = ['Strive For Progress Not Perfection', 'A Goal Is A Dream With A Deadline.', 
'Do Not Dwell In The Past, Do Not Dream Of The Future, Concentrate the Mind On the Present Moment.', 
'Never Give Up, For That is Just The Place and Time That The Tide Will Turn.'];

//careate Date object for ouput today's date 
var today = new Date();
//date in format: mm/dd/yyyy
var date =  String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0')+ '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + today.getSeconds();
//with option = {weekday: 'long'} to get the day of the week
var weekday = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(today);


//generate random Message
function generateRandomMessage (messages) {
    let length = messages.length;
    let ith = Math.floor(Math.random() * length);
    return messages[ith];    
}

console.log(generateRandomMessage(messages));