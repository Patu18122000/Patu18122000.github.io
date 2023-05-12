
.home{
    position: relative;
    background-color: darkgray;
}

.home-content{
    position: absolute;
    color: white;
    top: 240px;
    left: 11%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* text-transform: uppercase; */
    transition: ease-out 3s;
    z-index: 2;
}

.home-content>h1{
    font-size: 50px;
    margin-bottom: 5px;
    letter-spacing: 8px;
}

.home-content p{
    position: absolute;
    font-size: 2.0em;
    line-height: 2.2em;
    letter-spacing: 3px;
    left: 3px;
    z-index: 2;
}

.btn-box{
    position: absolute;
    padding:9px 35px;
    background-color: transparent;
    list-style: none;
    color: white;
    text-decoration: none;
    border: solid white 1.5px;
    border-radius: 7px;
    margin-top: 90px;
    letter-spacing: 5px;
    left: 0px;
    z-index: 9;
}

.btn-box a{
    text-decoration: none;
    position: relative;
}

.btn-box:hover{
    background-color: white;
    color: black;
    transition: ease-in .5s;
} 
