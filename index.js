$(function(){
    $('#js-shopping-list-form').submit(addItem);
    $('body').keypress(function(e){
        if(e.keycode === 13){
        addItem(e);
        }
    })
    $('body').on('click','.shopping-item-toggle', function(e){
        e.preventDefault();
        $(e.target).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');   
    })
    $('body').on('click', '.shopping-item-delete', function(i){
        i.preventDefault();
        $(i.target).closest('li').remove();
    })
    function addItem(e){
        e.preventDefault();
        let newItem = $('#shopping-list-entry').val();

        $("#shopping-list-entry").val('');
        let newLi = `<li>
            <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`

        $(".shopping-list").append(newLi);
    }


   
});