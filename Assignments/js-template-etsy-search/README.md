# Create Your Own Etsy Search Page

## Description
This exercise utilizes Underscore/Lodash style templates to re-create the Etsy search results page.


## Objectives

### Learning Objectives

After completing this assignment, you should…

- Have a deep understanding of layout
- Understand JavaScript Templating (using Underscore or Lodash)
- Demonstrate strong ability to navigate through a large block of JSON data


### Performance Objectives

After completing this assignment, you be able to effectively use

* Underscore or Lodash and `_.template`
* JSON data


## Details

### Deliverables

* A repo containing at least:
  * `main.js`
  * `etsy-items.js`
  * `index.html`

### Requirements

* No JSHint warnings or errors


## Normal Mode

Re-Create An Etsy Page - https://www.etsy.com/search?q=whiskey

> Specifically you need to focus on the sidebar and the main content of items. 

1. Utilize the data for whatever search term you use - [DATA HERE](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
2. Use Bourbon / Neat to help you out (optional, but suggested)
3. You are free to change the search term to whatever you'd like.
4. We haven't covered how to fetch data using JavaScript, so just copy the data and store it in a variable.
5. Everything should be styled as closely as possible, including the Header/Footer
6. You should implement hover events and link the items to their proper Etsy product pages
7. Unless you do the bonus question #2, you can just put random links in your sidebar.
8. Also, no need to make any of the form elements work.
9. Lastly, worry about the structure first, the JS second and the fine details of the design last
            
## Hard Mode

Everything above plus:

1. Create your own API token by signing up as an [Etsy developer](https://www.etsy.com/developers/)
2. Pull the categories from the data to create the sidebar, with links that filter the listings.
3. Implement the sorting dropdown.
            

## Additional Resources

- [Etsy API Documentation](https://www.etsy.com/developers/documentation/reference/listing)
- [Etsy Payload Example](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
- [Etsy Page Example](https://www.etsy.com/search?q=whiskey)
