class DRA34 extends Phaser.Scene{

  constructor(){
    super({key:'DRA34'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("boop");
    destroyAndPlayMusic(this, "bgm_waiting");
    artBox(this, 'dra6e1', 'dra6e1Anim2');
    initialDialogue(this, 5, "Posey's a cool bunny. She really helped me out with my important body-sock situation.", "fish");
  }

  update(){
    if(gameState.fishLikeSock && this.clickCounter === 2){
      nextScene(this, 'DRA34', 'DRA35');
    }else if(this.clickCounter === 2){
      nextScene(this, 'DRA34', 'DRA38');
    }
  }
}
