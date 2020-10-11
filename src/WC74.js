class WC74 extends Phaser.Scene{

  constructor(){
    super({key:'WC74'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'timewarp');
    artBox(this, 'wcl1', 'wcl1Anim2');
    this.leftLung = this.add.sprite(1290,350,'wcl_Llung').setOrigin(1, 0.3);
    this.leftLung.anims.play('wcl_LlungAnim');
    this.leftLung.setScale(0.7);
    this.rightLung = this.add.sprite(1275,350,'wcl_Rlung').setOrigin(0, 0.3);
    this.rightLung.anims.play('wcl_RlungAnim');
    this.rightLung.setScale(0.7);
    initialDialogue(this, 1, "This exercise is called Stretchy Lungs. ", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 1, "First, take a deep breath and reach your lungs out like they're little hands!!", "posey");
    checkNextDialogue(this, 3, 1, "Little hands reaching for the sky!!", "posey");
    checkNextScene(this, 4, 'WC74', 'WC75');
  }
}
