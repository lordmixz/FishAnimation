
## Fish Animation
This is a simple JavaScript canvas animation that creates a school of swimming fish. The animation utilizes HTML canvas to generate a visually appealing effect of fish swimming across the screen.

## Description
The animation consists of the following key components:

Canvas Setup: The JavaScript code initializes a canvas element in the HTML document and sets its dimensions to fill the entire viewport.

Fish Class: A Fish class is defined to represent individual fish in the animation. Each fish has properties such as position, size, speed, color, and angle of movement.

Drawing Fish: The draw() method of the Fish class is responsible for rendering each fish onto the canvas. It draws the fish body and tail using canvas drawing API.

Updating Fish Positions: The update() method of the Fish class updates the position of each fish based on its current angle and speed. If a fish moves outside the canvas boundaries, it repositions it to the opposite side of the canvas to create a seamless looping effect.

Creating Fish School: The createFishes() function generates a specified number of fish with random positions, sizes, and speeds and adds them to the fishes array.

Animation Loop: The animate() function utilizes the requestAnimationFrame method to create a continuous animation loop. It updates the positions of fish and redraws them on the canvas in each frame.

## Usage
To use this animation, simply include the index.js file in your HTML document. The animation will automatically start once the page is loaded.

## Credits
This animation was created by [Your Name] for the purpose of demonstrating JavaScript canvas animation techniques.

## Demo
You can view a live demo of this animation here (Replace # with the link to your live demo).