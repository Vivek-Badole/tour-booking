import Booking from "../models/booking.models.js";

//create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    return res
      .status(200)
      .json({
        success: true,
        message: "Your tour is booked",
        data: savedBooking,
      });
  } catch (error) {
    return res
    .status(500)
    .json({
      success: false,
      message: "Internal server error",
      
    });
  }
};


//get single booking
export const getBooking = async(req,res)=>{
const id = req.params.id;
try {
    const book = await Booking.findById(id).lean().exec();
    return res
      .status(200)
      .json({
        success: true,
        message: "Successful",
        data: book,
      });
} catch (error) {
    return res
    .status(404)
    .json({
      success: false,
      message: "Not Found",
      
    });
}
}


//get all booking
export const getAllBooking = async(req,res)=>{
const id = req.params.id;
try {
    const books = await Booking.find({}).lean().exec();
    return res
      .status(200)
      .json({
        success: true,
        message: "Successful",
        data: books,
      });
} catch (error) {
    return res
    .status(500)
    .json({
      success: false,
      message: "Internal sever error ",
      
    });
}
}
