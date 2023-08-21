<template>
    <section>
        <div class="sidebar-nav-block">
            <div class="side-nav-logo d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-delay="150">
                <!-- <p class="sn-text-logo">Music Box</p> -->
                <img src="../../assets/icons/mbox_logo.png" class="img-logo">
            </div>
            <div class="side-nav-sett" data-aos="fade-down" data-aos-delay="150">
                <div class="side-nav-ml d-flex"> <!-- 30px height-->
                    <img class="img-sn-sett" src="../../assets/icons/mbox_audio_library.png">
                    <p class="text-sn-sett">My Library</p>
                    <img class="img-sn-sett-add" src="../../assets/icons/mbox_add.png">
                </div>
                <div class="side-nav-paa d-flex"> <!-- 40px height-->
                    <div class="sn-paa-wrap-text">
                        <p class="text-sn-paa">Playlist</p>
                    </div>
                    <div class="sn-paa-wrap-text">
                        <p class="text-sn-paa">Albums</p>
                    </div>
                    <div class="sn-paa-wrap-text">
                        <p class="text-sn-paa">Artist</p>
                    </div>    
                </div>
                <div class="side-nav-search d-flex"> <!-- 30px height-->
                    <img class="img-sn-s" src="../../assets/icons/mbox_search.png">
                    <p class="text-sn-s">Recent</p>
                    <img class="img-sn-s-pt" src="../../assets/icons/mbox_arrow_down.png">
                </div>
            </div>
            <div class="side-nav-content" v-for="item in testUser" :key="item">
                <LibraryComponents 
                :img_url="item.img_url" 
                :name="item.name"
                :name_desc="item.name_desk"
                :name_info="item.name_info"
                :flag="item.flag"
                />
            </div> 
        </div>
    </section>
</template>

<script>
import LibraryComponents from '../../components/template/LibraryComponents.vue';

export default {
    data() {
        return {
            testUser: [
                {
                    img_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAkFBMVEVMUnDlY1PRUkHqZFJIUnHTUkBBUXHnY1LVUj9JUnDXUj5EUXHrZFHZWUhFUXHZYlXNU0NeVG2FVGHgXk5UU27FU0fAX1ubWmOQUlthVW28X1ysXWB+WGjGYFrAU0nfY1SgVFeyXl7NYVhtVWyDWGiPWmV0VmqlXGGZVV2xU1CZVFqpVFN4V2nKYFkzUHK5U01YH6zSAAADoUlEQVR4nO3c23baMBCFYQNGIBQMBjcpCTk0JKQ0afv+b1dLNqdgYcC0dHn+7za+oHuNxiNVEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAC4GB1FxphIa/8TYZg+YcLwH36q/1CogtnLTep1HhtTFJc2Jp6/fk2NZoGSG5fR09tBK3PVeH6Ld7LQKv7+0Ox1rV53uBgFhYHWXhTcDK46jZVOq3U/U1tRqMltp5U+Mu73m6l2uzf8kZhLfeDLUdNBq/FJp3ObRrgU6rvG+hGXVrPZHY7UBT/1JWhzt1lTK63BfBmFmT1fbf0tS6vde9ei2pYOfu4U1XIlvmRhmY/O5zDHeWk9JILC0toXlS0tt8jUtKjsstLqfhEUlrr3R5WG9REF0awoqlVYD2KyUm9XhUEsl+FjEiaD4qzysHpPQhp8ON9XVbawrn/deh/JelbvQ0ZlqWdPzawr683/RNbg219EFFb0sncFZpW152/5KhxJKCzzs6ysSmSFJaG960lJtyqVF9a8/mGZm6pZZYXVfar/xlDdV1yCeWFJ6O7msWpUy210cul/yt+m48pllY8N3UndG9Y5ssobVu2b+xmzqv3oTlaHO2NWs7pndY73YD65x7X/bwp1Xb2wXFbD+s+i0ah863xIVu1F/WdRnVRehGMxBw3q23k2z0nt25U9aKi6CN1bcFH/dpVS/gPig4ylHMkEtrCqlVXfHfXVv7M76q5KYWVlNRVRVild5VXoyuq3iG5lmdcK7d2VVf33Nyvq+uRVaMuq+y6kW1k6OTUq263aQwmz1Yp5PbGwspFdTLdyThyy3AoUsBPcogPf7Y59BK5AK/TcGtpL1mi1po4fHPqSrhNtOfrAwa7A7m95VWWZ5+PCypqVzKy09/aeL6pmW9DAvi2aHJGVa1biLrevmcLbxoVss+r9kBvVES9DF5WkbWCBkjvJm1FJfQWuqW+HhOUutQfS5vUdh5zPuLtpQqeFTf7v5qz07WAVE5UNq2QmdVHV/mbaYfzfKFlF1SSqXBjvCctVldhxfVc0efSFRVSfecNyC5CotnjCoq0XiSaN3bCIqlgU71RWnxHUY2cZ9oV9tfkY0fac5bbLsn5f4AjR5pxlD2EWofjtsldaWa2NqEQf7ZUKk2xv6M6rvhLVXqHbSI/tD+28EFUJHVy3xm5fI+uCx0m0WvSE/WZMBeZd2m8RVRBOmRUORlEBAAAAAAAAAAAAAAAAAAAAAAAAAAD8b/4Av/gw+iqLemUAAAAASUVORK5CYII=",
                    name: "Favorite Trackes",
                    name_info: "PlayList",
                    name_desk: "114 track",
                    flag: "border-radius: 10px;"
                },
                {
                    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO5HNtl_-F37h2YN9UiSnChjiNIHf5m4LsQ&usqp=CAU", 
                    name: "Little", 
                    name_info: "PlayList", 
                    name_desk: "khpolinna",
                    flag: "border-radius: 10px;"
                },
                {
                    img_url: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80", 
                    name: "Krokus", 
                    name_info: "Artist", 
                    name_desk: "",
                    flag: "border-radius: 50%;"
                },
                {
                    img_url: "https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.jpg?s=612x612&w=0&k=20&c=L3vg8tdJUd_-aO0rF2C4ih_s2k3McWb1O7APjtNrW9k=", 
                    name: "AM", 
                    name_info: "Album", 
                    name_desk: "Arctic Monkeys",
                    flag: "border-radius: 10px;"
                },
                {
                    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HiCIJIJejYG9DkOX1Eq6FFFUurPObvyjcg&usqp=CAU", 
                    name: "Parfeniuk", 
                    name_info: "Artist", 
                    name_desk: "",
                    flag: "border-radius: 50%;"
                }
            ]
        }
    },  
    components: {
        LibraryComponents
    }
}
</script>

<style>

</style>