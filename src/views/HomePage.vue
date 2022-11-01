<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid id="statistik">
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Kolam</ion-card-subtitle>
                <ion-card-title>10</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Kolam Aktif</ion-card-subtitle>
                <ion-card-title>8</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Ikan Hidup</ion-card-subtitle>
                <ion-card-title>182 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Ikan Mati</ion-card-subtitle>
                <ion-card-title>89 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Panen 2022</ion-card-subtitle>
                <ion-card-title>109 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Total Pakan</ion-card-subtitle>
                <ion-card-title>223 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-title>TOTAL BERAT IKAN</ion-title>
      <div id="container-fluid">
        <ion-slides >
          <ion-slide>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-card color="dark">
                    <img alt="Silhouette of mountains"
                      src="https://www.kibrispdr.org/data/639/ikan-lele-vector-png-29.jpg" />
                    <ion-card-header>
                      <ion-card-subtitle>LELE</ion-card-subtitle>
                      <ion-card-subtitle color="secondary"> <span style="color:skyblue; display: inline-block;">200
                          Kg</span></ion-card-subtitle>
                    </ion-card-header>
                  </ion-card>
                </ion-col>
                <ion-col>

                </ion-col>

              </ion-row>
            </ion-grid>
          </ion-slide>


          <ion-slide id="Slide2">
            <ion-grid>
              <ion-row>

                <ion-col>
                  <ion-card color="dark">
                    <img alt="Silhouette of mountains"
                      src="https://media.istockphoto.com/vectors/illustration-tilapia-on-white-background-vector-id505167168?k=20&m=505167168&s=170667a&w=0&h=wBa4w5gdJADz3y-2rl4g8eYhWQMayYX7zLvclUgY3W4=" />
                    <ion-card-header>
                      <ion-card-subtitle>NILA MERAH</ion-card-subtitle>
                      <ion-card-subtitle> <span style="color:skyblue; display: inline-block;">200 Kg</span>
                      </ion-card-subtitle>
                    </ion-card-header>
                  </ion-card>
                </ion-col>
                <ion-col>

                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-slide>
        </ion-slides>

      </div>
      <ion-title>KUALITAS AIR</ion-title>
      <ion-slides >
        <ion-slide>
          <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-title>pH</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-card-subtitle>Normal <span style="color:skyblue; display: inline-block;">6 Kolam</span>
                </ion-card-subtitle>
                <ion-card-subtitle>Abnormal <span style="color:skyblue; display: inline-block;">6 Kolam</span>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            
          </ion-col>
        </ion-row>
      </ion-grid>
        </ion-slide>
        <ion-slide id="Slide2">
          <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-title>DO</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-card-subtitle>Normal <span style="color:skyblue; display: inline-block;">6 Kolam</span>
                </ion-card-subtitle>
                <ion-card-subtitle>Abnormal <span style="color:skyblue; display: inline-block;">6 Kolam</span>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
      </ion-grid>
        </ion-slide>
      </ion-slides>
   
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle
    
  }
 
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap%27');
#beratIkan {
  width: 60%;
}
#Slide2 {
  transform: translateX(-40%);

}
ion-slides {
  text-align: left;
}



ion-slide ion-card {
  width: 120%;
}

ion-card-title {
  color: black;
  font-weight: bold;
  text-align: left;
  font-size: 32px;
}

ion-card-subtitle {
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
#statistik{
  justify-content: center;
}
ion-page{
  font-family: 'Poppins';
}
ion-card{
  border-radius: 20px;
}
</style>
