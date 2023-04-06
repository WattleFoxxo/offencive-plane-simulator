import time
import os
import simpleaudio as r

clear = "\n" *100

wave_obj = r.WaveObject.from_wave_file("allah.wav")

frame0 = """                 
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
        '__.--,       `-.# # # # # | # #
             /  /'"`--.__; # # # # | #
         _,|\ ,' # # # # # # # # # |
        `--|._`.
"""

frame1 = """                      
                       ,-------------------.
                     ,'                    ;
                   ,'                    .'|
                 ,'                    .'# |
               ,'                    .'# # |888
               :-------------------.'# # # |)(888)   -  -  \\
               | # # # # # # # # # | # # # |8888)(8)  \  .  ,
               | # # # # # # # # # | # # # |88)(88)  \  -  .  \\
            '  | # # # # # # # # # | # # # |8)(88)  =   \  -
        |  / - , # ####### # # # # | # # # |(8)   .  /  -  \  ,
     -   / , .   ############# # # | # # # |   ] _  \  ,  -
       \  -  ,  "################# | # # # |
      -  .  /  \ /############## # | # # # |
              .  - / # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # #
               | # # # # # # # # # | # #
               | # # # # # # # # # | #
               | # # # # # # # # # |
"""

frame2 = """           
                       ,-------------------.
                     ,'                    ;  '::
                   ,'                    .'|':::::'
            ::.: ,'                    .'# |::::':
        ":":.: ,'                    .'# # |::':::'
         :'. : :-------------------.'# # # |':::'::
          :::.:| # # # # # # # # # | # # # |:::::'
         ::.:..| # # # # # # # # # | # # # |::'
        `:;.::'| # # # # # # # # # | # # # |
        '::..:'| #.:::.. # # # # # | # # # |
          :::::|.,:.:::::::..::# # | # # # |
         `:::::::::::.::..:#::::.# | # # # |
           `:":::`::'.::::. :: # # | # # # |
           ,`::::::::::'::'::' # # | # # # |
        `:;.::'| # # # # # # # # # | # # # |
               | # # # # # # # # # | # # # |
               | # # # # # # # # # | # # #
               | # # # # # # # # # | # #
               | # # # # # # # # # | #
               | # # # # # # # # # |
"""

print("""-------------------------------
JFK INTERNATIONAL AIRPORT, ENJOY YOUR FLIGHT
Date: SEPT 11 2001 7:59 AM
------------------------------------""")

name = input("what is your taken name")
print("wtf that shits cringe, you are Andrew Joseph Stack III")

plane = input("choose your character class, Boeing 767, 767, 767 or 767: ")

if plane == "767":
    takeoff = input("Do you want to takeoff? (y/n)")
    if takeoff == "y":
        print("you are now taking off from runway 4R")
    else:
        print("Too bad")
        print("you are now taking off from runway 4R")
    hijack = input("Do you want to hijack the plane?(y/y) ")
    tower = input("Which tower would you like to hit? 1, 2 or 3: ")
    print("Congrats you are now on your way to change world history")
    time.sleep(3)
    print(clear)
    print(frame0)
    time.sleep(1)
    wave_obj.play()
    print(clear)
    print(frame1)
    time.sleep(1)
    print(clear)
    print(frame2)
    time.sleep(5)
