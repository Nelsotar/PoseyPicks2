class WC7 extends Phaser.Scene{

  constructor(){
    super({key:'WC7'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf1', 'wcmf1Anim2');
    initialDialogue(this, 19, "Thanks Posey! How we gonna do this?", "cookleigh");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play('wcmf1Anim3', true);
    }
    displayButtons(this, 2, 'largeButton', 'WC7', ['WC21', 'WC8'], ['Fake illness', 'Make a body double']);
  }
}
