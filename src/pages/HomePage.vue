<template>
  <div style="min-height: 100vh" :style="`background-image: url(${apod.hdurl})`" class="bg-img container-fluid">
    <DateSelector />
  
    <div class="row d-flex">
    <div class="col-3"></div>
      <div class="col-6 p-3 explanation">
        <h4>{{apod.title}}</h4>
        <h6 class="p-5 ">{{apod.explanation}}</h6>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  name: 'Home',
  setup(){
    onMounted(async()=> {
      try {
        await nasaService.getAPOD()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.error(error)
      }
    })
    return {
      apod: computed(() => AppState.currPic)
    }
  }
}
</script>

<style scoped lang="scss">

.bg-img{
  background-position: center;
  background-size: cover;
}
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
