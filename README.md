This repository contains the Eleventy (11ty) **theme and data** for [lartboratoire.fr](https://lartboratoire.fr/).

# Installation 
```sh
git clone https://github.com/artboratoire/artboratoire.github.io 
cd artboratoire.github.io  
npm install 
npx @11ty/eleventy --serve
```

## Repository size 
This repository is *heavy* (around 5.5Go); pulling it will take some time. 
It currently hosts the complete content of the website, including all images, both in the `src/` and `docs/` (output) folder. I do not offer a mirror corresponding to a boilerplate with minimal data (not sure how to do it correctly). The best way of using it right now is to navigate around on GitHub and pick whatever may be of value for you. 

## Eleventy version
This theme uses 11ty version 2. v3 is already out, but I didn't take the time to upgrade yet. 

# Reporting an issue
If you encounter a problem with the website, feel free to [open an issue](https://github.com/artboratoire/artboratoire.github.io/issues).  

If you run into an horrible bug/security hole, feel free to report it privately first via contact[at]lartboratoire[dot]fr .

# Where's Wordpress
The historic Wordpress theme is archived on [Gitlab](https://gitlab.com/lartboratoire/artboratoire-wordpress-theme/).


# Usage 

Small notes for yours, truly. 

## New authors

Add new information in `src/_data/authors.js`.

## Images 
Note: image paths should not contain a space.


Simple figure example: 
```
{% Figure "img/Portrait_Margaret_van_Eyck.png", "Portrait de Margaret van Eyck - Closer to Van Eyck", "Portrait de Margaret van Eyck – <a href='https://closertovaneyck.kikirpa.be/verona/#viewer/rep1=2&id1=8949c7560cf951235e2f8baad45f3644' target='_blank' rel='noopener noreferrer'>Closer to Van Eyck</a>" %}
```

Full screen: 
```
{% Figure "img/Portrait_Margaret_van_Eyck.png", "Closer to Van Eyck - Portrait de Margaret van Eyck", "Closer to Van Eyck – <a href='https://closertovaneyck.kikirpa.be/verona/#viewer/rep1=2&id1=8949c7560cf951235e2f8baad45f3644' target='_blank' rel='noopener noreferrer'>Portrait de Margaret van Eyck</a>", true %}
``` 
(Note the final "true").


