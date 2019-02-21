var temperature=[
    {
        temp : 10,
    },
    {
        temp : 40,
    },
    {
        temp : 60,
    },
    {
        temp : 80,
    },
    {
        temp : 80,
    },
    {
        temp : 120,
    },
    {
        temp : 140,
    },
    {
        temp : 120,
    },
    {
        temp : 120,
    },
    {
        temp : 10,
    },
    {
        temp : 140,
    },
]

// push the element

function insert()
{
    temperature.push({temp : 30})
    temperature.push({temp : 50})
    temperature.push({temp : 40})
    console.log(temperature)
}
insert()

// get maximum temperature

function get_max()
{
    var max=temperature[0].temp
    for(var i=1;i<temperature.length;i++)
    {
        if(temperature[i].temp > max)
        {
            max=temperature[i].temp

        }
    }
    console.log('Maximum Temperature : '+max)
}
get_max()

// get minimum temperature

function get_min()
{
    var min=temperature[0].temp
    for(var i=1;i<temperature.length;i++)
    {
        if(temperature[i].temp < min)
        {
            min=temperature[i].temp

        }
    }
    console.log('Minimum Temperature : '+min)
}
get_min()

//get mean  of temperature

function get_mean()
{
    var sum=0;
    var average =0;
    for(var i=0;i<temperature.length;i++)
    {
        sum = sum + temperature[i].temp 
    }
    average = sum / temperature.length
    console.log('Mean Temperature : '+average)
}
get_mean()

//get mode of temperature

function get_mode()
{
    var maxValue = 0
    var maxCount = 0;

    for (var i = 0; i < temperature.length; i++) {
       var count = 0;
       
       for (var j = 0; j < temperature.length; j++) {
          if (temperature[j].temp == temperature[i].temp)
          count++;
       }
       
       if (count > maxCount) {
          maxCount = count;
          maxValue = temperature[i].temp;
       }
    }
    console.log('Mode Temperature : '+maxValue)
}
get_mode()

