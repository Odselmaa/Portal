function get_data(url, callback, error){
    $.get(url, (r) => {
        if (r.statusCode == 200){
            callback(r.response)
        } 
        else 
            error(r)
    })
}

