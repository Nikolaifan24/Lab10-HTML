var itemCount = 0;

function addToList(){
    itemCount++;
    var listItem = document.createElement('li');
    ListItem. innerText = 'Item' + itemCount;
    document.getElementById('itemList').appendChild(listItem);
}