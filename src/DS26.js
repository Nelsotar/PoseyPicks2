class DS26 extends Phaser.Scene{

  constructor(){
    super({key:'DS26'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    gameState.pumpkins++;
    this.chomp = this.sound.add("chomp");
    this.chomp.play({loop:true, delay:0.25});

    artBox(this, 'ds2','ds2Anim');

    this.textBox = this.add.image(0,716,'textBox').setOrigin(0);
    if(gameState.pumpkins == 1){
      this.textContents = typeWriter(this, "Posey ate the pumpkin! The fiber will aid in forming stool!", "narrator");
    }
    else if(gameState.pumpkins == 2){
      this.textContents = typeWriter(this, "Posey ate another pumpkin! Wow jeez!!", "narrator");
    }
    else if(gameState.pumpkins == 3){
      this.textContents = typeWriter(this, "Posey ate ANOTHER pumpkin! Is that even legal!?", "narrator");
    }

    this.portrait = this.add.sprite(60,745,'portraits').setOrigin(0);
    this.portrait.setFrame(0);
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play('ds2Anim2');
      this.chomp.stop();
    }
    if(this.clickCounter >= 2 && !this.activated[1] && this.activated[0]){
      this.activated[1] = true;
      if(gameState.pumpkins < 3){
        nextScene(this, "DS24", "DS10");
      }
      else{
        nextScene(this, "DS24", "DS27");
      }
    }
  }
}
