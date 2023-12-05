const vm = Vue.createApp({
    data(){
       return{
        birds: ['pigon' , 'eagles' , 'patrious' , 'gorgan'] , 
        people:[
         {name : 'saeed' , age:20} ,
         {name : 'Ahmad' , age:24} , 
         {name : 'Karim' , age:25}
        ]
       }
    },
   
 
 }).mount('#app')



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