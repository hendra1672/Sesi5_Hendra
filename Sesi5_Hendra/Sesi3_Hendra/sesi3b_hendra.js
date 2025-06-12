let i = 1; 
do 
{
    let row = ''; 
    let j = 1;    
    do 
    {
        row += '*'; 
        j++;        
    } 
    while (j <= i); 
    console.log(row);
    i++;             
} 
while (i <= 5); 