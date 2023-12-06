const vm = Vue.createApp({
    data(){
       return{
        message: 'Hello World'
       }
    },
   
 })
 vm.mount('#app')

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