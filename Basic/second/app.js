const app = Vue.createApp({
    data () { 
        return {
            courseGoalA: 'maisha,finish the course while learning vue!',
            courseGoalB: 'maisha,master the course while learning vue!',
            vueLink:'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber<0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

