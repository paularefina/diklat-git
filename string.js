let person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  let person1 = {
    firstName: "Paula",
    lastName: "Refina"
  }
  let fullName = person.fullName.call(person1);
  console.log(fullName);