
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',

        tasks: [
            { 
                text: 'Fare i compiti', 
                done: false 
            }, 

            { 
                text: 'Fare la spesa', 
                done: true 
             }, 

            { 
                text: 'Fare il bucato', 
                done: false 
            }
            ]

      }
    },
    methods : {
        
        // aggiunta del nuovo oggetto (oush)
        addTask(){
            this.tasks.push(
                {
                    text : this.newTask,
                    done: 
                }
            )
        },
    }
  }).mount('#app')

