// 获取 canvas 元素
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 设置 canvas 尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义鱼群数组
const fishes = [];

// 定义鱼类
class Fish {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.angle = Math.random() * Math.PI * 2;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // 绘制鱼身
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.size, -this.size / 2);
        ctx.lineTo(-this.size, this.size / 2);
        ctx.closePath();
        ctx.fill();

        // 绘制鱼尾
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.size * 2, -this.size);
        ctx.lineTo(-this.size * 2, this.size);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // 鱼移出 canvas 外部时重新放置到 canvas 内部
        if (this.x > canvas.width + this.size) {
            this.x = -this.size;
        } else if (this.x < -this.size) {
            this.x = canvas.width + this.size;
        }

        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        } else if (this.y < -this.size) {
            this.y = canvas.height + this.size;
        }
    }
}

// 创建鱼群
function createFishes(numFishes) {
    for (let i = 0; i < numFishes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10; // 鱼的大小范围在 10 到 30 之间
        const speed = Math.random() * 2 + 1; // 鱼的速度范围在 1 到 3 之间
        const fish = new Fish(x, y, size, speed);
        fishes.push(fish);
    }
}

// 绘制函数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const fish of fishes) {
        fish.draw();
    }
}

// 更新函数
function update() {
    for (const fish of fishes) {
        fish.update();
    }
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    update();
    draw();
}

// 初始化
createFishes(20); // 创建 20 条鱼
animate(); // 启动动画循环
