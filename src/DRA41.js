class DRA41 extends Phaser.Scene{

  constructor(){
    super({key:'DRA41'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("boop");
    
    let randNum = Math.floor(Math.random() * 2);

    if((!interviewDemon && oldDemon) || (randNum === 0 && (interviewDemon && oldDemon))){
      this.activated[0] = true;
      destroyAndPlayMusic(this, "bgm_slowfuture");
      artBox(this, 'dra6e2', 'dra6e2Anim2');
      initialDialogue(this, 12, "Posey gave me soup. I like soup because I'm old and tired.", "oldrd");

    }else if((interviewDemon && !oldDemon) || (randNum === 1 && (interviewDemon && oldDemon))){
      this.activated[1] = true;
      destroyAndPlayMusic(this, "bgm_cityloop");
      artBox(this, 'dra6e2', 'dra6e2Anim3');
      initialDialogue(this, 9, "I've actually interviewed Posey before, and it went very well!", "rd");
    }
  }

  update(){
    if((this.activated[0] && this.clickCounter === 2) || (this.activated[1] && this.clickCounter === 6)){
      nextScene(this, 'DRA41', 'DRA36');
    }

    if(this.activated[1] && this.clickCounter === 2 && !this.activated[2]){
      this.activated[2] = true;
      nextDialogue(this, 9, "Your reality is probably not as cool as mine, so it is understandable that she may be nervous.", "rd");
    }

    if(this.activated[1] && this.clickCounter === 4 && !this.activated[3]){
      this.activated[3] = true;
      nextDialogue(this, 9, "But I assure you, even if your Posey is half as good as mine, you'd be lucky to have her on your team.", "rd");
    }
  }
}
