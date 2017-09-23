


const User = require("./studentschema.js");
const abc=require("./questionschema.js")
userOperation={
    add(userObject,response){
        
                User.create(userObject,function(error){
                if(error){
                       response.send("Can't Add a New User"); 
                }
                else{
                    response.send("Student Added...")
                }
                });
            },
            search(userObject,response){
                User.find({'userid':userObject.userid,'password':userObject.password},function(error,docs){
                    if(error){
                        response.send('Some Problem in DB Connection');
                    }
                    else{
                        if(docs.length==0){
                            response.send('Invalid Userid or Password');
                        }
                        else{
                           // console.log("docs is",docs[0]);
                            response.render('displayquestions')
                           // response.send("welcome "+docs[0].userid);
                        //    callme(response);

                            
                }
                }
                })
        },
        call(userObject,response){
            console.log("object is",userObject)
            console.log("callingme")
            abc.findOne({'userid':userObject.userid,'password':userObject.password},function(error,docs){
                if(error){
                    console.log("some problem")
                    response.send('Some Problem in my Connection');   
                }
                else{
                    console.log(docs[0]);
                    response.send(docs[0]);
                }
            });
        }

        }
        // function callme(response){
        //     console.log("callingme")
        //     abc.findOne({'userid':userObject.userid,'password':userObject.password},function(error,docs){
        //         if(error){
        //             console.log("some problem")
        //             response.send('Some Problem in my Connection');   
        //         }
        //         else{
        //             console.log(docs[0]);
        //             response.send(docs[0]);
        //         }
        //     });
        // }
    
        module.exports=userOperation;
    //  abc.findOne(function(err,doc){
    //         if(err){
    //             console.log("some problem")
    //             response.send('Some Problem in my Connection');   
    //         }
    //         else{
    //             console.log(doc[0]);
    //             response.send(doc[0]);
    //         }
    //     });
   