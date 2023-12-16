const express=require("express");
const router=express.Router()
const uRequest =require("../model/Request")

const app=express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
//console.log()

router.post('/',async(req,res) =>{ 
    //to Insert Values
    console.log("This is user Request")
    const {userid, noOfTroops, location, description}=req.body;
    console.log(req.body);
    if(!userid || !noOfTroops || !location || !description){ //if required feild is not filled
        return res.status(422).json({error:"Field not Filled Properly"})
    }

    try {
        // const userExist = await User.findOne({ VehicleNumber: VehicleNumber });
        // const personExist = await User.findOne({ VehicleNumber: VehicleNumber });

        // if (userExist) {
        //     if (userExist) {
        //         return res.status(422).json({ error: "Vehicle already exist" });
        //     }
        // }
        console.log(req.body);
        const userReq = new uRequest({userid, noOfTroops, location, description});
        await userReq.save();
        // const person=new per({name,PhoneNumber,AadhaarNumber,VehicleNumber,LiscenceNumber})
        // await person.save();
        //res.json({ vehicle: userExist, person: personExist }); 
        //.res.status(201).json({ message: "User succesfully registered" });
        res.send(userReq);

    } catch (error) {
        console.log(error);
    }
})

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${3500}`);
//   });

module.exports=router;

