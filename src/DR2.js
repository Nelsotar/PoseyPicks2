class DR2 extends Phaser.Scene{

  constructor(){
    super({key:'DR2'});
  }

  preload(){

  }

  create(){

    setUpScene(this);
    this.bg = this.add.sprite(0,0, 'x1').setOrigin(0);
    this.bg.setFrame(6);
    this.posey = this.add.sprite(2430, 200, 'posey_run').setOrigin(0);
    this.posey.anims.play('posey_runAnim', true);
    this.demon = this.add.sprite(2967, 0, 'demon_run').setOrigin(0);
    this.demon.anims.play('demon_runAnim');

    initialDialogue(this, 0, "Posey ran away, but the demon chased her down the street!", "narrator");
  }

  update(){
    if(this.posey.x > -500){
      this.posey.setX(this.posey.x - 25);
    }
    else if( this.posey.x <= -500 && this.demon.x >= 750){
      this.demon.setX(this.demon.x - 30);
    }
    else if(this.demon.x < 750 && !this.activated[2] && this.clickCounter >= 2){
      nextDialogue(this, 10, "Small child!! Escape responsibly!! You might trip and injure your organs!!", "rd");
      this.activated[2] = true;
      this.clickCounter = 0;
    }
    else if(this.clickCounter == 2 && !this.activated[1] && this.activated[2]){
      nextDialogue(this, 4, "I need a hiding spot!! Where do I go?!", "posey");
      this.activated[1] = true;
      this.artBox = this.add.sprite(100,166, "poseylookback").setOrigin(0);
      this.artBox.anims.play("poseylookbackAnim");
    }
    if(this.clickCounter == 4 && !this.activated[0] && this.activated[1]){
      this.activated[0] = true;
      destroyText(this);
      createMultiButtons(this, 'largeButton', 'DR3', ['DRA', 'DR5'], ['Alternate dimension', 'Behind a rock']);
    }
  }
}
