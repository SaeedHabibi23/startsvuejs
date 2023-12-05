const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Saeed' , 
            lastName: 'Kakkar' , 
            url: 'https://google.com' , 
            raw_url: '<a href="https://google.com" target="_blank" > Goggle </a>',
            age: 21 ,

        }
    }
,
 methods: {
    fullName(){
        return `${this.firstName} ${this.lastName.toUpperCase()}`
    } , 
    incrementage(){
         this.age++
    } , 
    updatelastName(event){
        this.lastName = event.target.value 
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