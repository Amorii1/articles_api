let validator={};

validator.Article=(presence=true)=>(
        {
            title:{
              presence:presence,
              type:"string",
              length:{minimum:4},
            },
            athor:{
              presence:presence,
              type:"string",
            },
            text:{
              presence:presence,
              type:"string",
            },
        
          });
    

module.exports=validator;