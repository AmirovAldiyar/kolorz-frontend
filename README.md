# Kolorz
### _Harmonic palette creator [^1]_

![alt text](https://i.pinimg.com/564x/36/73/f2/3673f2c7c96cea5723c9215e11718a88.jpg)

[Kolorz][kolorz-site] is website for harmonic color palette creation according to different color schemas.

- Choose color
- Choose palette schema
- ✨Magic ✨

Demo available at:  
 - [www.kolorz.art][kolorz-site] (Production)  
 - [kolorz-frontend.vercel.app/][kolorz-stage] (Staging)
## Features

- Import generated color palette as .png file
- See generated colors hex code in palette
- Provide recommended color palette
- Donate to authors

## Tech

Kolorz technical stack:

- HTML - HTML enhanced for web apps!
- CSS - awesomely style an HTML 
- JS - user interaction 
- Nuxt.js - Free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js.

And of course Kolorz itself is open source with a [public repository][kolorz] on GitLab [^3].

# Table of Contents
1. [Requirements](#requirements)
     - [Want to contribute?](#want-contribute)
     - [Stakeholder](#stakeholder)
     - [User stories](#user-stories)
     - [Non-functional requirements](#non-functional-requirements)
3. [Design](#design)
     - [Sequence diagram](#seq-diagram)
     - [Design patterns](#design-patterns)
5. [Architecture](#architecture)
6. [Static view diagram](#static-view-diagram)
7. [Development](#development)
     - [Linter](#linter) 
10. [For developers](#for-developers)
     - [Build setup](#build-setup) 
     - [assets](#assets) 
     - [components](#components)
     - [layouts](#layouts)
     - [pages](#pages)
     - [plugins](#plugins)
     - [static](#static)
     - [store](#store)

## Requirements <a name="requirements"></a>
#### Want to contribute?<a name="want-contribute"></a>  [Great!](#for-developers)

##### Stakeholder <a name="stakeholder"></a>
Table describes stakeholder's roles and responsibilities.
| Stakeholder’s Name |               Roles               |                          Responsibilities                         |
|--------------------|-----------------------------------|-------------------------------------------------------------------|
| Users              | users                             | Use web application                                               |
| Designer           | Designer                          | Create user-friendly design                                       |
| Developer          | Project manager, Frontend, tester | Manage the project; Implement features; Test implemented features |
##### User Stories <a name="user-stories"></a>
There are demo list of hierarchy of user stories requirements, to see more please check [full project docuntarion].

|  Epic                                |  Feature            |  Functional      |                                                      |          |
|--------------------------------------|---------------------|------------------|------------------------------------------------------|----------|
|                                      |                     | User story title |                User story description                | Priority |
| Input data to generate color palette | Color choice        | Color wheel      | Color wheel                                          | Must     |
|                                      |                     | Color picker [^4]| Color picker in color wheel                          | Must     |
|                                      |                     | Saturation bar   | Saturation bar                                       | Must     |
               
There are demo list of our user stories requirements, to see more please check [full project docuntarion].
| User Type |  User Story Title |                                                                          User stories                                                                          |
|:---------:|-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Web User  | Color wheel       | As a user, I want to be able to choose a color scheme and colors on a color wheel  so that I could create a harmonic palette [^1].                                  |
|           | Color picker [^5]      | As a user, I want to be able to choose color on a color wheel by color picker moving ,so that I could create a harmonic palette [^1].                               |
|           | Saturation bar    | As a user, I want to be able to choose the saturation of the color wheel on a moving picker in the saturation bar, so that I could create a harmonic palette [^1].  |

##### Non-functional requirements <a name="non-functional-requirements"></a>

There are demo list of our non-functional requirements, to see more please check [full project docuntarion].
| ID # |  User Story Title                  | Priority |  Any Other Label |  Meeting requirements (measurements)                                                                                                 |  Testing                                                             |
|------|------------------------------------|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1    | Web application has to be adaptive | Must     | Portability      | Make adaptive web application for various resolution (1440x…, 768X…, 430x…, 360x…) , so it will be compatible with different devices | The Web application works as expected in various resolution screens. |
| 1    | Web application has to be adaptive | Must     | Portability      | Make adaptive web application for various resolution (1440x…, 768X…, 430x…, 360x…) , so it will be compatible with different devices | The Web application works as expected in various resolution screens. |

## Design <a name="design"></a>
##### <a name="seq-diagram"></a>
![seq-dia](https://i.pinimg.com/originals/29/18/6c/29186c8fddba920f5a78b9a6ca5ab6ac.jpg)

##### Design patterns <a name="design-patterns"></a>

Here we used “Atomic Design Pattern” which is simply dividing components into several groups/layers:
1. Atoms: Basic building block which has no functionality by themselves
2. Molecules: Building blocks which already has some functionality and they perform some tasks
3. Organisms: Complete parts of interface (Example: Header)
        and finally everything comes to use in layouts or pages
        
![atomic-design-pattern](https://i.pinimg.com/originals/17/d8/fe/17d8fe2cfc80761bb9140a41af738faf.jpg)

## Architecture <a name="architecture"></a>
##### Static view Diagram <a name="static-view-diagram"></a>
![atomic-design-pattern](https://i.pinimg.com/originals/fb/ce/28/fbce28c5cd37fe7c6bab79bab5170a3f.jpg)

##### Dymamic view Diagram <a name="dynamic-view-diagram"></a>
![atomic-design-pattern](https://i.pinimg.com/originals/a0/e4/e3/a0e4e395c38297ec1b6c7260f939fd0e.jpg)

## Development <a name="development"></a>
##### Linter example <a name="linter"></a>
Linter would not give you compile page if there are any errors.
![atomic-design-pattern](https://i.pinimg.com/originals/24/b1/55/24b155b441ac6085c5a494ad2cdc257a.jpg)

## For-developers <a name="for-developers"></a>

If you experience bugs or weird behavior please create an issue on [the bug tracker][the-bug-tracker].

### Build Setup <a name="build-setup"></a>

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Special Directories <a name="build-setup"></a>

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

#### `assets` <a name="assets"></a>

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

#### `components` <a name="components"></a>

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### `layouts` <a name="layouts"></a>

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


#### `pages` <a name="pages"></a>

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

#### `plugins` <a name="plugins"></a>

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

#### `static` <a name="static"></a>

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

#### `store` <a name="store"></a>

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


## Glossary <a name="glossary"></a>
[^1]: set of matching colors that are created using color scheme.
[^2]: rule of color matching.
[^3]: a provider of Internet hosting for software development and version control using Git.
[^4]: color picker, color wheel, saturation bar | an abstract illustrative organization of color hues around a circle, which shows the relationships between primary colors, secondary colors, tertiary colors etc.

Full glossary is available in [full project docuntarion].

   [kolorz]: <https://gitlab.com/amirovaldiar/kolorz-frontend>
   [kolorz-site]: <https://www.kolorz.art/>
   [kolorz-stage]: <https://kolorz-frontend.vercel.app/>
   [full project docuntarion]: <https://docs.google.com/document/d/1B18xFenzkpaPWv-1IFTKR6X51H-HYkLH/edit?usp=sharing&ouid=107246197179426210818&rtpof=true&sd=true>
   [the-bug-tracker]: <https://gitlab.com/amirovaldiar/kolorz-frontend/-/issues>

