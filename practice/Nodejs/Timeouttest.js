function myTest(message)
{
    console.log(message);
    setTimeout(myTest1,20000);
    console.log('hello');
}
function myTest1()
{
    console.log('Hi');
}
myTest('Hi I Am John Doe ');