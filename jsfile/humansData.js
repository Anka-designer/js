export async function getData() {
  const name = ["Anna", "Alexandr", "Lily", "Anastasia", "Ivan"];
  const lastName = ["Smith", "Pappus", "Tits", "Killing", "Murphy", "Macauley"];
  const gender = ["woman", "man"];
  const address = [
    "Воронежская область, город Клин, пл. Ломоносова, 06",
    "Кировская область, город Коломна, наб. Ломоносова, 54",
    "Самарская область, город Красногорск, пр. Сталина, 39",
  ];
  const telephone = [
    "8-800-234-4054",
    "(495) 851-7264",
    "(812) 658-27-12",
    "8-800-226-5805",
  ];

  let data = [];
  let humanCount = Math.floor(Math.random() * 15) + 1;

  for (let i = 0; i < humanCount; i++) {
    let age = Math.floor(Math.random() * 80) + 1;
    let people = {
      name: name[Math.floor(Math.random() * name.length)],
      lastName: lastName[Math.floor(Math.random() * lastName.length)],
      age: age,
      gender: gender[Math.floor(Math.random() * gender.length)],
      address: address[Math.floor(Math.random() * address.length)],
      telephone: telephone[Math.floor(Math.random() * telephone.length)],
    };

    await data.push(people);
  }
  return data;
}
