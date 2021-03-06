

//function VerletOrg(pos, vecs, index, rules) {

var vecs = [
			new Vec2(-100,-300), new Vec2(100,-300), 
			new Vec2(-100,-200), new Vec2(100,-200), 
			new Vec2(-100,-100), new Vec2(100,-100), 
			new Vec2(-100, 0), new Vec2(100, 0), 
			new Vec2(-100, 100), new Vec2(100, 100), 
			new Vec2(-100, 200), new Vec2(100, 200), 
			new Vec2(-100, 300), new Vec2(100, 300)];
var indices = [
	new VerletIndex(0, 1, true), new VerletIndex(2, 3, true), new VerletIndex(4, 5, true), 
	new VerletIndex(6, 7, true), new VerletIndex(8, 9, true), new VerletIndex(10, 11, true), new VerletIndex(12, 13, true),
	new VerletIndex(0, 2, true), new VerletIndex(2, 4, true), new VerletIndex(4, 6, true), new VerletIndex(6, 8, true), new VerletIndex(8, 10, true), new VerletIndex(10, 12, true),
	new VerletIndex(1, 3, true), new VerletIndex(3, 5, true), new VerletIndex(5, 7, true), new VerletIndex(7, 9, true), new VerletIndex(9, 11, true), new VerletIndex(11, 13, true),
	new VerletIndex(0, 3, false), new VerletIndex(3, 4, false), new VerletIndex(4, 7, false), new VerletIndex(7, 8, false), new VerletIndex(8, 11, false), new VerletIndex(11, 12, false)
	];


var org = new VerletOrg(Vec2(0, 0), vecs, indices, 0);
org.push(0, new Vec2(10.2, 3.25));
org.push(5, new Vec2(-1.2, -5.25));
org.push(10, new Vec2(4.2, .25));


function init(){
	window.requestAnimationFrame(draw);
}

function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.save();
	ctx.translate(200, 200);
	ctx.scale(.2, .2);
	//org.run(this);
	org.display(ctx);
	ctx.restore();
	window.requestAnimationFrame(draw);
}

init();