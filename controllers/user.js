import userModel from '../models/user/user.model.js'


const displayUser = async(req,res)=>{
    try{
        const allUsers = await userModel.find();
        res.json(allUsers)
    }
    catch(error){
          res.status(500).json({ message: error.message })
    }
        
}

const createUser = async(req,res)=>{
    try {
        const {name,email,occupation} = req.body;
        const newUser = await userModel.create({
            name : name,
            email : email,
            occupation : occupation,
        })
        res.status(201).json(newUser)

    } catch (error) {
         res.status(500).json({ message: error.message })
    }
}

const updateUser = async(req,res)=>{
    try{
        const reqName = req.params.name ;
        const {email,occupation} = req.body;
        const updatedUser = await userModel.findOneAndUpdate({name : reqName},
                                                                {$set : {occupation :occupation, email : email}},
                                                                {new : true})
        if(!updatedUser){
        return res.status(404).json({ message: 'User not found' });  
        }
    
        res.status(200).json(updatedUser)
    }
    catch(error){
         res.status(500).json({ message: error.message })
    }
}

const deleteUser = async(req,res)=>{
    try {
        const reqName = req.params.name;
        const deletedUser = await userModel.findOneAndDelete({name : reqName})
        if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export {
    displayUser,
    createUser,
    updateUser,
    deleteUser  
}