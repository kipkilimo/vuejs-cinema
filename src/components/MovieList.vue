<template>
    <div id="movie-list" >
        <div class="" v-if="filtredMovies.length">
            <movie-item v-for="movie in filtredMovies" v-bind:key=movie v-bind:movie="movie.movie"> 
                <div class="movie-sessions">
                    <div v-for="session in filtredSessions(movie.sessions)" v-bind:key="session.id" class="session-time-wrapper tooltip-wrapper"
                    v-tooltip="{seats:session.seats}"
                    > 
                         <div class="session-time">{{formatSessionTime(session.time)}}</div>
                    </div>
                </div>
            </movie-item>        
        </div>
        <div class="no-results" v-else-if="movies.length">
            <h4>No matching results for  <i>:{{noResults}}</i> </h4>
        </div> 
        <div class="no-results" v-else>
            <h4>Loading...</h4>
        </div>     
    </div>  
    
</template>
<script>
import genres from '../util/genres'
import times from '../util/times'
import MovieItem from './MovieItem.vue'

export default {
    props:['genre','time', 'movies','day'],
    methods: {
        formatSessionTime(raw){
            return this.$moment(raw).format('h:mm A')
        },
        filtredSessions (sessions){
            return sessions.filter(this.sessionPassesTimeFilter)    
        
        },
        moviePassesGenreFilter(movie) {
            if (!this.genre.length) {
                return true
            } else {
                let movieGenres=movie.movie.Genre.split(", ")
                let matched=true
                this.genre.forEach(genre=> {
                    if (movieGenres.indexOf(genre)===-1){
                        matched=false
                    }
                    
                })
                return matched
                //return this.genre.find(genre => movie.genre === genre)
            }
        },
        sessionPassesTimeFilter (session) {
            if (!this.day.isSame(this.$moment(session.time),'day')){
                return false
            }else if (this.time.length===0||this.time.length===2) {
                return true
            }else if (this.time[0]===times.AFTER_6PM) {
                return this.$moment(session.time).hour() >=18
            }else {
                return this.$moment(session.time).hour() <18
            }
        }
    },
    computed: {
        filtredMovies() {
            return this.movies
            .filter(this.moviePassesGenreFilter)
            .filter (movie=>movie.sessions.find(this.sessionPassesTimeFilter))
        },
        noResults(){
            let times=this.time.join(', ')
            let genres=this.genre.join(', ')
            return `${times}${times.length && genres.length ? ', ' :''}${genres}.`
        }
    },
    components:{
        MovieItem
    }
}
</script>
