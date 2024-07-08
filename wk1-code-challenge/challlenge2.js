function checkSpeed(speed){
    const speedLimit = 70;
    const demeritPointsPerKmAboveLimit=1;
    const pointsThresholdForSuspension=12;

    if (speed <speedLimit){
        console.log("OK");
        return;
    }
    const demeritPoints = Math.floor((speed-speedLimit)/5);
    if(demeritPoints > pointsThresholdForSuspension){
        console.log("Licence suspended");
    }else {
        console.log("points:"+demeritsPoints);
    }
}