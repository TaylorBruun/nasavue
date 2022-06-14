import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class NasaService{
    async getAPOD(){
        const res = await api.get()
        logger.log(res.data, 'res.data here')
        AppState.currPic = res.data
    }

    async getPastAPOD(date){
        logger.log(date, 'here is the date')
        logger.log('here is what we are going to search')
        const res = await api.get(`?date=${date}`)
        logger.log(res.data, 'res data for get past')
        AppState.currPic = res.data
    }
}

export const nasaService = new NasaService()