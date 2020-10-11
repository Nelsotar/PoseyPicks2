class WC14 extends Phaser.Scene{

  constructor(){
    super({key:'WC14'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb3', 'wcmb3Anim2');
    this.dots = this.add.sprite(1282,154, "wcmb3_dots").setOrigin(0);
    this.dots.anims.play("wcmb3_dotsAnim");
    initialDialogue(this, 43, "N-No... of course not...", "cookleighmom");
  }

  update(){
    checkNextDialogue(this, 2, 43, "Let's just enjoy our non-identical lives together.", "cookleighmom");
    checkNextScene(this, 3, 'WC14', 'WC15');
  }
}
