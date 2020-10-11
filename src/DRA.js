
class DRA extends Phaser.Scene{

  constructor(){
    super({key:'DRA'});
  }

  preload(){

  }

  create(){

    setUpScene(this);

    this.transport = this.sound.add("transport");
    this.transport.play();

    artBox(this, 'dra1_portal', 'dra1_portalAnim');
    this.posey = this.add.sprite(0,0, 'dra1_posey').setOrigin(0);
    this.posey.anims.play('dra1_poseyAnim');
    this.flockles = this.add.sprite(830, 315, 'dra1_flockles').setOrigin(0);
    this.flockles.anims.play('dra1_flocklesAnim');

    initialDialogue(this, 0, "Posey transported herself to another dimension...", "narrator");
  }

  update(){
    if(this.posey.alpha != 0){
      this.posey.setAlpha(this.posey.alpha - 0.005);
      this.clickCounter = 0;
    }
    else if(this.posey.alpha === 0 && this.clickCounter === 1 && !this.activated[0]){
      //this.sound.play("textProceed");
      this.activated[0] = true;
      this.artBox.play("dra1_portalAnim2");
      this.flockles.play("dra1_flocklesAnim2");
      this.transport.stop();
      this.sound.play("pop");
    }
    if(!this.artBox.anims.isPlaying && this.activated[0]){
      nextScene(this, "DRA", "DRA2", false);
    }
  }
}
