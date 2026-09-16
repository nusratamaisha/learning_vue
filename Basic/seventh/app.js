const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'maisha',
          name: 'maisha ahm',
          phone: '0011',
          email: 'maisha@gmail.com',
        },
        {
          id: 'nusrat',
          name: 'nusrat ahm',
          phone: '0022',
          email: 'nusrat@gmail.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{detailsAreVisible ? 'Hide':'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
        </li>
    `,
    data(){
        return{
            detailsAreVisible:false,
            friend:{
                id: 'maisha',
                name: 'maisha ahm',
                phone: '0011',
                email: 'maisha@gmail.com',
            }
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}); //componenet name should be unique, {config object}
app.mount('#app');