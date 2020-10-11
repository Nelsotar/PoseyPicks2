class W2 extends Phaser.Scene{

  constructor(){
    super({key:'W2'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.busArrive = this.sound.add("busArrive");
    this.busArrive.play();
    artBox(this, 'w1', 'w1Anim');
    this.time.addEvent({delay: 2000, loop:false, callbackScope: this, callback: ()=>{
      this.artBox.anims.stop();
      this.busArrive.stop();
      this.sound.play("bus2");
      this.artBox.anims.play('w1Anim2');
    }});
    this.overlay = this.add.sprite(1920,0,'bus').setOrigin(0);
    this.overlay.anims.play('busAnim', true);

    initialDialogue(this, 0, "After a while, the bus finally arrived!", "narrator");
  }

  update(){
    if(this.overlay.x > 0){
      this.overlay.setX(this.overlay.x - 20);
    }
    else if(!this.activated[3] && this.overlay.x <= 0){
      this.activated[3] = true;
      this.clickCounter = 0;
    }
    if(!this.artBox.anims.isPlaying){
      this.artBox.anims.play('w1Anim3', true);
    }
    if(this.clickCounter === 2 && !this.activated[0] && this.activated[3]){
      this.activated[0] = true;
      nextDialogue(this, 33, "Oh gosh, gosh-gosh!! I'm so sorry I'm late!!", "bus");
    }
    if(this.clickCounter === 4 && !this.activated[1] && this.activated[3]){
      this.activated[1] = true;
      destroyText(this);
      createMultiButtons(this, 'largeButton', 'W2', ['W3','W44'],  ['No problem', 'Please try to be on time']);
    }
  }
}
