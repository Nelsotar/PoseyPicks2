class WC27 extends Phaser.Scene{

  constructor(){
    super({key:'WC27'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play('bop');
    artBox(this, 'wcmf4', 'wcmf4Anim');
    initialDialogue(this, 33, "Heh, nice try, kids. Just for that, I'm going to TELEPORT you straight to school.", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC27', 'WC28');
  }
}
