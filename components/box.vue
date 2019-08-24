<template>
    <div class="box-container" :class="type == 'listBox'?'':'has-background-white-ter'">
         <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Image"
                  >
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>刑法改革</strong> <span v-if="type == 'listBox'"><small>2018-02-11</small> <small>31m</small></span>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level is-mobile" v-if="type == 'listBox'">
                  <div class="level-left">
                    <a
                      class="level-item has-text-grey is-size-7"
                      aria-label="eye"
                    >
                      <span class="icon is-small">
                        <i
                          class="fas fa-eye"
                          aria-hidden="true"
                        ></i> 
                      </span>
                        <span> 12</span>
                    </a>
                    <a
                      class="level-item has-text-grey is-size-7"
                      aria-label="retweet"
                    >
                      <span class="icon is-small">
                        <i
                          class="fas fa-comment"
                          aria-hidden="true"
                        ></i> 
                      </span>
                       <span> 12</span>
                    </a>
                    <a
                      class="level-item has-text-grey is-size-7"
                      aria-label="like"
                    >
                      <span class="icon is-small">
                        <i
                          class="fas fa-heart"
                          aria-hidden="true"
                        ></i> 
                      </span>
                       <span> 12</span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
    </div>    
</template>
<style scoped>
.box-container{
  margin-top: 10px;
}
.box-container:hover{
  cursor: pointer;
}
</style>
<script>
import { getProfileData } from '~/assets/scripts/getData.js'
export default {
    props: {
      articleID: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'listBox'
      }
    },
    data() {
        return {
            boxData: {}
        }
    },
    mounted() {
        let id = this.articleID;
        getProfileData(id).then(res => {
            this.boxData = res;
        });
    },
}
</script>