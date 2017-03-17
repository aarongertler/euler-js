# Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. 
# The first ten pentagonal numbers are:

# 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

# It can be seen that P4 + P7 = 22 + 70 = 92 = P8. 
# However, their difference, 70 − 22 = 48, is not pentagonal.

# Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference 
# are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?


# We know we have a minimum difference when A - B is smaller than the difference between A and the next pentagonal number
# Trouble is, every time we generate a pentagonal number, we have more differences to check
# I guess we can check first to see if brute force is practical:

p_array = []
sum_array = []
count = 0

while count < 5000
  count += 1
  sum_array << (count * (3 * count - 1) / 2)
end

count = 0

while count < 2200
  count += 1
  p_array << (count * (3 * count - 1) / 2)
end

def is_pentagonal n
  ((Math.sqrt(24 * n + 1) + 1) / 6) % 1 == 0   # Wound up just grabbing this from Wikipedia
end

smallest = 10 ** 7 

size = p_array.length

# # Difference between the biggest and next-biggest p_numbers we know about
# jump_diff = sum_array[sum_array.length - 1] - sum_array[sum_array.length - 2] 
# # Note: This didn't work very well -- the difference between numbers was too high for
# # a jump_diff to work with a sum_array of reasonable size
# # instead, I just got rid of this to see if we could find any difference at all, even a
# # "large" difference, in hopes of that difference being the minimum. (It worked.)


for i in (1..size)
  diff = 0
  count = 0
  a = p_array[size - i]
  while count < (size - i)
    count += 1
    b = p_array[size - i - count]
    diff = a - b
    sum = a + b
    if i == 32
    end
    if is_pentagonal(sum) && is_pentagonal(diff)
      smallest = [smallest,diff].min
      array = [a,b]
    end
  end
end

# Ways to do this faster (or at least more simply):
# 1. Write a function where we get each pentagonal number in turn, then 
# compare it to all pentagonal numbers below by generating those numbers on the spot

puts smallest