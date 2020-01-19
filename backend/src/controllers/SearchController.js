const ParseStringsAsArray = require('../utils/ParseStringsAsArray');
const Dev = require('../models/Dev');

module.exports = {
    async index (req,res){
        const { latitude, longitude, techs } = req.query;

        const techsArray = ParseStringsAsArray(techs);

        console.log(latitude,longitude);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude], 
                    },
                    $maxDistance:10000000,
                },
            }
        });

        return res.status(200).json({ devs });
    }
}