class Book{
    constructor(title){
        this.title=title;

    }
}
class UI{
    static displaywork(){
        const work=[
            {
                title:"job"
            },
            {
                title:"good"
            }
        ];
        const books=work;

        books.forEach((book)=>UI.addBooktoList(book));
    }
    static addBooktoList(book){
        const list=document.querySelector("#book-list");
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${book.title}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);

    }
    static deletefeild(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static clearfeild(){
        document.querySelector('#title').value='';
    }
}
document.addEventListener('DOMContentLoaded',UI.displaywork);
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title=document.querySelector('#title') .value;
    const book = new Book(title);
    if(title==""){
        alert("please write somthing")
    }   else{
  
    UI.addBooktoList(book)
    UI.clearfeild()
    }
});
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deletefeild(e.target)
})