class TB11 extends Phaser.Scene{

  constructor(){
    super({key:'TB11'});
  }

  preload(){
  }

  create(){
    setUpScene(this);

    artBox(this,'tb', 'tbAnim2');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    this.textBox = this.add.image(0,716,'textBox').setOrigin(0);
    if(gameState.goOn){
      this.clickCounter = 2;
    }else{
      this.textContents = typeWriter(this, 'Always!', "posey");
    }

    this.portrait = this.add.sprite(60,745,'portraits').setOrigin(0);
    this.portrait.setFrame(1);
  }

  update(){
    checkNextDialogue(this, 2, 7, "Well, legs are really beautiful and useful, and they need your support!", "legdaylisa");
    checkNextDialogue(this, 3, 7, "Will you pledge $2 a month to The Canadian Leg Friends Association?", "legdaylisa");
    checkNextDialogue(this, 4, 7, "That's less than a leg of coffee!", "legdaylisa");
    displayButtons(this, 5, 'smallButton', 'TB11', ['TB12', 'TB15'], ['Okay','No thanks']);
  }
}
