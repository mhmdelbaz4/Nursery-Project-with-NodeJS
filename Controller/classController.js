const Class = require("./../Model/ClassSchema");

exports.getAllClasses = (req,res,error)=>{
    if(req.role == "admin")
    {
        Class.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });
    }
    else{
        throw new Error("Not Authorized.");
    }    
}

exports.getClassById = (req,res,error)=>{
    Class.findById(req.params.id)
        .then(data => {
            if (data == null) throw new Error("Class not found");
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });
}

exports.insertClass = (req,res,error)=>{
    if(req.role == "admin")
    {
        let newClass = new Class({
            name: req.body.name,
            supervisor: req.body.supervisor,
            children: req.body.children
        });
        console.log("insert");
        newClass.save()
            .then(data => {
                res.status(201).json(data);
            })
            .catch(error => {
                next(error);
            });
    }
    else{
        throw new Error("Not Authorized.");
    }
}

exports.updateClass = (req,res,error)=>{
    if(req.role == "admin")
    {
        Class.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(data => {
            if (data == null) throw new Error("Class not found");
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });
    }
    else{
        throw new Error("Not Authorized.");
    }
}

exports.deleteClass = (req,res,error)=>{
    if(req.role == "admin")
    {
        Class.findByIdAndDelete(req.body.id)
        .then(data => {
            if (data == null) throw new Error("Class not found");
            res.status(204).json(data);
        })
        .catch(error => {
            next(error);
        });
    }
    else{
        throw new Error("Not Authorized.");
    }
}

exports.getClassChildren = (req,res,error)=>{
    Class.findById(req.params.id)
    .populate('children')
    .then(data => {
        if (data == null) throw new Error("Class not found");
        res.status(200).json(data.children);
    })
    .catch(error => {
        next(error);
    });
}

exports.getClassSupervisor = (req,res,next) =>{
    if(req.role =="admin")
    {
        Class.findById(req.params.id)
        .populate('supervisor')
        .then(data => {
            if (data == null) throw new Error("Class not found");
            res.status(200).json(data.supervisor);
        })
        .catch(error => {
            next(error);
        });    
    }else{
        throw new Error("Not Authorized.");
    }   
}