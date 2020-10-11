class DRA27 extends Phaser.Scene{

  constructor(){
    super({key:'DRA27'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'dra5', 'dra5Anim5');
    this.bunnyhead = this.add.image(476,142, 'bunnyhead'). setOrigin(0.6);

    initialDialogue(this, 11, "That sounds unsanitary... and not very responsible...", "rd");
  }

  update(){
    if(this.clickCounter >= 2 && this.bunnyhead.y <= 450){
      this.bunnyhead.setY(this.bunnyhead.y + 20);
    }
    else if(this.bunnyhead.y >= 350 && !this.activated[0]){
      this.sound.play("bop");
      this.bunnyhead.setRotation(1.5);
      this.activated[0] = true;
      this.clickCounter = 0;
    }
    else if(this.clickCounter >= 1 && this.activated[0]){
      this.sound.play("textProceed");
      nextScene(this, "DRA27", "DRA28");
    }
  }
}
