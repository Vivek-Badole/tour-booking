

import Tour from "../models/tour.models.js";

//create new tour

export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        return res.status(200).json({success:true,
        message:"Successfully created",
    data:savedTour})
    } catch (error) {
       return res.status(500).json({success:false,message:"Failed to create. Try again"});
    }
}

//update tour 

export const updateTour = async(req,res)=>{

    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true}).lean().exec();
        return res.status(200).json({success:true,
            message:"Successfully updated",
        data:updateTour})
    } catch (error) {
        return res.status(500).json({success:false,
            message:"Failed to  update",
        })
    }
}

//delete tour 

export const deleteTour = async(req,res)=>{
    const id = req.params.id
    try {
        const deleteTour = await Tour.findByIdAndDelete(id).lean().exec();
        return res.status(200).json({success:true,
            message:"Successfully deleted",})
    } catch (error) {
        return res.status(500).json({success:false,
            message:"Failed to  delete",
        })
    }
}

//getSingle tour 

export const getSingleTour = async(req,res)=>{
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate("reviews").lean().exec();
        return res.status(200).json({success:true,
            message:"Result found",
        data:tour})
    } catch (error) {
        return res.status(404).json({success:false,
            message:"Not found",
        })
    }
}

//getAll tour 

export const getAllTour = async(req,res)=>{
    
    // for pagination
    const page = parseInt(req.query.page);
    try {
        const tours = await Tour.find({}).populate('reviews').skip(page*8).limit(8).lean().exec();
        return res.status(200).json({success:true,
            count:tours.length,
            message:"Successful",
        data:tours})
    } catch (error) {
        return res.status(404).json({success:false,
            message:"Not found",
        })
    }
}

//get tour by search

export const getTourbySearch = async(req,res)=>{
    //here 'i' means case sensitive
    const city = new RegExp(req.query.city,'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
try {
    const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$lte:maxGroupSize}}).populate("reviews").lean().exec();
    return res.status(200).json({success:true,
        message:"Search Result Found",
    data:tours})
} catch (error) {
    return res.status(404).json({success:false,
        message:"Not found",
    })
}

}

//get feature tour 

export const getFeaturedTour = async(req,res)=>{
    

    try {
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8).lean().exec();
        return res.status(200).json({success:true,
            count:tours.length,
            message:"Successful",
        data:tours})
    } catch (error) {
        return res.status(404).json({success:false,
            message:"Not found",
        })
    }
}

//get tour counts

export const getTourCount = async(req,res)=>{
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,data:tourCount})
    } catch (error) {
        res.status(500).json({success:false,message:'failed to fetch'})
    }
}