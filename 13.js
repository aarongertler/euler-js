// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

// saved actual numbers in 13.js


// Handline 50-digit numbers in JS is not worth the trouble. I just shaved them down to 18 digits, plenty for an accurate first 10

var array = [];

array.push(37107287533902102)
array.push(46376937677490009)
array.push(74324986199524741)
array.push(91942213363574161)
array.push(23067588207539346)
array.push(89261670696623633)
array.push(28112879812849979)
array.push(44274228917432520)
array.push(47451445736001306)
array.push(70386486105843025)
array.push(62176457141856560)
array.push(64906352462741904)
array.push(92575867718337217)
array.push(58203565325359399)
array.push(80181199384826282)
array.push(35398664372827112)
array.push(86515506006295864)
array.push(71693888707715466)
array.push(54370070576826684)
array.push(53282654108756828)
array.push(36123272525000296)
array.push(45876576172410976)
array.push(17423706905851860)
array.push(81142660418086830)
array.push(51934325451728388)
array.push(62467221648435076)
array.push(15732444386908125)
array.push(55037687525678773)
array.push(18336384825330154)
array.push(80386287592878490)
array.push(78182833757993103)
array.push(16726320100436897)
array.push(48403098129077791)
array.push(87086987551392711)
array.push(59959406895756536)
array.push(69793950679652694)
array.push(41052684708299085)
array.push(65378607361501080)
array.push(35829035317434717)
array.push(94953759765105305)
array.push(88902802571733229)
array.push(25267680276078003)
array.push(36270218540497705)
array.push(24074486908231174)
array.push(91430288197103288)
array.push(34413065578016127)
array.push(23053081172816430)
array.push(11487696932154902)
array.push(63783299490636259)
array.push(67720186971698544)
array.push(95548255300263520)
array.push(76085327132285723)
array.push(37774242535411291)
array.push(23701913275725675)
array.push(29798860272258331)
array.push(18495701454879288)
array.push(38298203783031473)
array.push(34829543829199918)
array.push(40957953066405232)
array.push(29746152185502371)
array.push(41698116222072977)
array.push(62467957194401269)
array.push(23189706772547915)
array.push(86188088225875314)
array.push(11306739708304724)
array.push(82959174767140363)
array.push(97623331044818386)
array.push(42846280183517070)
array.push(55121603546981200)
array.push(32238195734329339)
array.push(75506164965184775)
array.push(62177842752192623)
array.push(32924185707147349)
array.push(99518671430235219)
array.push(73267460800591547)
array.push(76841822524674417)
array.push(97142617910342598)
array.push(87783646182799346)
array.push(10848802521674670)
array.push(71329612474782464)
array.push(62184073572399794)
array.push(66627891981488087)
array.push(60661826293682836)
array.push(85786944089552990)
array.push(66024396409905389)
array.push(64913982680032973)
array.push(16730939319872750)
array.push(94809377245048795)
array.push(78639167021187492)
array.push(15368713711936614)
array.push(40789923115535562)
array.push(44889911501440648)
array.push(41503128880339536)
array.push(81234880673210146)
array.push(82616570773948327)
array.push(22918802058777319)
array.push(77158542502016545)
array.push(72107838435069186)
array.push(20849603980134001)
array.push(53503534226472524)

console.log(array)

var sum = array.reduce(function(a,b){return a+b});

console.log(sum)