const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Saeed' , 
            lastName: 'Kakkar'
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Karim'
}, 6000);


// Vue.createApp({
//     data(){
//         return{
//             firstName: 'Ahmad' , 
//             lastName: 'Ahmadi'
//         }
//     }
// }).mount('#apptwo')