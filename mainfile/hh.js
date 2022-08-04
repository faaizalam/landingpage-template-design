
// // // let f='h'
// // // let name={f}
// // // const boll=(()=>name)
// // // // const b=boll
// // // console.log(boll());
// // // const {name}
// // // let  n=boll(state(()=>state.name))
// // // let {name:p}=n
// // // let {f:p}=name
// // // console.log(p)
// // // const targ=document.getElementById("setss")
// // // const datas=document.createElement('input')
// // // document.body.appendChild(datas)
// // // datas.textContent="hh"
// // // // datas.classList.add("red-font")
// // // const bb=document.body.append('li',datas);
// // console.log("j")

// // let arr1=[{name:'faaiz',id:5}]

// // let  arr=5

// // //   arr={...obj,school:'paksi'}
// // const func=(x)=>{

// //     //   const p =  x.find((z)=>z)
// //  x.find((x)=>{

// //     // console.log({...x,arr})

// //  })
   
    
// // }
// // func(arr1)


// // let obj=[{
// //     name:"faazi",
// //     id:"78"
// // }

// // ]
// // let g={id:7}

// // obj=[...obj,g,id=8]
// // console.log(obj)
// let user={ 
//     u:[
//     {
//         id:7,
//         name:'alam',
//     },
//     {
//         name:'alam',
//         id:9
//     }
// ]
// }
// let p=[
//     "faaiz"
    
// ]
// const exits=user.u.find((x)=>x.id===p.id)
// exits.fathername="mu"
// user=user.u.map((x)=>x.id===p.id?{...x,father:'mu'}:x)
// const users=[["faaiz"] , ...user.u.map((x)=>[x.id,x.name])]
// // user.u=user.u.push(p)
// // user.u=[...user.u,p]
// console.log(users)

// const id=1
// let fil=[{name:"alaliz",id:1},{name:"faaiz",id:2}]
// // localStorage.setItem('f',JSON.stringify(fil))
// // const cc=localStorage.getItem('f')?JSON.parse(localStorage.getItem('f')):[]
// fil=[...fil.filter((x)=>x.id!==id)]

// // const news=localStorage.setItem('f',JSON.stringify(a))

// // fil=[...n]
// console.log(fil)
//   document.getElementById("carts").addEventListener("click",()=>{
//     window.location.hash='/two.html'
//   })
// // console.log(cc)



// const parsereq=()=>{
//   const qty='names';
//   const u=`localhost/sellerid/89/pro?qty=${qty}`
//   // htmyfullecommerce.herokuapp.com/product/62d320ccabf459d4928836d9
//   // http://127.0.0.1:5500/newfron/html.html#/two.html
  
//   const addres=u.slice(1).split('?')[0]
//   const addresid=u.slice(1).split('?')[1]

//   // const =text.slice(1).split('?')[0]
//   const url=addres.toLocaleLowerCase()||'/home'
//   const r=url.split('/')
//   const values=addresid.split('=')
//    return{
//     res:r[1],
//    id:r[2],
//    verb:r[3],
//    value:values[1]

//    }
    
// }
// const names=parsereq();
// console.log(names)





// var v=document.getElementById('carts')
// console.log(v)
// // console.log("he")le
// const name="faaiz"
// let arrayss=[{name:"faaiz"},{name:"maaz"}]
// const objs={name:"newman"}
//   // arrayss=[...arrayss,objs]
//   // arrayss=[...arrayss.map((x)=>(x.name==="faaiz")?{...x,nametwo:"sana"}:x)]
// // arrayss=[...arrayss.filter((x)=>x.name!=="maaz")]
// //   const alter=arrayss.filter((x)=>x.name!==name).length===0
// // //  ole.log("online")
// // const seess=window.scrollY(9,0)
// // console.log(seess)
  

// // console.log(arrayss)

// var m=false;
// function seth(params) {
//   m=true
  
// }
// seth()
// if (m) {
  
//   console.log(m)
// }
// const f=(()=>{
//   setTimeout(()=>{
//    console.log("hello");
//  },0)
//  console.log("hello");
 

// })
// f()

// console.log(f())


// clickss()
document.getElementById("best").addEventListener("click",()=>{
  console.log("hh")
  document.getElementById('headerone').classList.add("active")
  console.log("jj");
})
document.getElementById("closebutt").addEventListener("click",()=>{
  document.getElementById('headerone').classList.remove('active')
  console.log("jj");
})

console.log("jj")
var swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

// console.log("hh")