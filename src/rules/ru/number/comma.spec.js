tests.push(['ru/number/comma', [
    ['123.456.789', '123.456.789'],
    ['123.4A', '123.4A'],
    ['1.1%', '1,1%'],
    ['1.1%\n2.3%', '1,1%\n2,3%'],
    ['0.1 x 2', '0,1 x 2'],
    [' 0.1 x 2\n2.71 x 5', ' 0,1 x 2\n2,71 x 5'],
    ['55.5×4', '55,5×4']
]]);
