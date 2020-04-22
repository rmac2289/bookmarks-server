function makeBookmarksArray() {
    return [
        { title: 'Book one', url: 'bookone.com', description: 'a book', rating: '8' },
        { title:'Book two', url:'booktwo.com', description:'a good book', rating:'7'},
        { title:'Book three', url:'book3.com', description:'ok book', rating:'4'},
        { title:'Book four', url:'book4.com', description:'bad book', rating:'1'},
        { title:'Book five', url:'book5.com', description:'book', rating:'5'},
        { title:'Book six', url:'book6.com', description:'this is a good book', rating:'8'},
        { title:'Book seven', url:'book7.com', description:'its ok', rating:'9'},
        { title:'Book eight', url:'book8.com', description:'too long', rating:'3'},
        { title:'Book nine', url:'book9.com', description:'too short', rating:'4'},
        { title:'Book ten', url:'book10.com', description:'a good book', rating:'9'}
    ]
}

    module.exports = {
        makeBookmarksArray,
    }