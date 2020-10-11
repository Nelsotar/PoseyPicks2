class W5 extends Phaser.Scene{

  constructor(){
    super({key:'W5'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    this.cameras.main.fadeIn(1500);
    this.cameras.main.once('camerafadeincomplete', () => {
      this.activated[2] = true;
    });

    artBox(this, 'wb1', 'wb1Anim');

    this.textBox = this.add.image(0,716,'textBox').setOrigin(0);
    this.portrait = this.add.sprite(60,745,'portraits').setOrigin(0);
    this.portrait.setFrame(0);
  }

  update(){
    if(drChung[0] && !drChung[1] && this.activated[2]){
      checkUp(this);
    }
    if(!this.activated[0] && this.activated[2] && ((drChung[0] && drChung[1]) || (!drChung[0] && !drChung[1]))){
      this.activated[0] = true;
      this.clickCounter = 0;
      this.textContents = typeWriter(this, "Posey got on the bus! Who should she sit beside?", "narrator");
    }
    if(this.clickCounter === 2 && !this.activated[1] && this.activated[2] && this.activated[0]){
      this.activated[1] = true;
      destroyText(this);
      createMultiButtons(this, 'smallButton', 'W5', ['WC', 'W6'], ['Cookleigh', 'An old broom']);
    }
  }
}
