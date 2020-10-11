class WC22 extends Phaser.Scene{

  constructor(){
    super({key:'WC22'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf1', 'wcmf1Anim5');
    initialDialogue(this, 19, "Ooh, okay, I have two sick faces I can use. Which one is better?", "cookleigh");
  }

  update(){
    checkNextScene(this, 2, 'WC22', 'WC23');
  }
}
