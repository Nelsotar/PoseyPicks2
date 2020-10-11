class WC66 extends Phaser.Scene{

  constructor(){
    super({key:'WC66'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm2', 'wcm2Anim');
    initialDialogue(this, 2, "C'monnnnnnn, can't you take a break for one day?", "posey");
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 4 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("bop");
    }
    checkNextScene(this, 2, 'WC66', 'WC67');
  }
}
