class DRR16 extends Phaser.Scene{

  constructor(){
    super({key:'DRR16'});
  }

  preload(){

  }

  create(){

    artBox(this, 'drr3', 'drr3Anim2');
    this.soup = this.add.sprite(300,300,'drr_soupbowl');
    this.soup.anims.play("soupAnim");
    this.soup.setInteractive();
    this.input.setDraggable(this.soup);
    this.dropzone = this.add.zone(1564,350,315,420).setDropZone();
    this.dropzone.setAngle(-35);
    this.dropzone.setVisible(true);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY){
        if(dragX > 0 && dragX < 1920){
          gameObject.x = dragX;
        }
        if(dragY > 0 && dragY < 600){
          gameObject.y = dragY;
        }
    });

    this.input.on("dragover", function(){
        this.soup.destroy();
        nextScene(this, "DRR16", "DRR17");
    }, this);

    initialDialogue(this, 0, "(Drag the soup to the demon's face!)", "narrator");
  }

  update(){
  }
}
