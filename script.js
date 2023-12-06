const vm = Vue.createApp({
    data(){
       return{
        message: 'Hello World'
       }
    },
    beforeCreated(){
      console.log('beforeCreated() function is called' , this.message)
    },
    created(){
      console.log('created() function is called' , this.message)
    },
    beforeMount(){
      console.log('beforeMount() function is called' , this.$el)
    },
    mounted(){
      console.log('mounted() function is called' , this.$el)
    } ,
    beforeUpdate(){
      console.log('beforeUpdate() function is called')
    },
    updated(){
      console.log('updated() function is called')
    },
    beforeUnmount(){
      console.log('beforeUnmount() function is called')
    },
    unmounted(){
      console.log('unmount() function is called')
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