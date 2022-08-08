/*function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  } */

  function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  
  console.log(checaTriangulo(7, 7, 7))
  console.log(checaTriangulo(7, 7, 9))
  console.log(checaTriangulo(7, 8, 9))