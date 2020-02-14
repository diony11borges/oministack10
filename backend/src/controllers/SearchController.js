const Dev = require('../models/Dev');
const parseStringAsArray = require('./../utils/parseStringAsArray');


module.exports = {
    async index(request, responde) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        console.log(latitude, longitude, techsArray);

        // Filtra os Devs por Tecnologias e Distancia
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return responde.json({ devs });
    }
}