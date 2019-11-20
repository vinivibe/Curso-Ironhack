// Rover Object Goes Here
// ======================
var moonCar1 = {
    directions: "N",
    x: 0,
    y: 0,
    travelLog:[]
  }
var moonCar2 = {
    name:"Vinivibe",
    directions: "N",
    x: 0,
    y: 9,
    travelLog:[]
}
  var obstacles = {
    positionA: [0,3]
  }
  function commands(rover,arg1){
    for (var i =0; i < arg1.length; i++){
      if(arg1[i] == "l"){
        turnLeft(rover)
      }else if (arg1[i] == "r"){
        turnRight(rover)
      }else if (arg1[i] == "f"){
        moveForward(rover)
      }else if (arg1[i]== "b"){
        moveBackwards(rover)
      }else{
         console.log("Ta locão, esse comando não existe")
      }
    }
  }
  function turnLeft(rover){
    if (rover.directions == "N"){
      console.log("turnLeft was called!");
      rover.directions = "W"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "W"){
      console.log("turnLeft was called!");
      rover.directions = "S"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "S"){
      console.log("turnLeft was called!");
      rover.directions = "E"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "E"){
      console.log("turnLeft was called!");
      rover.directions = "N"
      console.log("Hover is now facing "+ rover.directions)
    }
  }
//===================================================

  function turnRight(rover){
    if (rover.directions == "N"){
      console.log("turnRight was called!");
      rover.directions = "E"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "E"){
      console.log("turnRight was called!");
      rover.directions = "S"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "S"){
      console.log("turnRight was called!");
      rover.directions = "W"
      console.log("Hover is now facing "+ rover.directions)
    }else if (rover.directions == "W"){
      console.log("turnRight was called!");
      rover.directions = "N"
      console.log("Hover is now facing "+ rover.directions)
    }
  }
  function moveForward(rover){
    if (rover.directions == "N"){
      console.log("moveForwards was called!");
      rover.directions = "N"
      if (rover.y > 0 && rover.y <= 9){
        rover.y--
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "W"){
      console.log("moveForwards was called!");
      rover.directions = "W"
      if (rover.y > 0 && rover.y < 9/* && rover.x > 0 && rover.x < 9*/){
        rover.x--
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "S"){
      console.log("moveForwards was called!");
      rover.directions = "S"
      if (rover.y >= 0 && rover.y < 9/* && rover.x >= 0 && rover.x < 9*/){
        rover.y++
          if (rover.x == obstacles.positionA[0],rover.y == obstacles.positionA[1]){
            rover.y--
            console.log("Existe um obstaculo, que bosta")
            console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
          }else{
          rover.travelLog.push([rover.x,rover.y,rover.directions])
          console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
          }
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "E"){
      console.log("moveForwards was called!");
      rover.directions = "E"
      if (rover.x >= 0 && rover.x < 9){
        rover.x++
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log(rover.name +" is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }
  }
  function moveBackwards(rover){
    if (rover.directions == "N"){
      console.log("moveBackwards was called!");
      rover.directions = "N"
      if (rover.y >= 0 && rover.y < 9 /*&& rover.x >= 0 && rover.x <= 9*/){
        rover.y++
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "W"){
      console.log("moveBackwards was called!");
      rover.directions = "W"
      if (/*rover.y > 0 && rover.y < 9 && */rover.x >= 0 && rover.x < 9){
        rover.x++
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "S"){
      console.log("moveBackwards was called!");
      rover.directions = "S"
      if (rover.y > 0 && rover.y <= 9/* && rover.x >= 0 && rover.x < 9*/){
        rover.y--
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }else if (rover.directions == "E"){
      console.log("moveBackwards was called!");
      rover.directions = "E"
      if (/*rover.y >= 0 && rover.y < 9 && */rover.x > 0 && rover.x <= 9){
        rover.x--
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log("Hover is now facing "+ rover.directions +" e a posição dele é "+ rover.x, rover.y)
      }else{
        console.log("Nao e possivel")
      }
    }
  }
  // Comandos
  commands(moonCar2,"rf")
  commands(moonCar1,"")
  console.log(moonCar1.directions)
  console.log(moonCar2.directions)
  console.log(moonCar1.travelLog)
  
  