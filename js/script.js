const app = new Vue({

  el: "#app",

  data:{
    mails: [],
    loading : true,
    httpError : false,
  },

  methods:{

    getMail(){

      this.mails = [];
      for(let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response)=>{

          console.log("response", response.data);
          console.log("mail",  response.data.response );

          const mail = response.data.response;
          this.mails.push(mail);
          console.log(this.mails);
  
          if(this.mails.length == 10){
            this.loading = false;
          }

        }).catch(() =>{
          this.httpError = true;
        })
      };

    },

  },
  mounted(){
    this.getMail();
  }
});