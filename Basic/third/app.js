const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      fullname:'',
    };
  },

  // watch:{
  //   name(value){
  //     if(value==''){
  //       this.fullname
  //     }
  //     else{
  //       this.fullname = value+' '+'maisha';
  //     }
  //   }
  // },

  computed:{
    fullName (){
      if (this.name == ''){
        return '';
      }
      return this.name+' '+'maisha';
    }
  },

  methods:{
    outputFullname(){
      console.log('running again.......')
      if (this.name == ''){
        return '';
      }
      return this.name+' '+'maisha';
    },

    confirmInput(){
      this.confirmedName = this.name;
    },

    submitForm(){
      event.preventDefault();
      alert('submitted!');
    },

    setName(event, lastName){
      this.name = event.target.value+' '+lastName;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    sub(num) {
      this.counter = this.counter - num;
    },

    resetInput(){
      this.name = ''
    }
  }
});

app.mount('#events');
