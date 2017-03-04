// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450

// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. 
// What is the value of this product?


// The number is linear, not a grid! "Adjacent" doesn't mean top-to-bottom

// Doing lots of toString conversions and back makes this easy enough, but is there a better way?
// Let's start with the easy way, at least

var best = 0; // Store the biggest product we've found

var bigString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843 \
85861560789112949495459501737958331952853208805511 \
12540698747158523863050715693290963295227443043557\
66896648950445244523161731856403098711121722383113\
62229893423380308135336276614282806444486645238749\
30358907296290491560440772390713810515859307960866\
70172427121883998797908792274921901699720888093776\
65727333001053367881220235421809751254540594752243\
52584907711670556013604839586446706324415722155397\
53697817977846174064955149290862569321978468622482\
83972241375657056057490261407972968652414535100474\
82166370484403199890008895243450658541227588666881\
16427171479924442928230863465674813919123162824586\
17866458359124566529476545682848912883142607690042\
24219022671055626321111109370544217506941658960408\
07198403850962455444362981230987879927244284909188\
84580156166097919133875499200524063689912560717606\
05886116467109405077541002256983155200055935729725\
71636269561882670428252483600823257530420752963450"

// console.log(bigString)

var bestProduct = function(n,p) {    // n is the big number, p is the number of adjacent digits
	// n = n.toString()
	len = n.length
	// console.log(n)
	for(var i = 0; i < len - (p-1); i++) {
		var digitArr = [];    // An array to hold the digits we store before multiplying
		for(var j = i; j < p+i; j++) {
			digitArr.push(parseInt(n.substring(j,j+1)));
			var product = digitArr.reduce(function(a,b){return a*b}); // get the product of all digits in the array
			if(product > best) {
				best = product;
			}
		}
	}
	console.log(digitArr)
	return best
}

console.log(bestProduct(bigString,13))

// How to make this faster: Don't calculate the product of arrays containing zero