const Faculty = require("../model/Faculty");

const faculty_all = async (req,res)=>{
    try{
        const faculty= await Faculty.find();
        res.json(faculty);
    } catch (error){
        res.json({message:error});
    }
    
};

const faculty_details = async (req,res)=>{try{
    const faculty= await Faculty.findById(req.params.facultyId);
    res.json(faculty);
} catch (error){
    res.json({message:error});
}};
const faculty_create =  async (req,res)=>{
    const faculty = new Faculty({
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    });
    try{
        const savedFaculty = await Faculty.save();
        res.send(savedFaculty);
    
    } catch(error )
    {
        res.status(400).send(error);
    }
};
const faculty_update = async(req,res)=>{
    try{
        console.log(req);
    const faculty = {
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    };
    
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            {_id:req.params.facultyId},
            faculty
        );
        res.json(updatedFaculty);
    
    } catch(error )
    {
        console.log(error);
        res.json({message:error});
    } 

}
const faculty_delete = async (req,res)=>{try{


    const removeFaculty = await Faculty.findByIdAndDelete(req.params.facultyId);
     res.json(removeFaculty);}
     catch(error){
         res.json({message:error});
     }

};



module.exports = {
    faculty_all,
    faculty_create,
    faculty_details,
    faculty_update,
    faculty_delete,
}

