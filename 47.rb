# The first two consecutive numbers to have two distinct prime factors are:

# 14 = 2 × 7
# 15 = 3 × 5

# The first three consecutive numbers to have three distinct prime factors are:

# 644 = 2² × 7 × 23
# 645 = 3 × 5 × 43
# 646 = 2 × 17 × 19.

# Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?


# Factorization is something thousands of people have worked to find the best algorithm for.
# Still, in the spirit of Euler, I'll build something myself.

require 'prime'

# def factors n 
#   factor_sum = 0
#   count = 2
#   if Prime.prime?(n)   # Primes take a while to factor, let's skip that by running a prime check on them
#     return 1
#   end
#   until factor_sum == 5 || n == 1  # For the purposes of this problem, we can give up on a number once it has more than four distinct prime factors
#     if n % count == 0
#       while n % count == 0
#         n = n / count
#       end
#       factor_sum += 1
#     end
#     count += 1
#   end
#   return factor_sum
# end

# n = 647 # We know that 646 isn't our first number
# consecutive = 1

# until consecutive == 4
#   n += 1
#   if factors(n) != 4
#     consecutive = 0
#   else
#     consecutive += 1 # Increment each time n has four distinct factors; zero otherwise; will only be four once we have four consecutive working n-values
#   end
# end

# puts n - 3 # Get the first number, not the fourth  # Takes 25 seconds on the Inspiron! Goodness!



# Trying a version that uses Ruby's pre-built function for this

n = 647 # We know that 646 isn't our first number
consecutive = 1

until consecutive == 4
  n += 1
  if n.prime_division.count != 4 # Look, Ruby will do this for me!
    consecutive = 0
  else
    consecutive += 1 # Increment each time n has four distinct factors; zero otherwise; will only be four once we have four consecutive working n-values
  end
end

puts n - 3 # Yes, having the factors cached makes this 20x as fast, good to know!


# More advanced Ruby solution someone suggested in the forum:

# (1..Float::INFINITY).lazy.each_cons(4).select {|a| a.all? {|i| i.prime_division.map {|o| o[0]}.length == 4}}.first
