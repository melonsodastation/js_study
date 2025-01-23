const student = {
    name: "철수",
    age: 14,

    introduce: function() {
        console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}입니다.`);
    },

    addYear: function() {
        this.age += 1;
        console.log(`${this.name}는 내년에 ${this.age}입니다.`);
    }

};

student.introduce();
student.addYear();


