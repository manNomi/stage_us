import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyAso2hTzkzplrQFH3CzG4rb95NlhLBsCsY'
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'


export default {
    name: 'SearchBar',
    methods:{
        async onKeywordEnter(event) {
            const keyword = event.target.value
            const config = {
                params: {
                    part: 'snippet',
                    type: 'video',
                    q: keyword,
                    key: YOUTUBE_API_KEY,
                },
            }
            //console.log(keyword)

            //axios.get(YOUTUBE_API_URL, config)

            const response = await axios.get(YOUTUBE_API_URL, config)
            //console.log(response)
            const videoList = response.data.items
            alert(videoList)
            this.$emit('on-keyword-enter', videoList)
        },
    },
}

// 크롤링 참고 주소
// https://blog.naver.com/jaeeun_98/222213116285