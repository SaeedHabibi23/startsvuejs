const vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            selectedColor: '',
            size: 150
        }
    },
    computed:{
        circle_classes(){
            return {purple: this.isPurple}
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