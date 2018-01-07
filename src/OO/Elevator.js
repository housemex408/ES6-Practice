export class Elevator
{
  constructor(name, floor=1)
  {
    this._name = name;
    this._floor = floor;
    this._moving = false;
  }
  
  get floor() { return this._floor; }
  set floor(newFloor) { this._floor = newFloor; }
  
  isMoving() { return this._moving; }
  
  getDistance(destination)
  {
    let distance = 0;
    if (destination > this._floor)
      distance = destination - this._floor;
    else if (destination < this._floor)
      distance = this._floor - destination;
    
    return distance;
  }
  
  move(destination)
  {
    this._moving = true;
    this._floor = destination;
    this._moving = false;
  }
  
  toString()
  {
    return `${this._name} is on floor ${this._floor}`;
  }
}

export class ElevatorSystem
{
  constructor(numFloors = 10)
  {
    this._numFloors = numFloors;
    this._elevators = [];
  }
  
  addElevator(elevator)
  {
    this._elevators.push(elevator);
  }
  
  requestElevator(start)
  {
    if(start < 1 || start > this._numFloors )
      return  null;
    
    this._elevators.sort((a, b) =>
    {
      let comparison = 0;
      
      if(a.getDistance(start) < b.getDistance(start))
        comparison = -1;
      else if (a.getDistance(start) > b.getDistance(start))
        comparison = 1;
      
      return comparison;
    });
    
    let availableElevators = this._elevators.filter(e => !e.isMoving());
    let floor = (availableElevators == null || availableElevators.length < 1)? null: availableElevators[0];
    
    return floor;
  }
  
  moveElevator(elevator, finish)
  {
    if(finish < 1 || finish > this._numFloors )
      return;
    
    elevator.move(finish);
  }
}

// let el1 = new Elevator("elevator1");
// let el2 = new Elevator("elevator2", 5);

// console.log('---Initialization---');
// console.log(el1.toString());
// console.log(el2.toString());
// console.log('---End Initialization---');

// let elSystem = new ElevatorSystem(10);
// elSystem.addElevator(el1);
// elSystem.addElevator(el2);

// let requestedElevator = elSystem.requestElevator(1);
// //expected to be elevator1, floor 1
// console.log(requestedElevator.toString());
// elSystem.moveElevator(requestedElevator,10);
// //expected to be elevator 1, floor 10
// console.log(requestedElevator.toString());

// //elevator 1 is on floor 10
// //elevator 2 is on floor 5
// requestedElevator = elSystem.requestElevator(7)
// //expected to be elevator2, floor 10
// console.log(requestedElevator.toString());
// elSystem.moveElevator(requestedElevator,9);

// //elevator 1 is on floor 10
// //elevator 2 is on floor 9
// console.log(el1.toString());
// console.log(el2.toString());