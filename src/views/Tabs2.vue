<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/FishApi/HomePage">
            <ion-icon src="img/home2.svg" />
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/FishApi/Page2">
            <ion-icon src="img/pond2.svg" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonTabBar, IonTabButton, IonTabs,IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  
  export default defineComponent({
    name: 'TabsPage',
    components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    
  });
  
  </script>
<style scoped>

ion-tab-bar{
  border-radius: 30px 30px 0 0;
}
</style>
  