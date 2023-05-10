console.log("asyn")
const proto={
    slogan:function(){
      return  'this com is best'
    },
    changeName:function(newName){
        this.name=newName

    }
}
const vignesh=Object.create(proto,{ 
    name:{value:"Vignesh"},
    role:{value:"prog"}
})


