> ### Bit Masking Means Convert current number into another number using (&,|) operator.
* Some Questions Related To Masking.

#### Q.1. __Find I = 5 Of Given Numbers.__
        8 7 6 5 4 3 2 1 0 (Indexes)
(i.) => 1 0 0 1 1 0 1 0 1.
* First make it's mask,let's say we have to find i = 5 then letf shift(<<) the values but make sure you'll start from (Right to Left) till the index 5;
---
* 1 0 0 1 1 0 1 0 1.
* 0 0 0 1 0 0 0 0 0  <= __Made Mask__ 
* 0 0 0 1 0 0 0 0 0  <= __Apply &(and) Operator__

Note => we got  the 1 at the index of 5 after the applying (&,|) operator then our ith value will 1(It's our answer) and you got 0 then your ith value will 0;

#### Q.2. __Set the I = 1 at the index 3.__
* 1 0 0 1 1 0 1 0 1.
* 0 0 0 0 0 1 0 0 0. <= __Made Mask__
* 1 0 0 1 1 1 1 0 1. <= __Apply |(or) operator__

Note => Here it is hurreyy we set the value 1 of the index 3 you can see the question row and the last row and count the index and note down the value you'll get your answer;

#### Q.3. __Clear the I = 1 to 0 at the index 4.__
* 1 0 0 1 1 0 1 0 1.
* 0 0 0 0 1 0 0 0 0. <= __Made Mask__
* 1 1 1 1 0 1 1 1 1. <= __Inverse The Mask Values__ (You can use ~ for Inverse.)

Note => hurreyy We again got our answer we clear the value from 1 to 0 of index 4;

#### Q.4. Find the number of bits to change to convert a to b.
* a. 1 0 1 1 0.
* b. 1 1 0 1 1.
* ans.  0 1 1 0 1. <= __Apply ^(XOR) Operator__

Note => Now count how many 1 in our ans in this case is 3 that means we have to change 3 bits to convert to a to b;

#### Q.5. Find the give number is odd or even.
(i.) 5.
* First write the binary of 5.
* 1 0 1.
* 0 0 1. <= Place the 1 here always whenever you want to find.
* 0 0 1. <= Apply the & operator after that if it's 1 at the end that's mean the number is odd otherwise even.

#### Q.6. Find the set of bits of intezer.
(i.) 13.
We will use n & (n -1) formula to solve this.
* First Converet given number to the binary.
* 1 1 0 1.
* 1 1 0 0. <= Wherever you found 1 convert it to 0 untill you not got the  0 0 0 0 but make sure you'll start from end.
* 1 0 0 0. <= So count from this we have 3 sets of bits of 13.
* 0 0 0 0.
---
* ### [Click For More](../Bit%20Manipulation/)