<template>
    <div class="row d-flex">
        <div class="col spacer">
            <div class=" p-5 component">
                <form @submit.prevent="getForDate" action="">
                    <input v-model="calDate" type="date" >
                    <button>submit</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { nasaService } from '../services/NasaService'
import { logger } from '../utils/Logger'

export default {
    setup(){
        const calDate = ref()
        return {
            calDate,
            async getForDate(){
                logger.log('at least the calendar submits', calDate.value)
                await nasaService.getPastAPOD(calDate.value)
            },
            logTest(){
                
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>