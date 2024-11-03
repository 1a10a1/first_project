const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all() {
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
    //item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('div')[4].innerHTML = 'Kudrat'
    document.getElementsByTagName('div')[3].innerHTML = 'Zaurbekov'
    document.getElementsByTagName('div')[7].innerText = '05.05.1990'
    

}
node_for_click_all.addEventListener("click", find_edit_all)


