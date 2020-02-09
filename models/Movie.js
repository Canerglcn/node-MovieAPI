const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema=new Schema({
   director_id:Schema.Types.ObjectId,
   title:{
       type:String,
       required:[true,' `{PATH}` is required. '],
       maxlength:[25,' `{PATH}` field (`{VALUE}`), Must be less than ({MAXLENGTH}) characters.  '],
       minlength:[2,'  `{PATH}` field (`{VALUE}`), Must be greater than ({MINLENGTH}) characters ']

   },
    category:{
       type:String,
       maxlength:20,
       minlength:3,

    },
    country:{
      type:String,
      maxlength:30,
      minlength:4,

    },
    year:{
       type:Number,
        max:2040,
        min:1900
    },
    imdb_score:Number,
    createdAt:{
       type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('movie',MovieSchema);