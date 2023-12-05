const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Saeed' , 
            middleName: '',
            lastName: 'Kakkar' , 
            url: 'https://google.com' , 
            raw_url: '<a href="https://google.com" target="_blank" > Goggle </a>',
            age: 21 ,

        }
    }
,
 methods: {
   
    incrementage(){
         this.age++
    } , 
    updatelastName(event){
        this.lastName = event.target.value 
    } , 
    updatemiddleName(event){
        this.middleName = event.target.value 
    }
     
} , 
computed:{
 fullName(){
        console.log("Full Name Computed Properties Was called")
        return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    } , 
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