# Working with Arrays

## Description
An exercise that provides an array of items along with a set of questions about the data.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand basic JavaScript Syntax
* Understand how to read through a large data object
* Understand how to pull specific data from an array


### Performance Objectives

After completing this assignment, you be able to effectively use

* The `array.map()`, `array.forEach`, `array.filter()` and `array.reduce()` methods for pulling data out of an array



## Details

### Deliverables

* A repo containing at least:
  * `main.js`
  * `items.js` <- this is provided for you.
  * `index.html`

### Requirements

* No JSHint warnings or errors


## Normal Mode

- Use the attached file `items.js` and add it to a new project
- Make sure to call `items.js` before your main file
- Using the items variable, use `array.map()`, `array.reduce()`, `array.forEach`, and `array.filter()` to help you through the following questions.
- The answers should be logged out to your console using `console.log()`
- Make sure the output matches the answers below each question. 
- Please comment your code as you walk through your though process.
            


## Notes

#### Questions & Answers

1. Show me how to calculate the average price of all items. Please console.log the average.

  ```
  The average price is $23.63
  ```

  > I'll accept either $23.63 or $23.62

2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

  ```
  "Items that cost between $14.00 USD and $18.00 USD:"
  [
   {
      title: "1970s Coors Banquet Glass Beer Pitcher",
      ...
   },
   {
      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
      ...
   },
   {
      title: "Hand Painted Colorful Feather Glass",
      ...
   }
  ]
  ```

3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

  ```
  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
  ```

4. Show me how to find which items are made of wood. Please console.log the ones you find.

  ```
  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
  ```

5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

  ```
  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  wall mount bottle opener
  wedding
  man cave
  christmas gift
  guy gift
  fathers day
  home bar
  beer
  bar

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

  glass
  sandblast cabinet
  vinyl
  beer glass
  pint glass
  etched pint glass
  etched glass
  etched beer glass
  16 oz pint
  beer gift
  etched harry potter glass
  the three broomsticks glass
  personalized harry potter glass
  ```

6. Show me how to calculate how many items were made by their sellers
  ```
  18 were made by their sellers
  ```