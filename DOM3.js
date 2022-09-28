var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}