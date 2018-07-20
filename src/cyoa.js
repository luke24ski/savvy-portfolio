var checkEnd = false;
var output = document.querySelector('#cyoaOutput');

var story = {
    'start': 'You go up to the woods for a nice picnic. A sign warns you not to feed the bears. Would you like to? FEED or NOT FEED',
    'FEED': 'You feed the bears with everything you have on you, including yourself. You are dead. The End!',
    'NOT FEED': 'You refuse to feed the bears. The bears get upset and chase you into the cabin. LOCK DOOR or INVITE INSIDE?',
    'LOCK DOOR': 'You start to lock the door, but the house is full of bears.  THE END',
    'INVITE INSIDE': 'I dont really know what you expected. They eat you.'
};

var selection = prompt(story['start']);

function storyTime(selection){
    while(checkEnd === false){
        if(selection != 'NOT FEED' || selection != 'LOCK DOOR'){
            selection = prompt(story[selection]);
            output.textContent = (story[selection]);
        }
        else{
            output.textContent = (story[selection]);
            checkEnd = true;
        }
    }
}

storyTime(selection);