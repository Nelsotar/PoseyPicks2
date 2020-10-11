class DRA33 extends Phaser.Scene{

  constructor(){
    super({key:'DRA33'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    this.bgSound = this.sound.add("phone");
    this.bgSound.play({loop:true});
    artBox(this, 'dra6e1', 'dra6e1Anim');
    initialDialogue(this, 0, "EMERGENCY REFERENCE!", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 0, "One of Posey's references are calling in to help her out! Who is it?", "narrator");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      let button1 = this.add.sprite(21,725,'smallButton').setOrigin(0);
      let button2 = this.add.sprite(21,900,'smallButton').setOrigin(0);
      let button3 = this.add.sprite(970,725,'smallButton').setOrigin(0);
      let button4 = this.add.sprite(970,900,'smallButton').setOrigin(0);
      if(gameState.tf){
        buttonFunction(button1, this, 'DRA33', 'DRA34', 'Fish');
      }else{
        button1.setFrame(2);
        setGreyedText(button1, this, "Fish");
     }

      if(gameState.legThanks || gameState.legThings){
        buttonFunction(button2, this, 'DRA33', 'DRA39', 'Legday Lisa');
      }else{
        button2.setFrame(2);
        setGreyedText(button2, this, "Legday Lisa");
      }

      if(cookleigh){
        buttonFunction(button3, this, 'DRA33', 'DRA40', 'Cookleigh');
      }else{
        button3.setFrame(2);
        setGreyedText(button3, this, "Cookleigh");
      }

      if(oldDemon || interviewDemon){
        buttonFunction(button4, this, 'DRA33', 'DRA41', 'R. Demon');
      }else{
        button4.setFrame(2);
        setGreyedText(button4, this, "R. Demon");
      }
    }
  }
}
