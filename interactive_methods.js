const car = {
    speed: 0,

    accelerate: function() {
        this.speed += 10;
        console.log(`현대 소나타의 속도가 ${this.speed}km/h로 증가했습니다.`);
    },

    status: function() {
        console.log(`현대 소나타의 현재 속도는 ${this.speed}km/h입니다."`);
    },

    brake: function() {
        this.speed -= 10;
        console.log(`현대 소나타의 속도가 ${this.speed}km/h로 감소했습니다.`);
    }
};

car.accelerate(); // "현대 소나타의 속도가 10km/h로 증가했습니다."
car.status();     // "현대 소나타의 현재 속도는 10km/h입니다."
car.brake();      // "현대 소나타의 속도가 0km/h로 감소했습니다."