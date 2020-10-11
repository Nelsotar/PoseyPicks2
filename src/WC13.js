class WC13 extends Phaser.Scene{

  constructor(){
    super({key:'WC13'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("battlevictory");
    artBox(this, 'wcmb3', 'wcmb3Anim');
    initialDialogue(this, 19, "Great!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 19, "Um, did you know we could clone ourselves so easily?", "cookleigh");
    checkNextScene(this, 3, 'WC13', 'WC14');
  }
}
