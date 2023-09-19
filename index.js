function distanceFromHqInBlocks(block){
    const headQuaters = 42 ;
    const pickUpLocatipon= block;
    const numberOfBlocks = Math.abs(pickUpLocatipon - headQuaters);
    return numberOfBlocks;
}

function distanceFromHqInFeet(block){
    const feetPerBlock = 264;
    const totalBlocks = distanceFromHqInBlocks(block);
    return feetPerBlock * totalBlocks;
}
function distanceTravelledInFeet(block1,block2){
    const feetPerBlock= 264;
    const totalFeet = Math.abs(block1-block2);
    return totalFeet*feetPerBlock;
}
function calculatesFarePrice(start,finish){
    const distance = Math.abs(finish-start) // distance in blocks
    const feetPerBlock = 264;
    const feet = distance * feetPerBlock; // total feet travelled from start to finish
    if (feet<400){
        return (0);
    }
    else if(feet>400 && feet<2000){
        const charge = 0.02;
        const totalCharge = (feet-400) * charge;
        return totalCharge;
    }
    else if(feet>2000 && feet<=2500){
        const charge2 = 25;
        return charge2;
    }
    else if(feet>2500){
        return "cannot travel that far";
    }
}