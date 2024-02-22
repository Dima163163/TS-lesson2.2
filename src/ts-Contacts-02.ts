type User = {
  name: string,
  age: number,
};


type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = {
  name: string,
  age: number,
  group?: string,
  role?: string,
};

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Иван Иванов',
    age: 23,
    group: 'Семья',
  },
  {
    name: 'Макс Максимов',
    age: 29,
    group: 'Друзья',
  },
  {
    name: 'Админ Админов',
    age: 44,
    role: 'Администратор'
  }
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);