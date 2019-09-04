console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event){
      
console.log('Clicked button')
     

        var name = $('.name').val()
            var email = $('.email').val()
            var title = $('.title').val()
            var message = $('.message').val()
            var statusElm = $('.status')
       statusElm.empty()

           
            

       
    
        
        if (name.length < 1) {
            alert('Name field cannot be empty')}
         
        else if (name.length > 1 && name.length <= 4 ){
            alert('Name has to be 4 letters or more')
        }
                
            else {
            event.preventDefault()
            statusElm.append('Name is Valid')}
        


        if (email.length > 2 && email.includes('@') && email.includes('.')) {
            statusElm.append('Email is valid')
        }
        else if (email.length < 1) {
            event.preventDefault()
            alert('Email field cannot be empty')
        }
         else {
            event.preventDefault()
            alert('Email is not valid')
         }  
            

        



        if (title.length >= 1) {
            statusElm.append ('title is valid')
        }
        else {
            event.preventDefault()
            alert('Title field cannot not empty')
        }
      
    
      
   if (message.length >= 20) {
            statusElm.append('<div>Your message is valid</div>')
        } else {
            event.preventDefault()
            alert('Please message has to be 20 letters or more')
        }
    


        
    

     
   
           
          
          

        
       
          
     

        
      
         

    })
})
