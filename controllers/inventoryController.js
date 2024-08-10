//create inventory
const createInventoryController =async(req,res)=>{
try {
    const {email} = req.body
  //validation
  const user = await userModel.findOne({email})
  if(!user){
    return  new error('user not found')
  }
} catch (error) {
   console.log(error) 
   return res.status(500).send({
    success:false,
    message:'error in create inventory api',
    error,
   })
}
};

module.exports={createInventoryController};