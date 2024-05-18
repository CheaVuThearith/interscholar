def howFarCanYouGo(main: int, secondary: int):
    distanceTraveled = main * 10
    transfer = main // 5
    if secondary >= transfer:
        distanceTraveled += transfer * 10        
    return distanceTraveled

print(howFarCanYouGo(10, 2))