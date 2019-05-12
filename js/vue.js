// Vue.component('radio-options', {
//   props: ['name', 'model', 'year', 'materials', 'height', 'id'],
//   template: `
//   <h3>{{question}}</h3>
//   <label class="container">Scared for my life
//     <input type="radio" value="{{safety}}">
//     <span class="radio"></span>
//   </label>`
// });


var myVue = new Vue({
 el: "#form",
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
   // consoles: [
   //   { question: "How safe do you feel biking in this area?",
   //     model: "CH20",
   //     year: 1956,
   //     materials: "oak and leather",
   //     height: 73,
   //      id: 1},
   //   { name: "Dining chair",
   //     model: "CH23",
   //     year: 1950,
   //     materials: "oak, walnut, natural cord",
   //     height: 78.6,
   //   id: 2}
   // ]
 }}

//  methods: {
//   handleSubmit() {
//     // Send data to the server or update your stores and such.
//   }
// }

 });

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
