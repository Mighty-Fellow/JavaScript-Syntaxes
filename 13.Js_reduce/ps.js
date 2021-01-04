let EXAM = [
    {
      Subeject: "English",
      result: {
        point: 80,
        grade: "A+"
      }
    },
    {
      Subeject: "Physics",
      result: {
        point: 85,
        grade: "A+"
      }
    },
    {
      Subeject: "Math",
      result: {
        point: 89,
        grade: "A+"
      }
    }
  ];
  
  let resu = EXAM.reduce((prevalue,currentvalue)=>{
    return prevalue += currentvalue.result.point
  },0)
  
  console.log(resu)