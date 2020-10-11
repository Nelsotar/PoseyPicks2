class WC110 extends Phaser.Scene{

  constructor(){
    super({key:'WC110'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("horn");
    artBox(this, 'wcmf5', 'wcmf5Anim3');
    this.scrumble = this.add.sprite(682,295, "wcmf5_scrumble").setOrigin(0);
    this.scrumble.anims.play("wcmf5_scrumbleAnim");
  }

  update(){
    if(this.clickCounter === 1){
      nextScene(this,  "WC110", "WC111");
    }

  }
}
