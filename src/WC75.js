class WC75 extends Phaser.Scene{

  constructor(){
    super({key:'WC75'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcl1', 'wcl1Anim3');
    this.leftLung = this.add.sprite(1290,350,'wcl_Llung').setOrigin(1, 0.3);
    this.leftLung.anims.play('wcl_LlungAnim2');
    this.leftLung.setScale(0.7);
    this.leftLung.setInteractive();
    this.rightLung = this.add.sprite(1275,350,'wcl_Rlung').setOrigin(0, 0.3);
    this.rightLung.anims.play('wcl_RlungAnim2');
    this.rightLung.setScale(0.7);
    this.rightLung.setInteractive();
    initialDialogue(this, 0, "(Squiggle over Cookleigh's lungs to fill them with air!)", "narrator");

    this.leftLung.on('pointermove', function(){
      if(!this.activated[1] && !this.activated[2]){
        this.activated[1] = true;
        this.whoosh = this.sound.add("whoosh");
        this.whoosh.play({loop:true});
      }
      if(this.leftLung.scale < 1){
        this.leftLung.setScale(this.leftLung.scale + 0.005);

      }
      else if(!this.activated[2]){
        this.activated[2] = true;
        this.sound.play('dream');
        this.whoosh.stop();
      }
    }, this);

    this.leftLung.on('pointerout', function(){
      this.whoosh.stop();
      this.activated[1] = false;
    }, this);

    this.rightLung.on('pointermove', function(){
      if(!this.activated[3] && !this.activated[4]){
        this.activated[3] = true;
        this.whoosh2 = this.sound.add("whoosh");
        this.whoosh2.play({loop:true});
      }
      if(this.rightLung.scale < 1){
        this.rightLung.setScale(this.rightLung.scale + 0.005);

      }
      else if(!this.activated[4]){
        this.activated[4] = true;
        this.sound.play('dream');
        this.whoosh2.stop();
      }
    }, this);

    this.rightLung.on('pointerout', function(){
      this.whoosh2.stop();
      this.activated[3] = false;
    }, this);
  }

  update(){
    if(this.rightLung.scale >= 1.0 && this.leftLung.scale >= 1.0 && !this.activated[0]){
      this.activated[0] = true;
      this.time.addEvent({loop:false, delay:1000, callbackScope: this, callback:()=>{
        nextScene(this, 'WC75', 'WC76');
      }});

    }
  }
}
