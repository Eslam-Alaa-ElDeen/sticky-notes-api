import { Router } from 'express'
import {  signup } from './note.service.js';
const router = Router(); 

router.get("/",(req,res)=>{
    res.status(200).json({msg:"on note router"})
})


export default router