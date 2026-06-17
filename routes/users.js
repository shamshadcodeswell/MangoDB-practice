import express  from 'express'
const router = express.Router();
import {
    displayUser,
    createUser,
    updateUser,
    deleteUser  
}                   from '../controllers/user.js';

router.get('/',displayUser)
router.post('/create',createUser)
router.put('/update/:name',updateUser)
router.delete('/delete/:name',deleteUser)

export default router