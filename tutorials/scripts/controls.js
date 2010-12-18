/**
 * Keyboard Controls
 */
function keyboardControls(game){
	$(document).keydown(function(event) {
		var group = resourceManager.getSpritesByType('block');
		switch (event.keyCode) {
			// space bar, rotate playable piece (all 4 blocks) clockwise
			case 32:
				$.each(group, function(index, sprite){
					switch(sprite.getName()){
						case 'block1':
							sprite.setPosition(sprite.getPosition()[0]+21, sprite.getPosition()[1]);
							sprite.setName('block2');
						break;
						case 'block2':
							sprite.setPosition(sprite.getPosition()[0], sprite.getPosition()[1]+20);
							sprite.setName('block4');
						break;
						case 'block3':
							sprite.setPosition(sprite.getPosition()[0], sprite.getPosition()[1]-20);
							sprite.setName('block1');
						break;
						case 'block4':
							sprite.setPosition(sprite.getPosition()[0]-21, sprite.getPosition()[1]);
							sprite.setName('block3');
						break;
					}
				});
			break;
			// left arrow key, move whole cube 1 step to the left. Stop at left wall
			case 37:
				var sprite1 = resourceManager.getSpritesByName('block1')[0];
				if(sprite1.getPosition()[0] > 50){
					$.each(group, function(index, sprite){
						sprite.setPosition(sprite.getPosition()[0]-21, sprite.getPosition()[1]);
					});
				}
			break;
			// right arrow key, move whole cube 1 step to the right. Stop at right wall
			case 39:
				var sprite2 = resourceManager.getSpritesByName('block2')[0];
				if(sprite2.getPosition()[0] < 330){
					$.each(group, function(index, sprite){
						sprite.setPosition(sprite.getPosition()[0]+21, sprite.getPosition()[1]);
					});
				}
			break;
			// 'p' for Pause / Continue
			case 80:
				if( game.isRunning() ) {
					game.stop();
				}
				else{
					game.run();
				}
			break;
		}
	});
};