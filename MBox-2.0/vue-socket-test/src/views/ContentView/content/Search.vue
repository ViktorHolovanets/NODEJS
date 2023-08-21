<template>
  <section>
    <div class="d-flex justify-content-center mt-5">
      <!-- Search-->
      <input type="text" class="input-search" placeholder="Search" />
      <button class="bttn-search">
        <img
          src="../../../assets/icons/mbox_search_white.png"
          class="img-search"
        />
      </button>
    </div>
    <div class="mt-5">
      <!-- Result -->
      <div class="ms-3 mt-3">
        <p class="text-search-genres mb-3">Search History</p>
        <div class="d-flex flex-wrap">
            <div v-for="item in testMusic" :key="item">
                <MusicTemplate :img_url="item.img_url" :name="item.name" :name_info="item.name_info"/>
            </div>
            <div v-for="item in testUser" :key="item">
                <UserTemplate :img_url="item.img_url" :name="item.name" />
            </div>
        </div>
      </div>
      <div class="ms-3 mt-3">
        <div>
          <p class="text-search-genres mb-3">Genres</p>
        </div>
        <div class="d-flex flex-wrap flex-row">
          <div v-for="item in testGenres" :key="item" class="me-2 mb-2">
            <GenresTemplateVue :color="item.color" :name="item.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GenresTemplateVue from "../../../components/template/GenresTemplate.vue";
import MusicTemplate from "../../../components/template/MusicTemplate.vue";
import UserTemplate from "../../../components/template/UserTemplate.vue";

export default {
  data() {
    return {
      testGenres: [
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
      ],
      testMusic: [
        {
            img_url: "https://media.istockphoto.com/id/1300107681/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=hhRqD6lPvcc0MsacjjqWSggVctxsNNnohun7uZxSxbY=",
            name: "Weekend",
            name_info: "Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey"
        }
      ],
      testUser: [
        {
            img_url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            name: "Parfeniuk"
        }
      ]
    };
  },
  components: {
    GenresTemplateVue, MusicTemplate, UserTemplate
  },
};
</script>
