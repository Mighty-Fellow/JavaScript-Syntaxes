let person = {
    name: "Lakshman Gope",
    age: 21,
    skills: ["js", "node", "reat"],
    subjects: {
      swe114: "TOC",
      swe424: "BOD",
      swe111: {
        a: 10,
        b: 20
      }
    }
  };
  
  let person2 = JSON.parse(JSON.stringify(person))
  
  person2.name = 'Emon';
  person2.skills=["abcd"];
  person2.subjects.swe114="Raton";
  person2.subjects.swe111.a = 90;
  
  console.log('per1 ', person)
  
  console.log('per2 ', person2)
  