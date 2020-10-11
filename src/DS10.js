class DS10 extends Phaser.Scene{

  constructor(){
    super({key:'DS10'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_battle');
    artBox(this, 'ds1', 'ds1Anim');
    if(!gameState.encountered){
      initialDialogue(this, 0, "Posey encountered the Responsibility Demon!", "narrator");
    }
    else{
      this.clickCounter = 2;
    }
  }

  update(){
    if(this.clickCounter == 2 && !this.activated[0]){
      if(!gameState.encountered){
        destroyText(this);
        gameState.encountered = true;
      }
      this.activated[0] = true;
      createMultiButtons(this, 'largeButton', 'DS10', ['DS11', 'DS23'], ['Irresponsible Attack','Use Item']);
    }
  }
}
