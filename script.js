const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Saeed' , 
            lastName: 'Kakkar' , 
            url: 'https://google.com'
        }
    }
,
 methods: {
    fullName(){
        return `${this.firstName} ${this.lastName.toUpperCase()}`
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