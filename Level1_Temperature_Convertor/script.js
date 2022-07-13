function ConvertTemp(){
    let result = document.getElementById("result");
    let val = document.getElementById("input-value");
    // converting temp parameter from input to output
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", ConvertTemp);
    input.addEventListener("change", ConvertTemp);
    output.addEventListener("change", ConvertTemp);
    result.addEventListener("keyup", ConvertTemp);

    let inputValue = input.value;
    let outputValue = output.value;

    if(inputValue === "celsius" && outputValue === "fahrenheit")
    {
        result.value = Number((val.value)* 9/5) + 32;
    }
    else if(inputValue === "fahrenheit" && outputValue === "celsius")
    {
        result.value = Number((val.value-32)*5)/9;
    }
    else if(inputValue === "celsius" && outputValue === "celsius")
    {
        result.value = val.value;
    }
    else if(inputValue === "fahrenheit" && outputValue === "fahrenheit")
    {
        result.value = val.value;
    }
}

function reset(){
    ConvertTemp();
}