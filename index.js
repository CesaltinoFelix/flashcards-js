
const getAllCategory = () =>{
   return JSON.parse(localStorage.getItem("categorias")) 
}

const printAllCategory = () =>{
   const categorias = JSON.parse(localStorage.getItem("categorias")) 
//    debugger 
   categorias.forEach(element => {
    const li = document.createElement('li')
    li.innerText = element;
    minhas_categorias.appendChild(li)
    });
}


const setNewCategoryItem = (item) =>{
    if(!localStorage.getItem("categorias"))
        localStorage.setItem("categorias",JSON.stringify([item]))
    {
        const categorias = localStorage.getItem("categorias");
        localStorage.setItem("categorias",JSON.stringify([item, ...JSON.parse(categorias)]))
    }
} 

async function novaCategoria(event)
{
    event.preventDefault();
    setNewCategoryItem(categoria.value)
    const li = document.createElement('li')
    li.innerText = categoria.value;
    minhas_categorias.appendChild(li)
    form_categoria.reset()
}

printAllCategory()