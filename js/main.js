
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        error : false,
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

        if(this.newTask.length < 5 || this.newTask === ""){

            // cambiamo la variabile booleana di error da false
            this.error = true
        }else{
            this.tasks.unshift(
                {
                    text : this.newTask,
                }
            )
            // tiportiamo l'errore a false per togliere la scritta error
            this.error = false
        }
            // cancello l'input dell'utente al click
            this.newTask = ""  
        },

        // funzione per cancellare la task 
        cancel(index){
            this.tasks.splice(index, 1)
        },
    }
  }).mount('#app')

