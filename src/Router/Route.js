const express =require('express')
const router =express.Router()
const FormControler =require('../Controller/FormController')


router.get('/bg',(req,res)=>{
    res.send({status:true, msg:"Connected successfully!!!!"})
})



router.post('/form', FormControler.FormData)



module.exports=router