const express = require('express')
const router = express.Router()

const user = require('../schema/userschema')

router.post('/add-user',async(req,res)=>{

    // 127.0.0.1:3001/add-user
    // {
    //     "name":"VIKASH",
    //    "phonenumber":"86106980730",
    //     "city":"MADURAI"
    // }

    const userdetail= new user(req.body)
    try{
        await userdetail.save()
        res.status(200).json(
            {
                status:"SUCCESS",
                data:{
                    message:"DATA Added Succesfully"
                }  
            }
        )
    }catch(err){
        console.log(err)
    }
})


router.patch('/update-phone', async (req,res) => {
    const name=req.body.name
    const phonenumber=req.body.phonenumber

    // 127.0.0.1:3001/update-phone
    // {
    //     "name":"VIKASH",
    //     "phonenumber":"12345"
    // }
   await user.updateOne({name:name},{$set:{"phonenumber":phonenumber}})

    try{
        res.status(200).json({
            status : 'Success',
            data : {
              message:"updated successfully"
            }
          })
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete-phone', async(req,res) => {
    const name=req.body.name
    await user.deleteOne({name:name})
    
    // 127.0.0.1:3001/delete-phone
    // {
    //     "name":"syed"
    // }

    try{
    
      res.status(200).json({
          status : 'Success',
          data : {
            message:"deleted success"
          }
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

router.get('/get-phone', async (req, res) => {
    const name = req.body.name;
    console.log(name)
    
    // 127.0.0.1:3001/get-phone
    // {
    //     "name":"VIKASH"
    // }

    try {
      // Use the name parameter to query the database
      const phoneNumbers = await user.find({ name:name });
      console.log(phoneNumbers)
      res.status(200).json({
        status: 'Success',
        data: {
          phoneNumbers,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message,
      });
    }
  });

module.exports=router