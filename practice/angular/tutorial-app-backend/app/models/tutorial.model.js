module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: {type:Boolean, default:false}
        }
    );

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};