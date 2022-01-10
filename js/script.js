// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue (
    {
      el: "#app",
      counter: 10,
      data : {
        email_1: null,
        email_2: null,
        email_3: null,
        email_4: null,
        email_5: null,
        email_6: null,
        email_7: null,
        email_8: null,
        email_9: null,
        email_10: null
      },
      created() {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_1 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_2 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_3 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_4 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_5 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_6 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_7 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_8 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_9 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
        console.log(response.data.response);
        this.email_10 = response.data.response;
        })
        .catch((error) => {
        console.log(error);
      });
      }  
    }
)