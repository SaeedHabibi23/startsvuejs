const vm = Vue.createApp({

  
 })
vm.component('hello' , {
   template: `<h1> {{message}} </h1>` , 
   data(){
      return{
         message: 'Hello Dear'
      }
   }
})
vm.mount('#app')
 


//  const vm2 = Vue.createApp({
//    data(){
//       return{
//        message: 'Hello World Two'
//       }
//    },
//    render(){
//       return Vue.h(
//          'h1' ,
//          this.message
//       )
//    }
 
// }).mount('#apptwo')



//  setTimeout(() => {
//    vm.mount('#app')
//  }, 3000);



// setTimeout(() => {
//     vm.firstName = 'Karim'
// }, 6000);


// Vue.createApp({
//     data(){
//         return{
//             firstName: 'Ahmad' , 
//             lastName: 'Ahmadi'
//         }
//     }
// }).mount('#apptwo')