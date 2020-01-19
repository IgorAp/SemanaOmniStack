const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringsAsArray = require('../utils/ParseStringsAsArray');

module.exports = {
    async store (req,res) {
        const { github_username, techs, latitude, longitude } = req.body;
        
        let dev = await Dev.findOne({ github_username });

        if(dev) return res.status(409).json({ dev });

        const result = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio } = result.data;
    
        const techsArray = ParseStringsAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude,latitude]
        }
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });
    
        return res.json({ dev });
    },
    async index(req,res) {
        return res.json(await Dev.find());
    }
}