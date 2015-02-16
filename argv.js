

argv = process.argv;
result = 0;
for(i=2;i<argv.length;i++){
    result += Number(argv[i]);
}
console.log(result);

