# decimal to binary converter
# if odd append 1 if even append 0

number = 4
hexadecimal = []


def to_binary(number):
    binary = []
    while number > 0:
        binary.insert(0, (number % 2).__str__())
        number //= 2
    print("".join(binary))


def to_octal(number):
    octal = []
    while number > 0:
        octal.insert(0, (number % 8).__str__())
        number //= 8
    print("".join(octal))


def to_hexadecimal(number):
    hexadecimal = []
    hexa_map = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }
    while number > 16:
        if number < 10:
            hexadecimal.insert(0, (number % 16).__str__())
        elif number < 17:
            hexadecimal.insert(0, hexa_map[number])
        else:
            number //= 16
    print("hello")
    print("".join(hexadecimal))


# to_binary(322)
# to_octal(1822)
to_hexadecimal(111)
