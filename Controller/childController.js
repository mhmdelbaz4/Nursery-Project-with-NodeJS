const Child = require("./../Model/ChildSchema");

exports.getAllChildren = (req,res,next)=>{
        Child.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });
}

exports.getChildById = (req,res,next)=>{
    Child.findById(req.params.id)
        .then(data => {
            if (data == null) throw new Error("Child not found");
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });
}

exports.insertChild = (req,res,next)=>{
    if(req.role =="admin")
    {
        let newChild = new Child({
            fullName: req.body.fullName,
            age: req.body.age,
            level: req.body.level,
            address: req.body.address,
            class: req.body.class
        });
    
        newChild.save()
            .then(data => {
                res.status(201).json(data);
            })
            .catch(error => {
                next(error);
            });       
    }else{
        throw new Error("Not Authorized.");
    }
}

exports.updateChild = (req,res,next)=>{
    if(req.role =="admin")
    {
        Child.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(data => {
            if (data == null) throw new Error("Child not found");
            res.status(200).json(data);
        })
        .catch(error => {
            next(error);
        });

    }else{
        throw new error("Not Authorized");
    }
}

exports.deleteChild = (req,res,next)=>{
    if(req.role =="admin")
    {
        Child.findByIdAndDelete(req.body.id)
        .then(data => {
            if (data == null) throw new Error("Child not found");
            res.status(204).json(data);
        })
        .catch(error => {
            next(error);
        });

    }else{
        throw new error("Not Authorized");
    }
}