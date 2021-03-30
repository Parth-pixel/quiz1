class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
            contestant = new Constant();
          var playerCountRef = await database.ref('constantCount').once("value");
          if(playerCountRef.exists()){
            contestantCount = playerCountRef.val();
            contestant.getCount();
          }
          form = new Question();
          form.display();
}

//question = new Quiz()
//question.display();
      }
    }