class WC105 extends Phaser.Scene{

  constructor(){
    super({key:'WC105'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.artBox = this.add.sprite(0,0, "wcmf6").setOrigin(0);
    this.artBox.setFrame(0);
    this.dots = this.add.sprite(1117,371, "wcmf6_dots").setOrigin(0);
    this.dots.anims.play("wcmf6_dotsAnim");
    initialDialogue(this, 20, "...", "cookleigh");
  }

  update(){
    checkNextScene(this, 2, "WC105", "WC106");
  }
}
