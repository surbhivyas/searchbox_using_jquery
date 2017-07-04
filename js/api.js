var Api=function()
{
this.sampleObj={
  "error": false,
  "data":[{
    "name":"DLF phase 1",
    "locality":"sector 51",
    "city":"Gurgaon"
  },
  {
    "name":"DLF phase 2",
    "locality":"sector 88A",
    "city":"Gurgaon"
  }
]
}
}
Api.prototype={
  constructor:Api,
  getSuggestions:function(cb){
    cb(this.sampleObj);
  }
}
