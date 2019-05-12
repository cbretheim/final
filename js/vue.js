// SCROLL PROGRESS FUNCTION
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};


var myVue = new Vue({
 el: "#app",
 data () {
   return {
   purpose: [],
   activity: "",
   transport: "",
   othertransport: "",
   safe: "",
   time: "5",
   age: "18",
   ethnicity: [],
   otherrace: "",
   employment: "",
   otheremployment: ""
 },
 methods: {
   saveMyForm: function() {
    localStorage.setItem("purposetwo", this.purpose);
    localStorage.setItem("activitytwo", this.activity);
    localStorage.setItem("transporttwo", this.transport);
    localStorage.setItem("othertransporttwo", this.othertransport);
    localStorage.setItem("safetwo", this.safe);
    localStorage.setItem("timetwo", this.time);
    localStorage.setItem("agetwo", this.age);
    localStorage.setItem("ethnicitytwo", this.ethnicity);
    localStorage.setItem("otherracetwo", this.otherrace);
    localStorage.setItem("employmenttwo", this.employment);
    localStorage.setItem("otheremploymenttwo", this.otheremployment);

    window.location = "../survey-success.html"
        }
      }
 });
//  methods: {
//   handleSubmit() {
//     // Send data to the server or update your stores and such.
//   }
// }



 ///*** RESULTS COMPONENT ***///
 // Vue.component('results', {
 //   props: ['purpose', 'activity', 'transport', 'othertransport', 'safe', 'time', 'age', 'ethnicity', 'otherrace', 'employment', 'otheremployment'],
 //   template: `
 //   <h3>Your results</h3>
 //      <p>{{purpose}}</p>
 //      <p>{{activity}}</p>
 //      <p>{{transport}}</p>
 //      <p>{{othertransport}}</p>
 //      <p>{{safe}}</p>
 //      <p>{{time}}</p>
 //      <p>{{age}}</p>
 //      <p>{{ethnicity}}</p>
 //      <p>{{otherrace}}</p>
 //      <p>{{employment}}</p>
 //      <p>{{otheremployment}}</p>
 // `
 // });
