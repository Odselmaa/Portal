function get_friends(user_id, lang, callback) {
        $.get(`/f/${user_id}/${lang}`, (data) => {
            
            callback(data.response)
        })
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isEqual(arr1, arr2) {
    return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0
}

function showSnackbar(id) {
    var x = $(`#${id}`)
    x.addClass("show")
    // Add the "show" class to DIV
    setTimeout(function () {
        x.removeClass("show")
    }, 3000);
}

function get_stars(stars){
    rating = ""
    empty = 5 - stars
    for(var i=0;i<stars; i++)
        rating+='<i class="fa fa-star"></i>'
    
    for(var j=0;j<empty; j++)
        rating+='<i class="fa fa-star-o"></i>'
    return rating
}