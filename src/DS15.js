class DS15 extends Phaser.Scene{

  constructor(){
    super({key:'DS15'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    destroyMusic();
    this.sound.play("battlevictory");

    artBox(this, 'ds4', 'ds4Anim3');
    initialDialogue(this, 0, "The Responsibility Demon was banished back to the Responsible Dimension!", "narrator");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play('ds4Anim4', true);
    }
    checkNextDialogue(this, 2, 0, "Now the entire world was irresponsible and nothing ever got done again, including this game.", "narrator");
    checkNextScene(this, 3, "DS15", "DS16");
  }
}
