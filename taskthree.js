let marks = 60;

if(marks < 100 && marks >= 90){
    console.log('Your Grade: A');
}

else {
    if(marks < 89 && marks >= 80){
        console.log('Your Grade: B');
    }

    else {
        if(marks < 79 && marks >= 70){
            console.log('Your Grade: C');
        }

        else {
            if(marks < 69 && marks >= 60){
                console.log('Your Grade: D');
            }

            else{
                console.log('Your Grade: F');
            }
        }
    }
}