import medic_data from "../server/AccessData/medic_data.js"

export default class medicControl{
    static async getMedic(req,res,next){
        const medPerPage = req.query.medPerPage ? parseInt(req.query.medPerPage) : 10
        const page = req.query.page ? parseInt(req.query.page,10) : 0

        let filters = {}
        if (req.query.name){
            filters.name = req.query.name
        }

        const {medicList, totalMedics } = await medic.getMedic({
            filters,
            page,
            medPerPage,
        })

        let response = {
            medics : medicList,
            page: page,
            filters: filters,
            entries_per_page: medPerPage,
            total_res: totalMedics, 
        }
        res.json(response)
    }
}