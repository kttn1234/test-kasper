const TypeScriptBase = () => {
  const square = (size: number) => size * size;
  let greet: Function;
  greet = () => console.log("hello");
  const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log({ c });
  };
  add(3, 6, "aa");
  add(3, 6);

  // giá trị mặc định cho tham số
  const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log("sum", a + b);
    console.log("c", c);
  };

  const minus = (a: number, b: number): number => {
    return a - b;
  };
  console.log(minus(10, 5));

  // let name = ["mai", "nam", "hung"];
  // name.push("Son");

  let numbers = [1, 3, 4];
  numbers[1] = 9;

  let mixed = [1, "ahihi", true];
  minus[2] = true;
  mixed.push(false);

  // object
  let person = {
    name: "henry",
    age: 25,
    isStudent: false,
  };
  person.age = 29;
  // person.hobiste = "book";

  person = {
    name: "xuan",
    age: 29,
    isStudent: false,
  };

  //  explicit types: khai báo ngay từ đâu
  let myName: string;
  let age: number;
  let isAuthenticate: boolean;
  myName = "xuan";

  let students: string[] = ["name", "hung"];
  students.push("lan");

  // union

  let mixeds: (string | number | boolean)[];
  mixeds = ["henry", 1, false];

  let id: string | number;
  id = "12";
  id = 1212;
  let hobby: "book" | "music";
  hobby = "book";

  let persons: object;
  persons = { name: "lan", age: 20 };
  persons = [];

  let students1: {
    name: string;
    age: number;
    isGood: boolean;
  };

  students1 = {
    name: "aa",
    age: 20,
    isGood: false,
  };

  // any type

  let agew: any = 27;
  agew = "3232";

  let mixeds1: any[] = [];

  // type alias
  type stringOrNumber = string | number;
  type studen2 = {
    name: string;
    age: number;
  };

  const studentdetails = (id: stringOrNumber, studentName: string): void => {
    console.log(`${studentName} id la ${id}`);
  };
  studentdetails(123, "henry");

  const greets = (user: studen2) => console.log(`${user.name} age ${user.age}`);

  greets({ name: "aaa", age: 29 });
  // function signature
  let greet2: Function;
  greet2 = () => console.log("ahiahi");
  let greet3: (a: string, b: string) => void;
  greet = (name: string, getting: string) => {
    console.log(`${name}`);
  };

  let calculature: (a: number, b: number, c: string) => number;
  calculature = (a: number, b: number, c1: string) => a + b;

  let sums = (a: number, b?: number) => a + b!;
  console.log(sums(3));
  // class
  //public name có thể truy cập bên ngoài class và có thể thay đổi
  // age ko thể truy cập và thay đổi từ bên ngoài class
  class Employee {
    // public name: string;
    // private age: number;
    // readonly male: boolean;
    // constructor(n: string, a: number, m: boolean) {
    //   this.name = n;
    //   this.age = a;
    //   this.male = m;
    // }
    constructor(
      public name: string,
      private age: number,
      readonly male: boolean
    ) {}

    print() {
      return `Name: ${this.name} Age: ${this.age} male ${this.male}`;
    }
  }
  const emp = new Employee("xuan", 20, false);
  // emp.name = "8080";
  console.log(emp.print());
  // module
  // interface
  interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
  }
  const henry1: Person = {
    name: "henry",
    age: 20,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
      return amount;
    },
  };
  console.log(henry1);
  //
  interface hasPrint {
    name: string;
    print(): string;
  }
  class Invoice implements hasPrint {
    name: string;
    constructor(
      readonly client: string,
      private word: string,
      public amount: number,
      name: string
    ) {
      this.name = name;
    }

    print(): string {
      return "ahhi";
    }
  }
  const avoid = new Invoice("client", "word", 90, "ahihi");
  const documentOne: hasPrint = avoid;
  console.log(documentOne.print());

  return <div></div>;
};

export default TypeScriptBase;
