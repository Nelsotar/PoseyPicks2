class W18 extends Phaser.Scene{

  constructor(){
    super({key:'W18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb4', 'wb4Anim');
    initialDialogue(this, 4, "Umm... Hot Bear... are you okay?", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 18, "No... I could probably use some therapy.", "hb");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      let button1 = this.add.sprite(496,725,'smallButton').setOrigin(0);
      buttonFunction(button1, this, 'W18', 'W22', 'Talk to broom!');
      let button2 = this.add.sprite(496,900,'smallButton').setOrigin(0);
      if(!drChung[0]){
        button2.setFrame(2);
        setGreyedText(button2, this, 'I might know a dog...');
      }
      else{
        buttonFunction(button2, this, 'W18', 'W19', 'Talk to Dr. Chung!');
      }
    }
  }
}
