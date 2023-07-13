let cart = document.querySelector('.cart-btn')
let listcart = document.querySelector('.cart')
 
let listProduct=document.querySelector('.list')
let list = []
let isOpen = false
cart.addEventListener('click', () => {

    !isOpen ? listcart.className = 'cart open' : listcart.className = 'cart close';
    isOpen = !isOpen
})




let body = document.querySelector('.body')
let cartProduct = []
fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        call(data)
    })




// fetch('http://localhost:3001/')
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })

// button.addEventListener('click',()=>{
//     fetch('http://localhost:3001/post',{
//     method:"POST",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body:JSON.stringify({
//         user:name.value,
//         pass:pass.value

//     })
// })
// .then((res)=>res.text())
// .then((data)=>{
//     console.log(data)
// })
// })



function call(data) {
    console.log(data.products.length)
    for (let i = 0; i < data.products.length; i++) {

        let div = document.createElement('div')
        let div2 = document.createElement('div')
        div2.className = 'div2'
        let img = document.createElement('img')
        let button = document.createElement('button')
        button.innerText = 'Add Cart'

        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')
        //console.log(data.products[5].images[0])

        h1.innerText = data.products[i].title
        img.src = data.products[i].images[0]
        h2.innerText = data.products[i].price


        img.className = 'img'
        div.className = 'container'
        h1.className = 'product-name'
        //     button.addEventListener('click',()=>{
        //         // console.log(data.products[i])
        //         list.push(product[i])
        //         cartProduct.push(data.products[i])
        //         console.log(cartProduct)

        //         function filter(task){
        //             return task.filter((item,index)=>{
        //                 // console.log(CartProduct.indexOf(item))
        //                 return CartProduct.indexOf(item)==index


        //     })
        // }
        // let edit=filter(CartProduct)
        //      printcart(edit)
        //     })


        div.appendChild(img)
        div.appendChild(h1)
        div2.appendChild(h2)
        div.appendChild(button)
        div.appendChild(div2)
        body.appendChild(div)



        button.addEventListener('click', () => {

            cartProduct.push(data.products[i])
            console.log(cartProduct)

            function filter(task) {
                return task.filter((item, index) => {
                    // console.log(CartProduct.indexOf(item))
                    return cartProduct.indexOf(item) == index


                })
            }
let edit = filter(cartProduct)
printcart(edit)
        })





    }
}
console.log(body)


function printcart(data){

    listProduct.innerText=''
 for (let i=0;i<data.length;i++){
  
    let count=1
    let amount=data[i].price
    let newamount=data[i].price
   let parentDiv=document.createElement('div')
   let chilDiv1=document.createElement('div')
   let childDiv2=document.createElement('div')
   let image= document.createElement('img')
   
   let productName=document.createElement('p')
  
   let midDiv=document.createElement('div')
  
    let increment=document.createElement('div')

   let pluse=document.createElement('button')
    let value=document.createElement('p')
   let minuse=document.createElement('button')
 
   let price=document.createElement('p')

  let bottomDiv=document.createElement('div')
  let DeleteBtn=document.createElement('button')
  let total=document.createElement('p')

   image.src=data[i].images[0]

   chilDiv1.appendChild(image)

   productName.innerText=data[i].title

   childDiv2.appendChild(productName)

   pluse.innerText="+"
   value.innerText=count
minuse.innerText="-"

pluse.addEventListener('click',()=>{
    
    ++count
    newamount=newamount+amount
    total.innerText=`total:${newamount}`
   
    value.innerText=count
})
minuse.addEventListener('click',()=>{
    if(count !== 1){
    --count
    newamount=newamount-amount
    total.innerText=`total:${newamount}`
   
    value.innerText=count
}


})
DeleteBtn.addEventListener('click',()=>{
    let give=data.filter((item)=>item !==data[i])
    console.log(give)
    list=[]

    for(let i=0;i<give.length;i++){
        list.push(give[i])
    }
    printcart(list)



})
increment.appendChild(pluse)
increment.appendChild(value)
increment.appendChild(minuse)

midDiv.appendChild(increment)

price.innerText=amount

midDiv.appendChild(price)


DeleteBtn.innerText='Delete'

total.innerText=newamount


bottomDiv.appendChild(DeleteBtn)

bottomDiv.appendChild(total)

childDiv2.appendChild(midDiv)
childDiv2.appendChild(bottomDiv)

  
parentDiv.appendChild(chilDiv1)
parentDiv.appendChild(childDiv2)

console.log(parentDiv);
listProduct.appendChild(parentDiv)
    }

    console.log(listProduct);
}
