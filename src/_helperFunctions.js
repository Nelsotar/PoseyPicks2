const playSeamlessMusic = function(scene, key){
  let volume = 2;
  if(key === "bgm_title"){
    volume = 1.8;
  }
  else if(key === "bgm_hiding"){
    volume = 1.8;
  }
  else if(key === "bgm_video"){
    volume = 1.6;
  }
  else if(key === "bgm_scary"){
    volume = 1.9;
  }
  else if(key === "bgm_chung"){
    volume = 1.9;
  }
  if(bgm == null){
    bgm = scene.sound.add(key);
    bgm.play({volume: volume});
    bgm.on('complete', ()=>{
      bgm.play({volume: volume});
    });
  }
};

const destroyMusic = function(key){
  if(bgm != null && key !== bgm.key){
    bgm.stop();
    bgm.destroy();
    bgm = null;
  }
}

const cutOffSounds = function(scene){
  if(scene.sfx != null){
    for(sound in scene.sfx){
      scene.sfx[sound].stop();
    }
    scene.sfx = null;
  }
}

const playEndSound = function(scene, key){
  if(scene.sfx == null){
    scene.sfx = [];
  }
  scene.sfx.push(scene.sound.add(key));
  scene.sfx[scene.sfx.length - 1].play();
}

const destroyAndPlayMusic = function(scene, key){
  destroyMusic(key);
  playSeamlessMusic(scene, key);
}

const setClickCounter = function(scene){
  scene.clickCounter = 0;
  scene.input.on('pointerup', function(){
      scene.clickCounter++;
    }, this);
}

const setUpScene = function(scene){
  scene.activated = [];
  setClickCounter(scene);
};

const artBox = function(scene, artKey, animationKey){
   scene.artBox = scene.add.sprite(0, 0, artKey).setOrigin(0);
   scene.artBox.anims.play(animationKey, true);
};

const initialDialogue = function(scene, portraitNum, text, speaker){
  scene.textBox = scene.add.image(0,716,'textBox').setOrigin(0);
  scene.textContents = typeWriter(scene, text, speaker);
  scene.portrait = scene.add.sprite(60,745,'portraits').setOrigin(0);
  scene.portrait.setFrame(portraitNum);
};

const nextDialogue = function(scene, portraitNum, text, speaker, playTextProceed = true){
  if(playTextProceed){
    scene.sound.play("textProceed");
  }

  if(scene.textContents != null){
    scene.textContents.destroy();
    scene.endTextIcon.destroy();
  }
  scene.textContents = typeWriter(scene,text,speaker);
  scene.portrait.setFrame(portraitNum);
};

const checkNextDialogue = function(scene, dialogNum, portraitNum, text, speaker, altBool = true){
  if(scene.clickCounter === ((dialogNum - 1) * 2) && !scene.activated[dialogNum - 1] && altBool){
    scene.activated[dialogNum - 1] = true;
    nextDialogue(scene, portraitNum, text, speaker);
  }
};

const destroyText = function(scene){
  scene.sound.play("textProceed");
  if(scene.textContents != null){
    scene.textContents.destroy();
    scene.textBox.destroy();
    scene.portrait.destroy();
    scene.endTextIcon.destroy();
  }
  removeSpeech(scene);
};

const getXPosition = function(size, num, totalNum){
  let x;

  if(size === 'smallButton'){
    if(totalNum === 4){
      if(num === 1 || num === 3){
        x = 21;
      }
      else{
        x = 970;
      }
    }
    else if(totalNum === 3){
      if(num === 1){
        x = 21;
      }
      else if(num === 2){
        x = 970;
      }
      else{
        x = 496;
      }

    }
    else{
      x = 496;
    }
  }
  else{
    x = 24;
  }

    return x;
};

const getYPosition = function(num, totalNum){
  let y;

  if(totalNum === 4 || totalNum === 3){
    if(num === 1 | num === 2){
      y = 725;
    }
    else{
      y = 900;
    }
  }
  else{
    if(num === 2){
      y = 900;
    }
    else{
      y = 725;
    }
  }

    return y;
};

const createButton = function(scene, size, num, totalNum, currentScene, nextScene, text){
  let x = getXPosition(size, num, totalNum);
  let y = getYPosition(num, totalNum);

  let button = scene.add.sprite(x,y,size).setOrigin(0);
  buttonFunction(button, scene, currentScene, nextScene, text);

  return button;
};

const createMultiButtons = function(scene, size, currentScene, scenesArray, textArray){
  let buttonsArray = [];
  for(let i=1; i<=scenesArray.length; i++){
    buttonsArray.push(createButton(scene, size, i, scenesArray.length, currentScene, scenesArray[i - 1], textArray[i - 1]));
  }
  return buttonsArray;
};

const createMultiButtonsEnd = function(scene, size, currentScene, scenesArray, textArray){
  let buttonsArray = createMultiButtons(scene, size, currentScene, scenesArray, textArray);
  for(let i=0; i < buttonsArray.length; i++){
    endButtonFunc(scene, buttonsArray[i]);
  }
  return buttonsArray;
};

const endButtonFunc = function(scene, button){
  button.once('pointerdown', ()=>{
    cutOffSounds(scene);
    destroyMusic();
    gameState = {};
  });
};

const displayButtons = function(scene, eventNum, size, currentScene, scenesArray, textArray, altBool = true){
  if(scene.clickCounter === ((eventNum - 1) * 2) && !scene.activated[eventNum - 1] && altBool){
    scene.activated[eventNum - 1] = true;
    destroyText(scene);
    createMultiButtons(scene, size, currentScene, scenesArray, textArray);
  }
};

const displayButtonsEnd = function(scene, eventNum, size, currentScene, scenesArray, textArray){
  if(scene.clickCounter === ((eventNum - 1) * 2) && !scene.activated[eventNum - 1]){
    scene.activated[eventNum - 1] = true;
    destroyText(scene);
    createMultiButtonsEnd(scene, size, currentScene, scenesArray, textArray);
  }
};

const destroyBgSound =  function(scene){
  if(scene.bgSound != null){
    scene.bgSound.stop();
    scene.bgSound.destroy;
    scene.bySound = null;
  }
};

const nextScene = function(scene, currentScene, nextScene, playSound = true){
    destroyBgSound(scene);
    if(playSound){
      scene.sound.play("textProceed");
    }
    removeSpeech(scene);
    scene.scene.stop(currentScene);
    scene.scene.start(nextScene);
}

//see in posey 3 if you can jsut get curretn scene key from scene object
const checkNextScene = function(scene, eventNum, currentScene, goTo, altBool = true){
  if(scene.clickCounter === ((eventNum - 1) * 2) && !scene.activated[eventNum - 1] && altBool){
    scene.activated[eventNum - 1] = true;
    nextScene(scene, currentScene, goTo);
  }
};

const nextPicDialogue = function(scene, artKey, animationKey, portraitNum, text, speaker){
  scene.artBox.destroy();
  artBox(scene, artKey, animationKey);
  nextDialogue(scene, portraitNum, text, speaker);
};

const checkNextPicDialogue = function(scene, eventNum, artKey, animationKey, portraitNum, text, speaker){
  if(scene.clickCounter === ((eventNum - 1) * 2) && !scene.activated[eventNum - 1]){
    scene.activated[eventNum - 1] = true;
    nextPicDialogue(scene, artKey, animationKey, portraitNum, text, speaker);
  }
}

const removeSpeech = function(scene){
  if(scene.timedEvent != null){
    scene.timedEvent.remove();
    scene.timedEvent = null;
  }
  if(!(scene.speak == null)){
    scene.speak.once("complete",()=>{
      if(!(scene.speak == null)){
        scene.speak.stop();
        scene.speak = null;
      }
    });
  }
}

function typeWriter(scene, string, bleep = "narrator", speed = 60){
  let width = 1370;
  if(scene.textContents != null){
    scene.textContents.destroy();
    scene.textContents = null;

  }
  if(scene.textContents2 != null){
    scene.textContents2.destroy();
    scene.textContents2 = null;
  }

  if(scene.endTextIcon != null){
    scene.endTextIcon.destroy();
    scene.endTextIcon = null;
  }
  removeSpeech(scene);

  let text = scene.add.text(400,760,'', {fontFamily:"Arial Rounded, Arial, Sans-Serif", fontSize: "60pt", fill: "white"}).setOrigin(0);
  let k = 0

  for(let j = 1; j < string.length; j++){
    text.setText(string.substr(k, j - k));
    if(text.width > width){
      while(string.charAt(j) != " " && j > 0){
          j--;
      }
      string = string.substr(0, j + 1) + "\n" + string.substr(j + 1, string.length - 1);
      k = j + 1;
  }
}

  text.destroy();


  text = scene.add.text(400,760,'', {fontFamily:"Arial Rounded, Arial, Sans-Serif", fontSize: "60pt", fill: "black"}).setOrigin(0);


  let i = 0;
  scene.speak = scene.sound.add(bleep);
  scene.speak.on('complete', ()=>{
    scene.speak.play();
  });
  scene.speak.play();

  scene.timedEvent = scene.time.addEvent({delay: speed, loop:true, callbackScope: scene, callback:()=>{
      i++;
      if(i <= string.length){
        text.setText(string.substr(0, i));
      }
      else{
        scene.clickCounter++;
        if(!(scene.speak == null)){
          scene.speak.once("complete",()=>{
            scene.speak.stop();
            scene.speak.off();
          });
        }
        if(scene.endTextIcon  == null){
          scene.endTextIcon = scene.add.sprite(1650,760, "drr_soupbowl").setOrigin(0);
          scene.endTextIcon.anims.play("textEndAnim");
        }
        scene.timedEvent.remove();
      }
  }});

  scene.input.once('pointerdown', ()=>{
    text.setText(string);
    if(scene.endTextIcon  == null){
      scene.endTextIcon = scene.add.sprite(1650,760, "drr_soupbowl").setOrigin(0);
      scene.endTextIcon.anims.play("textEndAnim");
    }
    removeSpeech(scene);
  }, this);

  return text;
}

function setGreyedText(button, sceneObject, text, fontsize = 65){
    let buttonText = sceneObject.add.text(0, 0, text, {font: fontsize + "pt Arial Rounded", fill: "white"});
    buttonText.setX(Math.floor((button.width - buttonText.width) /2 + button.x));
    buttonText.setY(Math.floor((button.height - buttonText.height) /2 + button.y));
}

function addButtonDecor(scene, button){
  let buttonDecor = scene.add.sprite(0,0,'dialogue_decor');
  buttonDecor.setX(Math.floor(button.width/2 + button.x));
  buttonDecor.setY(Math.floor(button.height/2 + button.y));
  if(button.width === 928){
    buttonDecor.anims.play("DDSAnim");
  }
  else{
    buttonDecor.anims.play("DDLAnim");
  }
  buttonDecor.setAlpha(0);
  buttonDecor.setDepth(1);
  return buttonDecor;
}

function buttonFunction(button, sceneObject, currentScene, targetScene, text, fontsize = 65){
    button.setInteractive();

    let buttonDecor = addButtonDecor(sceneObject, button);
    addButtonText(button, sceneObject, text, fontsize);

    button.on('pointerdown', function(){
      button.setFrame(1);
      buttonDecor.setAlpha(1);
    })
    .once('pointerup', function(){
      destroyBgSound(sceneObject);
      sceneObject.sound.play('button');

      if(sceneObject.artBox.anims.isPlaying){
        sceneObject.artBox.once('animationupdate', function(){
        nextScene(sceneObject, currentScene, targetScene);
        });
      }else{
        nextScene(sceneObject, currentScene, targetScene);
      }
    })
    .on('pointerover', ()=>{
        button.setFrame(3);
      buttonDecor.setAlpha(1);
    })
    .on('pointerout', ()=>{
      buttonDecor.setAlpha(0);
      button.setFrame(0);
    });
}

function buttonFadeFunction(button, sceneObject, currentScene, targetScene, text, fontsize = 65){
    button.setInteractive();

    let buttonDecor = addButtonDecor(sceneObject, button);
    addButtonText(button, sceneObject, text, fontsize);
    sceneObject.cameras.main.once('camerafadeoutcomplete', () => {
      nextScene(sceneObject, currentScene, targetScene);
    });

    button.once('pointerdown', function(){
      button.setFrame(1);
      buttonDecor.setAlpha(1);
    })
    .once('pointerup', function(){
      destroyBgSound(sceneObject);
      sceneObject.sound.play('button');
      sceneObject.cameras.main.fadeOut(1500);
    })
    .on('pointerover', ()=>{
        button.setFrame(3);
        buttonDecor.setAlpha(1);
    })
    .on('pointerout', ()=>{
      buttonDecor.setAlpha(0);
      button.setFrame(0);
    });
}

function addButtonText(button, sceneObject, text, fontsize = 65){
  let buttonText = sceneObject.add.text(0, 0, text, {font: fontsize + "pt Arial Rounded", fill: "white"});
  buttonText.setX(Math.floor((button.width - buttonText.width) /2 + button.x));
  buttonText.setY(Math.floor((button.height - buttonText.height) /2 + button.y));
  return buttonText;
}

function variableButtonFunction(sceneObject, button, text, func = null, fontsize = 65){
  button.setInteractive();

  let buttonDecor = addButtonDecor(sceneObject, button);
  let buttonText = addButtonText(button, sceneObject, text, fontsize);
  button.on('pointerdown', function(){
    button.setFrame(1);
    buttonDecor.setAlpha(1);
  })
  .once('pointerup', function(){
    sceneObject.sound.play('button');
    func();
    buttonText.destroy();
    buttonDecor.destroy();
  })
  .on('pointerover', ()=>{
    button.setFrame(3);
    buttonDecor.setAlpha(1);
  })
  .on('pointerout', ()=>{
    buttonDecor.setAlpha(0);
    button.setFrame(0);
  })
  .on('destroy', ()=>{
    buttonText.destroy();
    buttonDecor.destroy();
  });
}

function checkUp(scene){
  if(scene.activated2 == null){
    if(bgm != null){
      bgm.stop();
    }
    scene.activated2 = [];
    scene.chungbgm = scene.sound.add("bgm_chung");
    scene.chungbgm.play({volume: 2});
    scene.chungbgm.on('complete', ()=>{
      scene.chungbgm.play({volume: 2});
    });

    scene.cover = scene.add.image(0,0,"cover").setOrigin(0);
    scene.cover.setInteractive();
    scene.chung = scene.add.image(1921,10,"chung_big").setOrigin(0);
  }

  if(scene.chung.x > 600){
    scene.chung.setX(scene.chung.x - 5);
  }

  if(scene.chung.x <= 600 && !scene.activated2[0]){
    scene.activated2[0] = true;
    scene.textBox2 = scene.add.image(0,716,'textBox').setOrigin(0);
    scene.textContents2 = typeWriter(scene, "Hello again, Posey. Sorry to interrupt, but I just wanted to check in and see how you're doing.", "chung");
    scene.portrait2 = scene.add.sprite(60,745,'portraits').setOrigin(0);
    scene.portrait2.setFrame(29);
    scene.clickCounter = 0;
    scene.click = 0;
  }

  if(scene.clickCounter === 2 && scene.activated2[0] && !scene.activated2[1] && scene.click < 1){
    scene.posey;
    scene.activated2[1] = true;
    scene.sound.play("textProceed");
    scene.textBox2.destroy();
    scene.textContents2.destroy();
    scene.endTextIcon.destroy();
    removeSpeech(scene);
    scene.portrait2.destroy();

    scene.button1 = scene.add.sprite(496,725,'smallButton').setOrigin(0);
    variableButtonFunction(scene, scene.button1, 'Good!', function(){ scene.click = 1; scene.clickCounter = 0;});
    scene.button2 = scene.add.sprite(496,900,'smallButton').setOrigin(0);
    variableButtonFunction(scene, scene.button2, 'Not so good.', function(){ scene.click = 2; scene.clickCounter = 0;});
  }

if(scene.click >= 1 && !scene.activated2[2]){
  scene.activated2[2] = true;
  scene.clickCounter = 0;

  scene.button1.destroy();
  scene.button2.destroy();
  scene.textBox2 = scene.add.image(0,716,'textBox').setOrigin(0);
  scene.portrait2 = scene.add.sprite(60,745,'portraits').setOrigin(0);

  if(scene.click === 1){
    scene.posey = scene.add.image(350,50,"checkup_hap").setOrigin(0);
    scene.textContents2 = typeWriter(scene, "I'm doing good, Dr. Chung. Thanks for asking, that's really nice of you.", "posey");
    scene.portrait2.setFrame(1);
  }else if(scene.click === 2){
    scene.posey = scene.add.image(350,50,"checkup_sad").setOrigin(0);
    scene.textContents2 = typeWriter(scene, "To be honest, I'm having kind of a hard time.", "posey");
    scene.portrait2.setFrame(3);
  }
}

if(scene.clickCounter === 2 && scene.activated2[2] && !scene.activated2[3]){
  scene.activated2[3] = true;
  scene.portrait2.setFrame(29);
  scene.sound.play("textProceed");
  if(scene.click === 1){
    scene.textContents2 = typeWriter(scene, "I'm so happy to hear that. I'll let you get back to it then.", "chung");
    scene.clickCounter += 2;
    scene.activated2[5] = true;
  }
  else{
    scene.textContents2 = typeWriter(scene, "Oh no, I'm sorry. Well for now, just try to focus on the present and enjoying your time here.", "chung");
    scene.activated2[4] = true;
  }
}

    if(scene.clickCounter === 4 && scene.activated2[4] && !scene.activated2[5]){
      scene.activated2[5] = true;
      scene.sound.play("textProceed");
      scene.textContents2 = typeWriter(scene, "You can take it day by day after that.", "chung");
    }

    if(scene.activated2[5] && scene.clickCounter === 6 && !scene.activated2[6]){
      scene.activated2[6] = true;
      scene.sound.play("textProceed");
      scene.clickCounter = 0;
      scene.textBox2.destroy();
      scene.textContents2.destroy();
      scene.endTextIcon.destroy();
      removeSpeech(scene);
      scene.portrait2.destroy();
      scene.cover.destroy();
      scene.chung.destroy();
      scene.posey.destroy();
      drChung[1] = true;
      scene.chungbgm.stop();
      scene.chungbgm.destroy();
      if(gameState.bgm != null){
        gameState.bgm.start({loop:true});
      }
      if(bgm != null){
        bgm.play();
      }
    }
  }
