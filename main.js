function arr(nums)
{
    nums = [];
    for (let i = 0; i < 100; i++)
    {
        nums[i] = Math.floor(Math.random()*100);
    }
    return nums;
}

function num(a,b)
{
    return a - b;
}

function binary(arr)
{
    let n = parseInt(prompt("Nhập giá trị cần tìm kiếm"));
    let min = 0;
    let max = arr.length - 1;
    let mid = parseInt((min + max)/2);
    let count = 0;
    while (n !== arr[mid])
    {
            if (n < arr[min] || n > arr[max] || min === mid === max)
            {
                document.getElementById("demo").innerHTML = "Số bạn nhập không có trong mảng";
                break;
            }
            if (n > arr[mid])
            {
                min = mid + 1;
                mid = parseInt((min + max)/2);
            }
            if (n < arr[mid])
            {
                max = mid - 1;
                mid = parseInt((min + max)/2);
            }
    }
    if (n === arr[mid])
    {
        console.log(arr[mid]);
        document.getElementById("demo").innerHTML = "Số đã được tìm thấy";
    }
    return arr;
}

let a = arr();
console.log(a);
a.sort(num);
console.log(a);
binary(a);
