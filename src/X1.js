class X1 extends Phaser.Scene{

  constructor(){
    super({key:'x1'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_waiting');

    artBox(this, 'x1', 'x1Anim');

    if(!gameState.played){
      initialDialogue(this, 0, 'One day, Posey Picks was waiting for the school bus.', 'narrator' );
    }
  }

  update(){
    if(!gameState.played && this.clickCounter == 2 && !this.activated[0]){
      this.activated[0] = true;
      nextDialogue(this, 0, 'It was taking a loooong tiiiime...', 'narrator');
    }
    else if(gameState.played && !this.activated[1] || this.clickCounter === 4 && !this.activated[1]){
      if(!gameState.played){
        destroyText(this);
      }

      gameState.played = true;
      this.activated[1] = true;

      let button1 = this.add.sprite(21,725,'smallButton').setOrigin(0);
      if(gameState.tb){
        button1.setFrame(2);
        setGreyedText(button1, this, 'Talk to Lisa');
      }else{
        buttonFunction(button1, this, 'X1', 'TB', 'Talk to Lisa');
      }

      let button2 = this.add.sprite(970,725,'smallButton').setOrigin(0);
      if(gameState.tf){
        button2.setFrame(2);
        setGreyedText(button2, this, 'Talk to Fish');
      }else{
        buttonFunction(button2, this, 'X1', 'TF', 'Talk to Fish');
      }

      let button3 = this.add.sprite(21,900,'smallButton').setOrigin(0);
      buttonFunction(button3, this, 'X1', 'W', 'Keep waiting');
      let button4 = this.add.sprite(970,900,'smallButton').setOrigin(0);
      buttonFunction(button4, this, 'X1', 'DS', 'Ditch school');
    }

  }



}
