const Teacher = require("./../Model/TeacherScehma");

exports.getAllTeachers = (req,res,next) => {
    if(req.role == "admin")
    {
        Teacher.find()
        .then( data => {
            res.status(200).json(data);    
        }).catch(error => {
            next(error);
        });
    }else{
        throw new Error("Not Authorized.");
    }   
}
exports.getTeacherByID = (req,res,next) => {
    Teacher.findById(req.params.id)
        .then(data =>{
            if(data == null) throw new Error("teacher not found");

            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        })
}

exports.getAllSupervisors = (req, res, next) => {
    if(req.role == "admin")
    {
        Teacher.find({ class: { $exists: true } })
        .populate('class') 
        .then(supervisors => {
            res.status(200).json(supervisors);
    })
    .catch(error => next(error));
    }else{
        throw new Error("Not Authorized.");
    }
};

exports.insertTeacher = (req,res,next) => {
    if(req.role == "admin")
    {
        let teacher = new Teacher({
            fullName:req.body.fullName,
            address:req.body.address,
            email:req.body.email,
            password:req.body.password,
            image:req.file.path,
            class:req.body.class
            });
    
        teacher.save()
            .then(data => {
                res.status(201).json(data)})
                .catch(error => {
                    next(error);
                });   
     }else{
        throw new Error("Not Authorized.");
    }
}

exports.updateTeacher = (req,res,next) => {
    if(req.role == "admin")
    {
        Teacher.findById(req.body.id)
        .then(teacher => {
            console.log(teacher);
            if(teacher == null) throw new Error("Not Found");
            teacher.fullName = req.body.fullName;
            teacher.email = req.body.email;
            teacher.password = req.body.password;
            teacher.address = req.body.address;
            teacher.image=req.file.path;
            return teacher.save();
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error =>{
            next(error);
        })

     }else{
        throw new Error("Not Authorized.");
    }
}

exports.deleteTeacher = (req,res,next) => {
    if(req.role == "admin")
    {
        Teacher.findByIdAndDelete(req.body.id)
        .then(data => {
            if(data == null) throw new Error("teacher not found");
            res.status(204).json(data)
        })
        .catch(error =>{
            next(error);
        });
     }else{
        throw new Error("Not Authorized.");
    }
}