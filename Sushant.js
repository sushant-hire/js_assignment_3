// Inheritance - One of the 4 pillars of OOP

// *************************************************************************************************************
// *************************************************************************************************************

// Let's understand the concept of Inheritance with a simple example of animals and their characteristics.

// Imagine we have a base class called "Animal" that represents common attributes and behaviors shared by all animals. This class can have attributes like "name" of the animal and "age" of the animal and methods like "eating" and "sleeping" habits of the animal.

// Now, let's create a sub group or we can say now, a child class called "Cat" that inherits from the "Animal" class. The "Cat" class can have additional attributes and methods specific to cats, such as the "meow" sound and "pounce" behaviour of them when they prey.

// Similarly, we can create another child class called "Dog" that also inherits from the "Animal" class. The "Dog" class may have attributes and methods specific to dogs, such as the "bark" sound they make and "fetch" behaviour of them when they play.

// By using inheritance, both the "Cat" and "Dog" classes inherit the common attributes and methods from the "Animal" class. They have the basic characteristics of being an animal, such as having a name and an age, and the ability to eat and sleep. However, they can also have their own unique features and behaviors, as mentioned above.

// Just like animals inherit certain traits from their broader category, child classes in OOP inherit attributes and behaviors from their parent class. This allows for code reuse, organization, and the ability to create specialized classes that build upon existing functionality.

// So, in this example, the "Animal" class represents the base class, and the "Cat" and "Dog" classes represent the child classes inheriting from the parent class, each with their own specific traits and behaviors.

// Now, let's understanding the same example in terms of code -

// *************************************************************************************************************
// *************************************************************************************************************

// Example 1: Animal Hierarchy

class Animal {
  constructor(name, age) {
    this.name = name; // Set the name property based on the provided name
    this.age = age; // Set the age property based on the provided age
  }

  eat() {
    console.log("The animal is eating."); // Output a message indicating that the animal is eating
  }

  sleep() {
    console.log("The animal is sleeping."); // Output a message indicating that the animal is sleeping
  }
}

class Cat extends Animal {
  constructor(name, age, breed, color) {
    // Call the constructor of the parent class (Animal) with the provided name and age
    super(name, age);

    // Set additional properties specific to Cat
    this.breed = breed; // Set the breed property based on the provided breed
    this.color = color; // Set the color property based on the provided color
  }

  meow() {
    console.log("The cat is meowing."); // Output a message indicating that the cat is meowing
  }

  pounce() {
    console.log("The cat is pouncing."); // Output a message indicating that the cat is pouncing
  }
}

// Create an instance of the Animal class with the name "Leo" and age 5
const animal = new Animal("Leo", 5);
animal.eat(); // Output: The animal is eating.
animal.sleep(); // Output: The animal is sleeping.

// Create an instance of the Cat class with the name "Whiskers", age 3, breed "Persian", and color "white"
const cat = new Cat("Whiskers", 3, "Persian", "white");
cat.eat(); // Output: The animal is eating.
cat.sleep(); // Output: The animal is sleeping.
cat.meow(); // Output: The cat is meowing.
cat.pounce(); // Output: The cat is pouncing.

// *************************************************************************************************************
// *************************************************************************************************************

// Example 2: Fruit Hierarchy

class Fruit {
  constructor(name, color) {
    this.name = name; // Set the name property based on the provided name
    this.color = color; // Set the color property based on the provided color
  }

  // Method to get information about the fruit
  getInfo() {
    console.log(`This fruit is a ${this.name} and it is ${this.color}.`);
  }
}

// Define an Apple class that extends the Fruit class
class Apple extends Fruit {
  // Constructor to initialize name, color, and variety properties
  constructor(name, color, variety) {
    super(name, color); // Call the constructor of the parent class (Fruit) with the provided name and color
    this.variety = variety; // Set the variety property based on the provided variety
  }

  // Method to get a description of the apple
  getDescription() {
    console.log(`This ${this.color} apple is of the ${this.variety} variety.`);
  }
}

// Create an instance of the Apple class
const apple = new Apple("Apple", "red", "Gala");
apple.getInfo(); // Output: This fruit is a Apple and it is red.
apple.getDescription(); // Output: This red apple is of the Gala variety.

// *************************************************************************************************************
// *************************************************************************************************************

// Example 3: Shape Hierarchy

class Shape {
  constructor(color) {
    this.color = color; // Set the color property based on the provided color
  }

  getColor() {
    console.log(`The color of the shape is ${this.color}.`); // Output a message indicating the color of the shape
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    // Call the constructor of the parent class (Shape) with the provided color
    super(color);

    this.radius = radius; // Set the radius property based on the provided radius
  }

  getArea() {
    console.log(`The area of the circle is ${Math.PI * this.radius ** 2}.`); // Output a message indicating the area of the circle
  }
}

// Create an instance of the Circle class with the color "red" and radius 5
const circle = new Circle("red", 5);
circle.getColor(); // Output: The color of the shape is red.
circle.getArea(); // Output: The area of the circle is 78.53981633974483.

// *************************************************************************************************************
// *************************************************************************************************************

// Example 4: Vehicle Hierarchy

class Vehicle {
  constructor(make, model) {
    this.make = make; // Set the make property based on the provided make
    this.model = model; // Set the model property based on the provided model
  }

  getInfo() {
    console.log(`This vehicle is a ${this.make} ${this.model}.`); // Output a message indicating the make and model of the vehicle
  }
}

class Car extends Vehicle {
  constructor(make, model, fuelType) {
    // Call the constructor of the parent class (Vehicle) with the provided make and model
    super(make, model);

    this.fuelType = fuelType; // Set the fuelType property based on the provided fuelType
  }

  getFuelType() {
    console.log(`This car runs on ${this.fuelType} fuel.`); // Output a message indicating the fuel type of the car
  }
}

// Create an instance of the Car class with the make "Toyota", model "Camry", and fuelType "gasoline"
const car = new Car("Toyota", "Camry", "gasoline");
car.getInfo(); // Output: This vehicle is a Toyota Camry.
car.getFuelType(); // Output: This car runs on gasoline fuel.

// *************************************************************************************************************
// *************************************************************************************************************

// Example 5: Employee Hierarchy

class Employee {
  constructor(name, salary) {
    this.name = name; // Set the name property based on the provided name
    this.salary = salary; // Set the salary property based on the provided salary
  }

  getDetails() {
    console.log(`Employee Name: ${this.name}`); // Output the name of the employee
    console.log(`Salary: $${this.salary}`); // Output the salary of the employee
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    // Call the constructor of the parent class (Employee) with the provided name and salary
    super(name, salary);

    this.department = department; // Set the department property based on the provided department
  }

  getDepartment() {
    console.log(`Department: ${this.department}`); // Output the department of the manager
  }
}

// Create an instance of the Manager class with the name "John Doe", salary 50000, and department "Sales"
const manager = new Manager("John Doe", 50000, "Sales");
manager.getDetails();
// Output:
// Employee Name: John Doe
// Salary: $50000
manager.getDepartment(); // Output: Department: Sales

// *************************************************************************************************************
// *************************************************************************************************************

// In conclusion, inheritance in object-oriented programming is a mechanism that allows a class to inherit properties and behaviors from another class. It promotes code reuse, modularity, and extensibility by establishing a hierarchical relationship between classes.

//Inheritance enables the creation of specialized classes that inherit and extend the functionality of a base class, resulting in more efficient and organized software development.
