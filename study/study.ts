// Constructor
class User {
  // Attributes / Propertyes
  private name: string // TODO | SEBA | Read about public and private
  private color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }

  // Methods
  speak() {
    console.log(`My name is: ${this.name}`)
  }
}

const myUser = new User('Seba', 'red')
// myUser.name // Seba
// myUser.color // red

myUser.speak()
