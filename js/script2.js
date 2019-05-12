var vm = new Vue({
  el: '#page2',
  data: {
    purposetwo: 'erp',
    activitytwo: 'berp',
    transporttwo: 'erp',
    othertransporttwo: 'berp',
    safetwo: 'erp',
    timetwo: 'berp',
    agetwo: 'erp',
    ethnicitytwo: 'berp',
    otherracetwo: 'erp',
    employmenttwo: 'berp',
    otheremploymenttwo: 'berp'
  },
  created: function() {
    (this.purposetwo = localStorage.getItem('purposetwo')),
    (this.activitytwo = localStorage.getItem('activitytwo')),
    (this.transporttwo = localStorage.getItem('transporttwo')),
    (this.othertransporttwo = localStorage.getItem('othertransporttwo')),
    (this.safetwo = localStorage.getItem('safetwo')),
    (this.timetwo = localStorage.getItem('timetwo')),
    (this.agetwo = localStorage.getItem('agetwo')),
    (this.ethnicitytwo = localStorage.getItem('ethnicitytwo')),
    (this.otherracetwo = localStorage.getItem('otherracetwo')),
    (this.employmenttwo = localStorage.getItem('employmenttwo')),
    (this.otheremploymenttwo = localStorage.getItem('otheremploymenttwo'));
  },
});
