let nodemailer=require("nodemailer");
const express=require("express");
const app=express();
const path=require("path")

  app.use(express.static(__dirname+'/public'));  

  let quote=["You can observe a lot just by watching.","A house divided against itself cannot stand.",
  "Difficulties increase the nearer we get to the goal.",
  "Fate is in your hands and no one elses",
  "Be the chief but never the lord.",
  "Nothing happens unless first we dream.",
  "Well begun is half done.",
  "Life is a learning experience, only if you learn.",
  "Self-complacency is fatal to progress.",
  "Peace comes from within. Do not seek it without.",
  "What you give is what you get.",
  "We can only learn to love by loving.",
  "Life is change. Growth is optional. Choose wisely.",
  "You'll see it when you believe it.",
  "Today is the tomorrow we worried about yesterday.",
  "It's easier to see the mistakes on someone else's paper.",
  "Every man dies. Not every man really lives.",
  "To lead people walk behind them.",
  "Having nothing, nothing can he lose.",
  "Trouble is only opportunity in work clothes.",
  "A rolling stone gathers no moss.",
  "Ideas are the beginning points of all fortunes.",
  "Everything in life is luck.",
  "Doing nothing is better than being busy doing nothing.",
  "Trust yourself. You know more than you think you do.",
  "Study the past, if you would divine the future.",
  "The day is already blessed, find peace within it.",
  "From error to error one discovers the entire truth.",
  "Well done is better than well said.",
  "Bite off more than you can chew, then chew it.",
  "Work out your own salvation. Do not depend on others.",
  "One today is worth two tomorrows.",
  "Once you choose hope, anythings possible.",
  "God always takes the simplest way.",
  "One fails forward toward success.",
  "From small beginnings come great things.",
  "Learning is a treasure that will follow its owner everywhere",
  "Be as you wish to seem.",
  "The world is always in movement.",
  "Never mistake activity for achievement.",
  "What worries you masters you.",
  "Goals are the fuel in the furnace of achievement.",
  "Who sows virtue reaps honour.",
  "Be kind whenever possible. It is always possible.",
  "Talk doesn't cook rice.",
  "He is able who thinks he is able.",
  "A goal without a plan is just a wish.",
  "To succeed, we must first believe that we can.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "A weed is no more than a flower in disguise.",
  "Do, or do not. There is no try.",
  "All serious daring starts from within.",
  "The best teacher is experience learned from failures.",
  "Think how hard physics would be if particles could think.",
  "Love is the flower you've got to let grow.",
  "Don't wait. The time will never be just right.",
  "Time is the wisest counsellor of all.",
  "You give before you get.",
  "Wisdom begins in wonder.",
  "Without courage, wisdom bears no fruit.",
  "Change in all things is sweet.",
  "What you fear is that which requires action to overcome.",
  "When performance exceeds ambition, the overlap is called success.",
  "When deeds speak, words are nothing.",
  "Real magic in relationships means an absence of judgement of others.",
  "I never think of the future. It comes soon enough.",
  "Skill to do comes of doing.",
  "Wisdom is the supreme part of happiness.",
  "I believe that every person is born with talent."]
 
app.get("/",(req,res)=>{
    res.send("sheh");
})
app.get('/send',(req,res)=>{
    
    let mail=req.query.mail
    console.log(mail);
    console.log(quote[Math.floor(Math.random()*68)]);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'youremail@gmail.com',
          pass: 'yourpassword'
        }
      });
    let mymail=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'apptestbysujal@gmail.com',
            pass:'cflcquolpjcrvzeh'
        }
    })   
    let mailoptions={
        from:'apptestbysujal@gmail.com',
        to:mail,
        subject:'Quote From Sujal',
        text: quote[Math.floor(Math.random()*68)]
    }   
    mymail.sendMail(mailoptions,(err)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("mail sent succesfully")
        res.send("send succesfully")
        }
    })
})

app.listen(8000,()=>{
    console.log("srver running")
});


/* let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'maddymaddu46@gmail.com',
        pass:'sujal123'
    }
});
let mailentity={
    from:'maddymaddu46@gmail.com',
    to:""
} */