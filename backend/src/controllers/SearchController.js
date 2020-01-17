const parseStringAsArray = require('../utils/parseStringAsArray');
const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs} = request.query;
        //buscat todos os devs em um raio
        // filtrar por techs
        const techsArray = parseStringAsArray(techs);

        try{
            const devs = await Dev.find({
                techs: {
                    $in: techsArray
                },
                location:{
                    $near:{
                        $geometry:{
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000,
                    },
                },
            });
        }catch(error){
            return response.json({error: error.message});
        }

        return response.json({devs});
    }
}