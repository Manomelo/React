// Classes

class Human
{
    constructor()
    {
        this.gender = 'male';
    }

    printGender()
    {
        console.log(this.gender)
    }
}

class Person extends Human
{
    constructor(name)
    {
        super();
        this.name = name;
    }

    printMyName()
    {
        console.log(this.name);
    }
}


const person = new Person('Lucas');
person.printMyName();
person.printGender();