const vm = Vue.createApp({
    data(){
       return{
        people:[
         {name : 'saeed' , message: 'Hello'} ,
         {name : 'Ahmad' , message: 'Hi dear'} , 
         {name : 'Karim' , message: 'holla karim'}
        ]
       }
    },
    methods:{
      move(){
         const first = this.people.shift()
         this.people.push(first)
      }
    }
   
 
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