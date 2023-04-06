//---------------------------------//
// index.js - offencive plane game //
//---------------------------------//

function print(string, id = "") {
    c = document.getElementById("console")
    var line = document.createElement('li')
    line.id = id
    line.innerText = string
    c.appendChild(line)
}

function clear() {
    c = document.getElementById("console")
    c.innerText = ""
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function input(string, callback) {
    print(string)
    var c = document.getElementById("console")
    var line = c.lastElementChild
    var input = document.createElement('span')
    input.role = "textbox"
    input.id = "input"
    input.contentEditable = true
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var value = input.innerText
            i = document.getElementById("input")
            i.outerHTML = ""
            line.innerText += value
            callback(value)
        }
    });
    line.appendChild(input)

    document.getElementById("input").focus();
}

var frame0 = `
                       ,-------------------.
                     ,'                    ;
                   ,'                    .'|
                 ,'                    .'# |
               ,'                    .'# # |
               :-------------------.'# # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | #,-". # # # # # # | # # # |
               |_/'  / # # # # # # | # # # |
         _.--""     /_ # # # # # # | # # #
        '__.--,       \`-.# # # # # | # #
             /  /'"\`--.__; # # # # | #
         _,|\\ ,' # # # # # # # # # |
        \`--|._\`.
`
var frame1 = `
                       ,-------------------.
                     ,'                    ;
                   ,'                    .'|
                 ,'                    .'# |
               ,'                    .'# # |888
               :-------------------.'# # # |)(888)   -  -  \\\\
               | # # # # # # # # # | # # # |8888)(8)  \\  .  ,
               | # # # # # # # # # | # # # |88)(88)  \\  -  .  \\\\
            '  | # # # # # # # # # | # # # |8)(88)  =   \\  -
        |  / - , # ####### # # # # | # # # |(8)   .  /  -  \\  ,
     -   / , .   ############# # # | # # # |   ] _  \\  ,  -
       \\  -  ,  "################# | # # # |
      -  .  /  \\ /############## # | # # # |
              .  - / # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # #
               | # # # # # # # # # | # #
               | # # # # # # # # # | #
               | # # # # # # # # # |
`
var frame2 = `
                       ,-------------------.
                     ,'                    ;  '::
                   ,'                    .'|':::::'
            ::.: ,'                    .'# |::::':
        ":":.: ,'                    .'# # |::':::'
         :'. : :-------------------.'# # # |':::'::
          :::.:| # # # # # # # # # | # # # |:::::'
         ::.:..| # # # # # # # # # | # # # |::'
        \`:;.::'| # # # # # # # # # | # # # |
        '::..:'| #.:::.. # # # # # | # # # |
          :::::|.,:.:::::::..::# # | # # # |
         \`:::::::::::.::..:#::::.# | # # # |
           \`:":::\`::'.::::. :: # # | # # # |
           ,\`::::::::::'::'::' # # | # # # |
        \`:;.::'| # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # #
               | # # # # # # # # # | # #
               | # # # # # # # # # | #
               | # # # # # # # # # |
`

var sfx = new Audio('allah.wav');

async function main() {
    print("--------------------------------------------")
    print("JFK INTERNATIONAL AIRPORT, ENJOY YOUR FLIGHT")
    print("         Date: SEPT 11 2001 7:59 AM         ")
    print("--------------------------------------------")
    await sleep(1000)
    input("what is your taken name: ", async (value) => {
        print("wtf that shits cringe, you are Andrew Joseph Stack III")
        await sleep(1000)
        input("choose your character class, Boeing 767, 767, 767 or 767: ", async (value) => {
            print("Good Choice")
            await sleep(1000)
            input("Do you want to hijack the plane? (y/n): ", async (value) => {
                if (value == "n") {
                    print("Too bad")
                    await sleep(1000)
                }
                print("You pull out your gun and hijack the plane")
                await sleep(1000)
                input("Do you want to takeoff? (y/y): ", async (value) => {
                    print("you are now taking off from runway 4R")
                    await sleep(1000)
                    input("Which tower would you like to hit? 1, 2 or 3: ", async (value) => {
                        print("Good Choice")
                        await sleep(1000)
                        print("you are now on your way to change world history")
                        await sleep(3000)
                        clear()
                        print(frame0)
                        await sleep(1000)
                        clear()
                        print(frame1)
                        sfx.play();
                        await sleep(1000)
                        clear()
                        print(frame2)
                    })
                })
            })
        })
    })
}
main()
