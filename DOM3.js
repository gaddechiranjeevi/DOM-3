var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var form = document.getElementById('addform');

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){

    var text = e.taget.value.toLowerCase();

    var item = e.target.value.toLowerCase();

    Array.from(item).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}