let medic

export default class AccessData{
    static async insertDB(conn){
        if(medic){
            return 
        }
        try {
            medic = await conn.db(process.env.set).collection("Medics")
        } catch (error) {
            console.error(
                `unable to connect : ${error}`,
            )
        }
    }

    static async getData({
        filters = null,
        ipage = 0,
        perPage = 10,
    } = {}) {
        let query
        if (filters){
            if("name" in filters){
                query = {$text: {$search:filters["name"]}}
            }
            else if (""){
                query = {$text: {$search:filters[""]}}
            }
        }

        let cursor

        try {
            cursor = await medic.find(query)
        } catch (e) {
            console.error(`unable to establish Connection, ${e}`)
            return { medicList: [], totalMedics: 0}
        }

        const displayCursor = cursor.limit(perPage).skip(ipage)

        try {
            const medicList = await displayCursor.toArray()
            const totalMedics = page === 0 ? await medic.countDocuments(query) : 0
            return {medicList, totalMedics}
        } catch (e) {
            console.error(
                `unable to convert cursor to array ${e}`
            )
            return {medicList: [], totalMedics : 0}
        }
    }
}