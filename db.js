const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thernanp:nada0202@cluster0.ytrf1fq.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});



// const bookings = mongoose.Schema({
//     first_name: String,
//     last_name: String,
//     address: String,
//     city: String
// });


// const Bookings = new mongoose.model('booking', bookings);

// const newbooking = new Bookings({
//     first_name: 'Leonardo',
//     last_name: 'Larrea',
//     address: 'Kennedy Norte',
//     city: 'Guayaquil'
// })
// .save()
// .then((b) => {
//     console.log('Booking:', b);
// })
// .catch((error) => {
//     console.log('Error:', error);
// })
// Bookings.find({ first_name: 'Eduardo'})
// .then((b) => {
//  console.log('Booking:', b)
// })
// .catch((error) => {
//  console.log('Error:', error);
// })




