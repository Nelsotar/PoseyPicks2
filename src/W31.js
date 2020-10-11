class W31 extends Phaser.Scene{

  constructor(){
    super({key:'W31'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_battle');
    artBox(this, 'wbb1', 'wbb1Anim');

    if(!gameState.hbBattleStart){
      initialDialogue(this, 0, 'Posey encountered HOT BEAR BALLOON!', 'narrator');
      gameState.hbBattleStart = true;
    }
    else{
      this.clickCounter = 2;
    }
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'W31', ['W42', 'W39', 'W32'], ['Tackle', 'Surrender', "Notice Bear's Legs"]);
  }
}
