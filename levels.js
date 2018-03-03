function initialize() {

    if (stage == 0) { // startup
        screen("left click to slash", "wasd moves")
        if (frames8 > 30)
            if (keyIsDown(82)) { // stage one enemy spawner
                stage++
                enemies.push(new Enemy1(200, 200))
                player.x = width / 2
                player.y = height / 2
            }
    }

    if (stage == 1) { // stage one
        if (enemies.length == 0) {
            screen("right click to shoot", "slashing enemies restores ammo")

            if (keyIsDown(82)) { // stage two enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy2(600, 200))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 2) { // stage two
        if (enemies.length == 0) {
            screen("Q to heal", "you only get so many")

            if (keyIsDown(82)) { // stage three enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy1(600, 200))
                enemies.push(new Enemy1(200, 200))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 3) { // stage three
        if (enemies.length == 0) {
            screen("spacebar to dash", "this one is important")

            if (keyIsDown(82)) { // stage four enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy1(600, 200))
                enemies.push(new Enemy2(400, 300))
                enemies.push(new Enemy1(200, 200))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 4) { // stage four
        if (enemies.length == 0) {
            screen("tutorial complete", "37 left")

            if (keyIsDown(82)) { // stage five enemy spawner
                stagecount++
                stage++
                enemies.push(new Enemy1(600, 200))
                enemies.push(new Enemy1(400, 300))
                enemies.push(new Enemy1(200, 200))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 5) { // stage five
        if (enemies.length == 0) {
            screen("5", "34 left")

            if (keyIsDown(82)) { // stage six enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy2(600, 200))
                enemies.push(new Enemy1(400, 300))
                enemies.push(new Enemy2(200, 200))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 6) { // stage six
        if (enemies.length == 0) {
            screen("6", "35 left")

            if (keyIsDown(82)) { // stage seven enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy2(100, 350))
                enemies.push(new Enemy2(300, 350))
                enemies.push(new Enemy2(500, 350))
                enemies.push(new Enemy2(700, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 7) { // stage seven
        if (enemies.length == 0) {
            screen("7", "34 left")
            if (keyIsDown(82)) { // stage eight
                stage++
                stagecount++
                enemies.push(new Enemy3(100, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 8) { // stage eight
        if (enemies.length == 0) {
            screen("8", "33 left")

            if (keyIsDown(82)) { // stage nine enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(100, 350))
                enemies.push(new Enemy3(700, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 9) { // stage nine
        if (enemies.length == 0) {
            screen("9", "32 left")
            if (keyIsDown(82)) { // stage ten enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(100, 200))
                enemies.push(new Enemy1(600, 350))
                enemies.push(new Enemy1(600, 100))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 10) { // stage ten
        if (enemies.length == 0) {
            screen("health kits restored", "31 left")
            if (keyIsDown(82)) { // stage eleven enemy spawner
                stage++
                stagecount++

                player.hp = 5
                player.kits = 3

                enemies.push(new Enemy3(100, 200))
                enemies.push(new Enemy3(600, 350))
                enemies.push(new Enemy1(600, 100))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 11) { // stage eleven
        if (enemies.length == 0) {
            screen("11", "30 left")
            if (keyIsDown(82)) { // stage twelve enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(100, 200))
                enemies.push(new Enemy2(600, 300))
                enemies.push(new Enemy2(600, 100))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 12) { // stage twelve
        if (enemies.length == 0) {
            screen("12", "29 left")
            if (keyIsDown(82)) { // stage thirteen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy2(100, 300))
                enemies.push(new Enemy2(100, 100))
                enemies.push(new Enemy2(700, 300))
                enemies.push(new Enemy2(700, 100))
                enemies.push(new Enemy3(500, 100))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 13) { // stage thirteen
        if (enemies.length == 0) {
            screen("13", "28 left")
            if (keyIsDown(82)) { // stage fourteen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy2(100, 300))
                enemies.push(new Enemy2(100, 100))
                enemies.push(new Enemy2(700, 300))
                enemies.push(new Enemy2(700, 100))
                enemies.push(new Enemy2(500, 50))
                enemies.push(new Enemy2(300, 50))
                enemies.push(new Enemy2(500, 350))
                enemies.push(new Enemy2(300, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 14) { // stage fourteen
        if (enemies.length == 0) {
            screen("14", "27 left")
            if (keyIsDown(82)) { // stage fifteen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(100, 100))
                enemies.push(new Enemy3(700, 100))
                enemies.push(new Enemy3(400, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 15) { // stage fifteen
        if (enemies.length == 0) {
            screen("15", "26 left")
            if (keyIsDown(82)) { // stage sixteen enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy1(100, 300))
                enemies.push(new Enemy1(100, 100))
                enemies.push(new Enemy1(700, 300))
                enemies.push(new Enemy1(700, 100))
                enemies.push(new Enemy1(500, 50))
                enemies.push(new Enemy1(300, 50))
                enemies.push(new Enemy1(500, 350))
                enemies.push(new Enemy1(300, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 16) { // stage sixteen
        if (enemies.length == 0) {
            screen("16", "25 left")
            if (keyIsDown(82)) { // stage seventeen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy4(200, 200))
                enemies.push(new Enemy4(600, 200))
                enemies.push(new Enemy3(400, 50))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 17) { // stage seventeen
        if (enemies.length == 0) {
            screen("17", "24 left")
            if (keyIsDown(82)) { // stage eighteen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy4(200, 200))
                enemies.push(new Enemy4(600, 200))
                enemies.push(new Enemy1(400, 50))
                enemies.push(new Enemy1(400, 350))
                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 18) { // stage eighteen
        if (enemies.length == 0) {
            screen("18", "23 left")
            if (keyIsDown(82)) { // stage nineteen enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(400, 50))
                enemies.push(new Enemy4(200, 125))
                enemies.push(new Enemy4(600, 125))
                enemies.push(new Enemy4(200, 275))
                enemies.push(new Enemy4(600, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 19) { // stage nineteen
        if (enemies.length == 0) {
            screen("19", "22 left")
            if (keyIsDown(82)) { // stage twenty enemy spawner
                stage++
                stagecount++
                enemies.push(new Enemy3(400, 50))
                enemies.push(new Enemy3(400, 350))
                enemies.push(new Enemy4(200, 125))
                enemies.push(new Enemy4(600, 125))
                enemies.push(new Enemy4(200, 275))
                enemies.push(new Enemy4(600, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 20) { // stage twenty
        if (enemies.length == 0) {
            screen("health kits restored", "21 left")
            if (keyIsDown(82)) { // stage twenty one enemy spawner
                stage++
                stagecount++

                player.hp = 5
                player.kits = 3

                enemies.push(new Enemy3(400, 50))
                enemies.push(new Enemy3(400, 350))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))
                enemies.push(new Enemy4(520, 200))
                enemies.push(new Enemy4(290, 200))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 21) { // stage twenty one
        if (enemies.length == 0) {
            screen("21", "20 left")
            if (keyIsDown(82)) { // stage twenty two enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy3(400, 50))
                enemies.push(new Enemy2(75, 200))
                enemies.push(new Enemy2(725, 200))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))
                enemies.push(new Enemy4(520, 200))
                enemies.push(new Enemy4(290, 200))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 22) { // stage twenty two
        if (enemies.length == 0) {
            screen("22", "19 left")
            if (keyIsDown(82)) { // stage twenty three enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy2(75, 100))
                enemies.push(new Enemy2(75, 300))
                enemies.push(new Enemy2(725, 100))
                enemies.push(new Enemy2(725, 300))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))
                enemies.push(new Enemy4(520, 200))
                enemies.push(new Enemy4(290, 200))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 23) { // stage twenty three
        if (enemies.length == 0) {
            screen("23", "18 left")
            if (keyIsDown(82)) { // stage twenty four enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy5(75, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 24) { // stage twenty four
        if (enemies.length == 0) {
            screen("24", "17 left")
            if (keyIsDown(82)) { // stage twenty five enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy5(75, 300))
                enemies.push(new Enemy5(75, 100))
                enemies.push(new Enemy5(725, 300))
                enemies.push(new Enemy5(725, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 25) { // stage twenty five
        if (enemies.length == 0) {
            screen("25", "16 left")
            if (keyIsDown(82)) { // stage twenty six enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy5(75, 200))
                enemies.push(new Enemy5(175, 200))
                enemies.push(new Enemy5(725, 300))
                enemies.push(new Enemy5(725, 100))
                enemies.push(new Enemy5(625, 300))
                enemies.push(new Enemy5(625, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 26) { // stage twenty six
        if (enemies.length == 0) {
            screen("26", "15 left")
            if (keyIsDown(82)) { // stage twenty seven enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy4(200, 200))
                enemies.push(new Enemy4(600, 200))
                enemies.push(new Enemy5(75, 300))
                enemies.push(new Enemy5(75, 100))
                enemies.push(new Enemy5(725, 300))
                enemies.push(new Enemy5(725, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 27) { // stage twenty seven
        if (enemies.length == 0) {
            screen("27", "14 left")
            if (keyIsDown(82)) { // stage twenty eight enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy4(200, 125))
                enemies.push(new Enemy4(600, 125))
                enemies.push(new Enemy4(200, 275))
                enemies.push(new Enemy4(600, 275))
                enemies.push(new Enemy5(75, 300))
                enemies.push(new Enemy5(75, 100))
                enemies.push(new Enemy5(725, 300))
                enemies.push(new Enemy5(725, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 28) { // stage twenty eight
        if (enemies.length == 0) {
            screen("28", "13 left")
            if (keyIsDown(82)) { // stage twenty nine enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))
                enemies.push(new Enemy4(520, 200))
                enemies.push(new Enemy4(290, 200))
                enemies.push(new Enemy5(75, 300))
                enemies.push(new Enemy5(75, 100))
                enemies.push(new Enemy5(725, 300))
                enemies.push(new Enemy5(725, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 29) { // stage twenty nine
        if (enemies.length == 0) {
            screen("29", "12 left")
            if (keyIsDown(82)) { // stage thirty enemy spawner 
                stage++
                stagecount++

                enemies.push(new Enemy2(150, 200))
                enemies.push(new Enemy2(650, 200))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))
                enemies.push(new Enemy3(75, 200))
                enemies.push(new Enemy3(725, 200))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 30) { // stage thirty
        if (enemies.length == 0) {
            screen("health kits restored", "11 left")
            if (keyIsDown(82)) { // stage thirty one enemy spawner
                stage++
                stagecount++
                
                player.hp = 5
                player.kits = 3

                enemies.push(new Enemy6(150, 200))
                enemies.push(new Enemy6(650, 200))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 31) { // stage thirty one
        if (enemies.length == 0) {
            screen("31", "10 left")
            if (keyIsDown(82)) { // stage thirty two enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy2(150, 200))
                enemies.push(new Enemy2(650, 200))
                enemies.push(new Enemy6(150, 200))
                enemies.push(new Enemy6(650, 200))
                enemies.push(new Enemy4(150, 125))
                enemies.push(new Enemy4(650, 125))
                enemies.push(new Enemy4(150, 275))
                enemies.push(new Enemy4(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 32) { // stage thirty two
        if (enemies.length == 0) {
            screen("32", "9 left")
            if (keyIsDown(82)) { // stage thirty three enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy6(150, 125))
                enemies.push(new Enemy6(650, 125))
                enemies.push(new Enemy6(150, 275))
                enemies.push(new Enemy6(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 33) { // stage thirty three
        if (enemies.length == 0) {
            screen("33", "8 left")
            if (keyIsDown(82)) { // stage thirty four enemy spawner 
                stage++
                stagecount++

                enemies.push(new Enemy3(150, 125))
                enemies.push(new Enemy3(650, 125))
                enemies.push(new Enemy3(150, 275))
                enemies.push(new Enemy3(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 34) { // stage thirty four 
        if (enemies.length == 0) {
            screen("34", "7 left")
            if (keyIsDown(82)) { // stage thirty five enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy6(100,200))
                enemies.push(new Enemy3(150, 125))
                enemies.push(new Enemy3(650, 125))
                enemies.push(new Enemy3(150, 275))
                enemies.push(new Enemy3(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 35) { // stage thirty five 
        if (enemies.length == 0) {
            screen("35", "6 left")
            if (keyIsDown(82)) { // stage thirty six enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy6(100, 200))
                enemies.push(new Enemy6(700, 200))
                enemies.push(new Enemy2(150, 125))
                enemies.push(new Enemy2(650, 125))
                enemies.push(new Enemy2(150, 275))
                enemies.push(new Enemy2(650, 275))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 36) { // stage thirty six 
        if (enemies.length == 0) {
            screen("36", "5 left")
            if (keyIsDown(82)) { // stage thirty seven enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy3(50, 200))
                enemies.push(new Enemy3(750, 200))
                enemies.push(new Enemy4(150, 80))
                enemies.push(new Enemy4(150, 320))
                enemies.push(new Enemy4(650, 80))
                enemies.push(new Enemy4(650, 320))
                enemies.push(new Enemy4(400, 80))
                enemies.push(new Enemy4(400, 320))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 37) { // stage thirty seven 
        if (enemies.length == 0) {
            screen("37", "4 left")
            if (keyIsDown(82)) { // stage thirty eight enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy6(50, 200))
                enemies.push(new Enemy6(750, 200))
                enemies.push(new Enemy4(275, 200))
                enemies.push(new Enemy4(525, 200))
                enemies.push(new Enemy4(150, 80))
                enemies.push(new Enemy4(150, 320))
                enemies.push(new Enemy4(650, 80))
                enemies.push(new Enemy4(650, 320))
                enemies.push(new Enemy4(400, 80))
                enemies.push(new Enemy4(400, 320))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 38) { // stage thirty eight
        if (enemies.length == 0) {
            screen("38", "3 left")
            if (keyIsDown(82)) { // stage thirty nine enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy2(50, 200))
                enemies.push(new Enemy2(750, 200))
                enemies.push(new Enemy6(150, 80))
                enemies.push(new Enemy6(150, 320))
                enemies.push(new Enemy6(650, 80))
                enemies.push(new Enemy6(650, 320))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 39) { // stage thirty nine
        if (enemies.length == 0) {
            screen("39", "2 left")
            if (keyIsDown(82)) { // stage forty enemy spawner
                stage++
                stagecount++

                enemies.push(new Enemy5(50, 300))
                enemies.push(new Enemy5(750, 100))
                enemies.push(new Enemy5(50, 100))
                enemies.push(new Enemy5(750, 300))
                enemies.push(new Enemy2(150, 80))
                enemies.push(new Enemy2(150, 320))
                enemies.push(new Enemy2(650, 80))
                enemies.push(new Enemy2(650, 320))
                enemies.push(new Enemy2(400, 80))
                enemies.push(new Enemy2(400, 320))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 40) { // stage forty 
        if (enemies.length == 0) {
            screen("40", "1 left")
            if (keyIsDown(82)) {
                stage++
                stagecount++
                
                player.hp = 5
                player.kits = 3

                enemies.push(new Boss(width / 2, 100))

                player.x = width / 2
                player.y = height / 2
            }
        }
    }

    if (stage == 41) { //end screen
        if (enemies.length == 0) {
            fill("black")
            noStroke()
            rect(0, 0, width, height)
            textSize(50)
            textFont(custFont)
            textAlign(CENTER)
            fill("white")
            text("congratulations", width / 2, 50)
            textSize(22)
            text("you have become leo", width / 2, 75)
            textSize(19.5)

            if (deathcount == 1) {
                text("with only " + deathcount + " death", width / 2, 95)
            } else {
                text("with only " + deathcount + " deaths", width / 2, 95)
            }


            image(img3, width / 2 - 130, height / 2 - 100, 250, 200)

            if (frameCount % 30 === 0) {
                if (col == "white") {
                    col = "black"
                } else {
                    col = "white"
                }
            }
            fill(col)
            textSize(20)
            text("r to reset", width / 2, height - 50)

            if (keyIsDown(82)) {
                stage = 0
                stagecount = 0
                frames8 = 0
            }
        }
    }
}





function screen(text1, text2) { // function for "press r" screen
    fill("black")
    noStroke()
    rect(0, 0, width, height)
    textSize(50)
    textFont(custFont)
    textAlign(CENTER)
    fill("white")
    text(text1, width / 2, height / 2)

    textSize(22)
    text(text2, width / 2, height / 2 + 30)
    if (frameCount % 30 === 0) {
        if (col == "white") {
            col = "black"
        } else {
            col = "white"
        }
    }
    fill(col)
    textSize(20)
    text("r to advance", width / 2, height / 2 + 100)
}
