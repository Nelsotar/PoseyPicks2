class WC106 extends Phaser.Scene{

  constructor(){
    super({key:'WC106'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("blast");
    artBox(this, 'wcmf6', 'wcmf6Anim');
    initialDialogue(this, 21, "I can't do it!! It's not true! It was my idea all along, don't punish Posey!", "cookleigh");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play('wcmf6Anim2');
    }
    checkNextScene(this, 2,  "WC106", "WC107");
  }
}
