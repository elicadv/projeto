const Annotations = require('../models/AnnotationsData');

module.exports = {
    
    read(request, response){
        return response.json({
            sucess: true,
        })

    },
    
    
    create(request, response){
        const {title, notes, priority} = request.body;
        
        console.log(title);
        console.log(notes);
        console.log(priority)
    }

}
