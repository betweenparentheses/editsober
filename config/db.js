var mongoose = require( 'mongoose' );

var ParagraphSchema = new mongoose.Schema({
    text       : String,
    createdAt : Date
});

var Paragraph = mongoose.model( 'Paragraph', ParagraphSchema );
mongoose.connect( 'mongodb://localhost/edit-sober' );

module.exports = Paragraph;


// //
// var EntrySchema = new mongoose.Schema({
//     items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Paragraph'}]
// });
