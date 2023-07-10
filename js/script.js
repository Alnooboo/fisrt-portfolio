//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');//// Select the menu icon element with the ID 'menu-icon'
let navbar = document.querySelector('.navbar');//// Select the navbar element with the class 'navbar'

menuIcon.onclick = () => {
    //The code assigns a click event handler to the menu icon

    menuIcon.classList.toggle('bx-x');//. It toggles the presence of the CSS class 'bx-x' on the menu icon element.
    //This class is responsible for changing the appearance of the icon, likely to an "X" symbol indicating the close or hide action.
    navbar.classList.toggle('active');// It toggles the presence of the CSS class 'active' on the navbar element.

}

//scroll section:
let sections = document.querySelectorAll('section');//selecting all the <section> elements on the page and storing them in the sections variable
let navLinks = document.querySelectorAll('header nav a');//selects all the <a> elements within the navigation in the <header> and stores them in the navLinks variable.

//This function is executed whenever the user scrolls the web page.
window.onscroll = () => {

    //It sets up a callback function that takes each section element as the parameter and executes the code inside the curly braces for each iteration.
    sections.forEach(sec => {
        let top = window.scrollY;//the current scroll position

        let offset = sec.offsetTop - 400;//starting position of the section (-400 since the header is changeing to sticky after 400px)

        let height = sec.offsetHeight;//height of the section element, including any padding and border, using offsetHeight.

        let id = sec.getAttribute('id');//retrieves the value of the id attribute of the section element


        //checks if the current scroll position (top) is within the range of the current section.
        //It compares top to the starting position of the section + ending position of the section.
        if (top >= offset && top < offset + height) {
            //acrive navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');//For each navigation link (links), it removes the 'active' class

                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');/*selects the navigation link that
                has an href attribute containing the current section's id & it adds the 'active' class to the selected navigation link using */

            });

            //active sections for animation on scroll:
            sec.classList.add('show-animate');
        }

        // if want to use animation that repeats on scroll:
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');//the code selects the <header> element

    header.classList.toggle('sticky', window.scrollY > 100);
    /*The classList.toggle() method is then used on the header element.
    This method adds or removes a CSS class from an element based on a condition.In this case, the class being toggled is 'sticky'.*/

    /*The condition for toggling the class is window.scrollY > 100, which checks if the vertical scroll position (window.scrollY) is greater than 100 pixels.
    If the condition is true, the 'sticky' class is added to the header element, making it appear sticky or fixed in position.
    If the condition is false, the class is removed, reverting the header's appearance to its original state. */


    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    //animation footer on scroll
    let footer=document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight -250)
    /**This method adds or removes a CSS class from an element based on a condition.
     * The condition checks if the sum of the inner height of the viewport + and the vertical scroll position is greater than or equal to the total scroll height of the document
     * If the condition is true, meaning the user has scrolled to the bottom of the page, the 'show-animate' class is added to the footer element. */

}