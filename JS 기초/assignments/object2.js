/*
Animal이라는 클래스를 정의하세요.
이 클래스는 name과 species라는 속성을 가지며, 객체가 생성될 때 값을 받아 초기화합니다.
클래스에 describe()라는 메서드를 추가해서 "This is a [species] named [name]."이라는 문자열을 출력하도록 하세요.
name이 "Buddy"이고, species가 "dog"인 객체를 생성한 후 describe() 메서드를 호출하세요.
*/


class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    describe(){
        console.log(`This is a ${this.species} named ${this.name}.`); // 이거 작은따옴표 아니고 백틱이라고 키보드 숫자 1 왼쪽에 있는거임
    }
}

let myPet = new Animal("Buddy", "dog");
myPet.describe();




/*
constructor는 클래스에서 객체가 생성될 때 자동으로 호출되는 메서드입니다.
객체의 초기 상태를 설정하는 데 사용되며, new 키워드로 객체를 만들 때 자동으로 실행됩니다.
객체마다 고유한 속성값을 설정하려면 constructor 안에서 매개변수를 사용해 값을 받아오고, this를 통해 객체의 속성을 초기화합니다.
*/